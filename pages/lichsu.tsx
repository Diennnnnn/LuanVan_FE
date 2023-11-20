import Header from "@/Components/Header";
import { Datphong, Phieudat_idKH, Phong, SuaPhieudat, VNPayRefund } from "@/Service/userService";
import dayjs from "dayjs";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Alert, Checkbox } from '@mui/material';
import React from "react";
import { useParams } from 'next/navigation'

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const lichsu = () => {
  const router = useRouter()

  interface Phieudat {
    id: number;
    id_KH: number;
    id_Phong: number;
    ngaydat: Date;
    check_in: Date;
    check_out: Date;
    songuoi: number,
    tongtien: number,
    thanhtoan: string,
    trangthai: string,
    hotennguoio: string,
    SDT_nguoio: string,
    CCCD_nguoio: string,
    ghichu: string,
    maGD: number,
    thoigianGD: string
    // dieukien: string
  }
  interface TTphieudat {
    id_KH: number,
    id_phong: number,
    ngaydat: Date,
    check_in: string,
    check_out: string,
    songuoi: number,
    tongtien: number,
    thanhtoan: string,
    trangthai: string,
    ghichu: string,
    hotennguoio: string,
    SDT_nguoio: string,
    CCCD_nguoio: string
  }
  interface Khachhang {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
    CMND: string,
    SDT: string,
    email: string,
    avt: string
  }
  interface Phong {
    //tên giống csdl
    id: number;
    id_LP: number;
    id_VT: number;
    tenphong: string;
    trangthai: string;
    mota: string;
  }
  const [phieudat_idKH, setPhieudat_idKH] = useState<Phieudat[]>([]);
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [id_khachhang, setId_khachhang] = useState(Number);
  const [phong, setPhong] = useState<Phong[]>([]);
  const [open, setOpen] = React.useState(false);
  const [agree, setAgree] = React.useState(Boolean);
  const [id, setId] = React.useState(Number);
  const [trangthai, setTrangthai] = React.useState('');
  const [ngaynhan, setNgaynhan] = useState(new Date());
  const [hoan, setHoan] = useState(Number);
  const [ttphieudat_idKH, setTThieudat_idKH] = useState<TTphieudat[]>([]);
  // const [tt, setTt] = useState(window.URL);
  const [magd, setMagd] = useState(Number);
  const [tggd, setTggd] = useState(String);
  const [sotien, setSotien] = useState(Number);

  // let { query } = useRouter()
  // console.log(">>> check params", query)

  // setResponseCode(String(router.query.vnp_ResponseCode))


  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [open1, setOpen1] = React.useState(false);
  const [agree1, setAgree1] = React.useState(Boolean);

  const theme1 = useTheme();
  const fullScreen1 = useMediaQuery(theme1.breakpoints.down('md'));

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handlePhong = async () => {
    try {
      const params = {
        id_phong: "ALL",
      };
      // console.log(params)

      const response = await Phong(params);
      const res: Phong[] = response.phong;
      // console.log(response)
      // console.log(res)
      setPhong(res);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("tt", tt)

  // const handleLuuCSDL = () => {

  //   ttphieudat_idKH.map(async (item) => {
  //     let z = 1
  //     if (i === '00' && ttphieudat_idKH.length != 0) {
  //       let res = await Datphong(
  //         {
  //           id_KH: item.id_KH,
  //           id_phong: item.id_phong,
  //           ngaydat: item.ngaydat,
  //           check_in: item.check_in,
  //           check_out: item.check_out,
  //           songuoi: item.songuoi,
  //           tongtien: item.tongtien,
  //           thanhtoan: 'Đã thanh toán',
  //           trangthai: 'Chưa nhận phòng',
  //           ghichu: item.ghichu,
  //           hotennguoio: item.hotennguoio,
  //           SDT_nguoio: item.SDT_nguoio,
  //           CCCD_nguoio: item.CCCD_nguoio,
  //           maGD: Number(j),
  //           thoigianGD: String(k)
  //         }
  //       );
  //       if (res && res.errCode === 0) {
  //         handleLayLichsu()
  //         z = 2
  //         localStorage.removeItem('phieudat')
  //         router.push({
  //           pathname: '/lichsu'

  //         })
  //         alert("Đặt phòng thành công")
  //       } else {
  //         console.log(res)
  //         handleLayLichsu()
  //         localStorage.removeItem('phieudat')
  //         alert("Đặt phòng không thành công")
  //       };
  //     }
  //   })



  // }



  // }
  const handleLayLichsu = () => {
    let khachhang1 = JSON.parse(localStorage.getItem('khachhang') || '{}');

    if (Object.keys(khachhang1).length === 0) {
      console.log("true");
    } else {
      // console.log("ITEM",khachhang1.khachhang);
      setKhachhang(khachhang1);

      const ressss: Khachhang[] = khachhang1;
      // console.log("jhjj", ressss)

      ressss.map(async (res) => {
        // setId_khachhang(res.id)
        const params = {
          phieudat_idKH: res.id,
        };
        // console.log(params)
        const response1 = await Phieudat_idKH(params);
        const res1: Phieudat[] = response1.phieudat_idKH;
        // console.log(response1)
        // console.log(res1)
        setPhieudat_idKH(res1);
      })
    }
  }
  const handleClickOpen = (id: number, ngaynhan: Date, magd: number, tggd: string, tien: number) => {
    let d = new Date(ngaynhan)

    setId(id)
    setNgaynhan(d)
    setOpen(true);
    setMagd(magd)
    setTggd(tggd)
    setSotien(tien)
  };

  const handleCapnhatTrangthai = async () => {
    console.log('>>>checkin', ngaynhan)
    let ngay = ngaynhan.getDate()
    let thang = ngaynhan.getMonth() + 1
    let nam = ngaynhan.getFullYear()
    let d = new Date()
    let d1 = new Date(nam + '-' + thang + '-' + ngay)

    // let d1 = new Date(nam + '-' + thang + '-' + (ngay - 7))
    let d2 = new Date(nam + '-' + thang + '-' + (ngay - 5))
    let temp
    d.setHours(0)
    d.setMinutes(0)
    d.setSeconds(0)
    d.setMilliseconds(0)

    d1.setHours(0)
    d1.setMinutes(0)
    d1.setSeconds(0)
    d1.setMilliseconds(0)
    let songay = Math.ceil((d1.getTime() - d.getTime()) / (24 * 60 * 60 * 1000))

    console.log('>>>>temp = 100', songay)

    if (songay >= 7) {
      setHoan(100)
      temp = 100
      console.log('>>>>temp = 100', temp)

    } else if (songay < 7 && songay >= 5) {
      setHoan(50)
      temp = 50
      console.log('>>>>temp = 50', temp)

    } else {
      setHoan(0)
      temp = 0
      console.log('>>>>temp = 0', temp)

    }
    setOpen(false);
    setAgree(true)
    console.log('>>>>check % hoan tien', temp)


    let res = await SuaPhieudat(
      {
        id: id,
        trangthai: 'Đã hủy -' + ' ' + 'Hoàn' + ' ' + temp + '%'

      }
    )
    if (res && res.errCode === 0) {
      setTrangthai('')
      handleLayLichsu()
      alert("Cập nhật nội quy thành công")

    } else {
      console.log(res)
      alert("Cập nhật trạng thái không thành công")
    };
    if (temp != 0) {
      if (temp === 100) {
        let res = await VNPayRefund(
          {
            orderId: magd,
            transDate: tggd,
            amount: sotien,
            transType: '02',
            user: khachhang[0].hotenKH
          }
        );
        if (res && res.response.body.vnp_ResponseCode === '00') {
          console.log(res)
          alert("Hoàn tiền thành công")
        } else {
          console.log(res)
          alert("Hoàn tiền KHÔNG thành công")
        };
      }
      else {
        let res = await VNPayRefund(
          {
            orderId: magd,
            transDate: tggd,
            amount: sotien * (temp / 100),
            transType: '03',
            user: khachhang[0].hotenKH
          }
        );
        if (res && res.response.body.vnp_ResponseCode === '00') {
          console.log(res)

          alert("Hoàn tiền thành công")

        } else {
          console.log(res)
          alert("Hoàn tiền KHÔNG thành công")
        };
      }

    }

  }



  const handleThemnoiquy = async () => {

    let res = await VNPayRefund(
      {
        orderId: 856,
        transDate: '20231116115051',
        amount: 700000,
        transType: '03',
        user: 'khoia'
      }
    );
    if (res) {
      console.log(res)

      alert("Thêm nội quy thành công")

    } else {
      console.log(res)
      alert("Thêm nội quy không thành công")
    };

  }
    ;

  useEffect(() => {
    const params = new URLSearchParams(window.location.search) // id=123
    let vnp_TxnRef = params.get('vnp_TxnRef')
    let vnp_ResponseCode = params.get('vnp_ResponseCode')
    let vnp_PayDate = params.get('vnp_PayDate')


    let khs = JSON.parse(localStorage.getItem('khachhang') || '{}');
    if (Object.keys(khs).length === 0) {
      console.log("true");
      alert('Lỗi chưa đăng nhập')
    } else {
      const res1: Khachhang[] = khs;
      setKhachhang(res1);

      let phieudats = JSON.parse(localStorage.getItem('phieudat') || '{}');
      if (Object.keys(phieudats).length === 0) {
        console.log("true");
      } else {
        // setKhachhang(phieudats);
        const res: TTphieudat[] = phieudats;
        setTThieudat_idKH(res)


        res.map(async (item) => {
          console.log("vnp_ResponseCode",vnp_ResponseCode);

          if (vnp_ResponseCode === '00'  && vnp_PayDate && vnp_TxnRef) {

            let res = await Datphong(
              {
                id_KH: item.id_KH,
                id_phong: item.id_phong,
                ngaydat: item.ngaydat,
                check_in: item.check_in,
                check_out: item.check_out,
                songuoi: item.songuoi,
                tongtien: item.tongtien,
                thanhtoan: 'Đã thanh toán',
                trangthai: 'Chưa nhận phòng',
                ghichu: item.ghichu,
                hotennguoio: item.hotennguoio,
                SDT_nguoio: item.SDT_nguoio,
                CCCD_nguoio: item.CCCD_nguoio,
                maGD: Number(vnp_TxnRef),
                thoigianGD: vnp_PayDate
              }
            );
            if (res && res.errCode === 0) {
              handleLayLichsu()
              localStorage.removeItem('phieudat')
              // router.push({
              //   pathname: '/lichsu'

              // })
              alert("Đặt phòng thành công")
            } else {
              console.log(res)
              handleLayLichsu()
              // localStorage.removeItem('phieudat')
              alert("Đặt phòng không thành công")
            };
          }
        })

      }
    }

    // console.log('>>>> i', i)

    handleLayLichsu()

    // handleLuuCSDL()
    handlePhong()

  }, []);
  return (
    <div className={roboto.className}>
      <Header />
      <p className="uppercase text-2xl font-semibold text-center mt-8 text-green-500">lịch sử đặt phòng</p>
      <div className="mt-8">
        <table className=" text-center m-auto w-11/12">
          <thead>
            <tr className="bg-green-300 h-10">
              <th className=" w-20 ">#</th>
              <th className="">Ngày đặt</th>
              <th className="">Check_in</th>
              <th className=" ">Check_out</th>
              <th className=" ">Tên phòng</th>
              <th className="">Số tiền</th>
              <th className=" ">Trạng thái</th>
              <th className="">Ghi chú</th>
              <th className=" ">Mã GD</th>
              <th className="">Thời gian thực hiện GD</th>
              <th className="">Hủy phòng <ErrorOutlineIcon fontSize="small" onClick={handleClickOpen1} />
                <Dialog
                  fullScreen={fullScreen1}
                  open={open1}
                  onClose={() => setOpen1(false)}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">
                    <Alert className="uppercase" severity="info">Điều kiện để hoàn tiền phòng</Alert>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      <li>Nếu quý khách hủy đặt phòng <label className="font-semibold">trước 07 ngày</label> tính từ ngày nhận phòng, Home sẽ hoàn gửi lại <label className="font-semibold"> 100% </label>tiền phòng.</li>
                      <li>Nếu quý khách hủy đặt phòng <label className="font-semibold">trước 05 ngày</label> tính từ ngày nhận phòng, Home sẽ hoàn gửi lại <label className="font-semibold"> 50% </label> tiền phòng.</li>
                      <li>Nếu quý khách hủy đặt phòng <label className="font-semibold">từ sau 05 ngày</label> tính từ ngày nhận phòng, Home sẽ hoàn gửi lại <label className="font-semibold"> không hoàn trả </label> tiền phòng.</li>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => setOpen1(false)}
                    >
                      đóng
                    </Button>

                  </DialogActions>
                </Dialog>
              </th>

            </tr>
          </thead>
          <tbody>
            {
              phieudat_idKH.map((item, index) => {
                let i = item.id
                return (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className=" text-center">{item.id}</td>
                    <td className=" p-2">
                      {dayjs(item.ngaydat).format("DD/MM/YYYY")}
                    </td>
                    <td className="p-2">
                      {dayjs(item.check_in).format("DD/MM/YYYY")}
                    </td>
                    <td className=" p-2">
                      {dayjs(item.check_out).format("DD/MM/YYYY")}
                    </td>
                    <td className="p-2">
                      {phong.map((item1) =>
                        item1.id === item.id_Phong ? item1.tenphong : null
                      )}
                    </td>
                    <td className=" text-center">{item.tongtien}</td>
                    <td className=" text-center">{item.trangthai}</td>
                    <td className=" text-center">{item.ghichu}</td>
                    <td className=" text-center">{item.maGD}</td>
                    <td className=" text-center">{item.thoigianGD}</td>
                    <td className=" text-center">
                      <Checkbox
                        checked={item.id === id && open ? true : false || agree && item.id === id || item.trangthai === 'Đã hủy'}
                        disabled={agree && item.id === id || item.trangthai.slice(0,6) === 'Đã hủy' || item.trangthai === 'Đã nhận phòng'}
                        onClick={() => handleClickOpen(item.id, item.check_in, item.maGD, item.thoigianGD, item.tongtien)}></Checkbox>
                      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={() => setOpen(false)}
                        aria-labelledby="responsive-dialog-title"
                      >
                        <DialogTitle className='uppercase ' id="responsive-dialog-title">
                          {"Xác nhận hủy đặt phòng"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            <p>Chúng tôi sẽ gửi email xác nhận hủy đặt phòng đến <label className='font-semibold'>duyen@gmail.com</label> và hoàn tiền phòng nếu bạn đủ điều kiện. </p>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus
                            onClick={() => setOpen(false)}
                          >
                            hủy
                          </Button>
                          <Button onClick={handleCapnhatTrangthai} autoFocus>
                            Xác nhận
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </td>
                  </tr>
                )
              })
            }



          </tbody>
        </table>
        <button onClick={handleThemnoiquy}>{ttphieudat_idKH.map((i) => i.id_KH)}</button>

      </div>

    </div>

  )
}
export default lichsu;