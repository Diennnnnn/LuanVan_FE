
import React, { useState } from "react";
// import { Props } from "react-intl/src/components/message";
import { firebase, auth } from "./Firebase-config";
import { getParseTreeNode } from "typescript";
import { useRouter } from "next/router";
import { render } from "react-dom";
import App from "next/app";
import Router from "next/router";
import { Khachhang, Nhanvien_SDT, ThemTTKH_SDT } from "@/Service/userService";

// type Props = {
//   sdt: String;
// };

const SignInOTP = () => {
  interface Khachhang {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
    CCCD: string,
    SDT: string,
    email: string
  }
  interface Nhanvien {
    id: number;
    hotenNV: string;
    gioitinh: string,
    ngaysinh: Date,
    CCCD: string,
    SDT: string,
    email: string,
    diachi: string,
    chucvu: string
  }

  const [phoneNumber, setPhoneNumber] = useState("");
  const [sdt, setSdt] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState("INPUT_PHONE_NUMBER");
  const [result, setResult] = useState<any>()
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [nhanvien, setNhanvien] = useState<Nhanvien[]>([]);
  const [errorSDT, setErrorSDT] = useState(false)

  console.log("sdt1", phoneNumber)

  //lay thong tin theo sdt
  const handleKhachhang = async (phoneNumber: string) => {
    console.log("phoneNumber", phoneNumber)
    try {
      const params = {
        SDT: phoneNumber,
      };
      console.log(params)
      const response = await Khachhang(params);
      const res: Khachhang[] = response.khachhang;
      console.log(res)
      setKhachhang(res);


      //luu khachhang len local storage
      localStorage.setItem('khachhang', JSON.stringify(res));

    } catch (error) {
      console.log(error);
    }
  };

  const formatSDT = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSdt(e.target.value)

    if (e.target.value.match(/(0[3|5|7|8|9])+([0-9]{8})\b/g)) {
      setErrorSDT(false)
      console.log(e.target.value)
      if (e.target.value === "") return;
      let temp: any
      try {
        temp = e.target.value?.slice(1, 10)
        setPhoneNumber("+84" + temp)
        console.log("temp", temp)
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorSDT(true)
    }

  };

  const signin = () => {
    console.log("sdt", sdt)
    console.log("phoneNumber", phoneNumber)


    // if (sdt === " ") return;
    if (phoneNumber === "") return;
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });

    auth
      .signInWithPhoneNumber(phoneNumber, verify)
      .then((result: any) => {
        setResult(result);
        setStep("VERIFY_OTP");
      })
      .catch((err: any) => {
        alert(err);
      });
  };

  const router = useRouter();

  // const handleErrorSDT = (val: string) => {
  //   set(val)
  //   if (val.match(/(0[3|5|7|8|9])+([0-9]{8})\b/g)) {
  //     setErrorSDT(false)
  //   } else {
  //     setErrorSDT(true)
  //   }
  // }

  const ValidateOtp = (phoneNumber: string) => {
    if (otp === null) return;

    result
      .confirm(otp)
      .then(async (result: any) => {
        setStep("VERIFY_SUCCESS");

        // handleKhachhang(sdt)
        try {
          const params = {
            SDT: sdt,
          };
          console.log(params)
          const response1 = await Nhanvien_SDT(params);
          const res1: Nhanvien[] = response1.nhanvien_sdt; //gán dữ liệu vào res
          console.log(response1)
          setNhanvien(res1); //gán res vào setPhong
          if (res1.length === 1) {
            localStorage.setItem('nhanvien', JSON.stringify(res1));
            router.push({
              pathname: '/quanly/quanly',
              // query: { phoneNumber: phoneNumber },
            })
          }
          else {
            try {
              const params = {
                SDT: sdt,
              };
              console.log(params)
              const response = await Khachhang(params);
              const res: Khachhang[] = response.khachhang;
              console.log("sdfsdfsd", res.length)
              if (res.length === 0) {
                let res = await ThemTTKH_SDT(
                  {
                    sdt: sdt

                  }
                );
                if (res && res.errCode === 0) {
                  try {
                    const params = {
                      SDT: sdt,
                    };
                    console.log(params)
                    const response2 = await Khachhang(params);
                    const res2: Khachhang[] = response2.khachhang;
                    //luu khachhang len local storage
                    localStorage.setItem('khachhang', JSON.stringify(res2));
                    console.log(res2)
                    setKhachhang(res2);
                  } catch (error) {
                    console.log(error);
                  }
                } else {
                  console.log(res)
                  alert("Tài khoản không tồn tại")
                };
              } else {
                //luu khachhang len local storage
                localStorage.setItem('khachhang', JSON.stringify(res));
                console.log(res)
                setKhachhang(res);
              }



            } catch (error) {
              console.log(error);
            }
            router.push({
              pathname: '/',
              // query: { phoneNumber: phoneNumber },
            })
          }
        } catch (error) {
          console.log(error);
        }



      })
      .catch((err: any) => {
        alert("Incorrect code");
      });
    // if (step === "VERIFY_SUCCESS") {

    // }
  };

  //   const handleSuccess = (phoneNumber: string) => {
  //     console.log("sdt", phoneNumber)
  // ;
  //     router.push({
  //       pathname: '/thongtinKH',
  //       // query: { phoneNumber: phoneNumber },
  //     })
  //   }

  return (
    <div style={{ marginTop: 100 }}>
      <center>

        {step === "INPUT_PHONE_NUMBER" && (
          <div className="form bg-gray-100 w-80 ">
            <h1 className="pt-2">Vui lòng đăng nhập</h1>
            <div className="mb-4">
              <input
              minLength={10}
              maxLength={10}
                value={sdt}
                // onChange={(e) => {
                //   setSdt(e.target.value);
                // }}
                onChange={formatSDT}
                placeholder="Số điện thoại"
                className=" h-10 w-60 mt-4 border-gray-400 bg-gray-100 border-solid outline-none  border-b-2"
              />
              {errorSDT ? <p className="text-red-500 text-xs pt-3">Vui lòng nhập đúng số điện thoại</p> : ''}

              <div id="recaptcha-container"></div>
              <button
                onClick={signin}
                className="bg-green-700 w-60 h-10 mt-5 rounded-3xl font-semibold text-white outline-none hover:bg-indigo-700"
              >
                Send OTP
              </button>
              <div>
                <button onClick={() => Router.back()} className="text-right pt-3 pb-3">Trở về</button>
              </div>
            </div>
          </div>
        )}

        {step === "VERIFY_OTP" && (
          <div className="form bg-gray-100 w-80 h-48">
            <h1 className="pt-2">Vui lòng đăng nhập</h1>
            <input
              type="text"
              placeholder={"Enter your OTP"}
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              className="h-10 w-60 outline-none mt-4 border-gray-400 border-solid bg-gray-100 border-b-2"
            />
            <br />
            <br />
            <button
              className="bg-green-700 w-60 h-10 rounded-3xl font-semibold text-white hover:bg-indigo-700"
              onClick={() => ValidateOtp(phoneNumber)}
            >
              Đăng nhập
            </button>
            <div>
              <button onClick={() => Router.back()} className="text-right pt-3">Trở về</button>

            </div>
          </div>
        )}

        {/* {step === "VERIFY_SUCCESS" && handleSuccess(phoneNumber)} */}


        {step === "VERIFY_FAIL" && <h3>Verify Fail</h3>}

        {/* {step === 'VERIFY_SUCCESS' ?
handleSuccess()
: <h3>Verify Fail</h3>
} */}
      </center>
    </div>
  );
};

export default SignInOTP;
