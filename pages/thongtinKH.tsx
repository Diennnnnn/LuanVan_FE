import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const thongtinKH = () =>{

 
  return(
    <div className={roboto.className }>
        <Header/>
        <div className="w-8/12 mt-8 border-2 border-gray-100 m-auto rounded-md">
          <p className="font-semibold text-xl uppercase text-center m-5 ">thông tin khách hàng</p>
          <div className="grid grid-cols-2 gap-3 m-3 ">
            <div className="col-span-1 ">
              <div className="flex ">
                <div className="basis-1/4 space-y-5 ">
                <p>Họ và tên:</p>
                <p>Ngày sinh:</p>
                <p>Giới tính:</p>
                </div>

                <div className="basis-3/4 space-y-5">
                <input type="text" className="outline-none w-4/5 border-b-2 border-gray-400"/>
                <input type="date" className="outline-none w-4/5 border-b-2 border-gray-400"/>
                <div className="space-x-7 ">
                  <input type="radio" className=""/>  Nam
                  <input type="radio" className=""/>  Nữ
                </div>
                </div>
              </div>
              {/* <div className="flex space-x-6">
                <p>Họ và tên:</p>
                <input type="text" className="outline-none w-3/4 border-b-2 border-gray-400"/>
              </div>
              <div className="flex space-x-6">
                <p>Ngày sinh:</p>
                <input type="text" className="outline-none w-3/4 border-b-2 border-gray-400"/>
              </div>
              <div className="flex space-x-6">
                <p>Giới tính:</p>
                <input type="radio" className=""/>Nam
                <input type="radio" className=""/>Nữ
              </div> */}
             
            </div>
            
            <div className="col-span-1 ">
              <div className="flex ">
                <div className="basis-1/4 space-y-5 ">
                <p>CCCD:</p>
                <p>Số điện thoại:</p>
                <p>Email:</p>
                </div>

                <div className="basis-3/4 space-y-5">
                <input type="text" className="outline-none w-4/5 border-b-2 border-gray-400"/>
                <input type="" className="outline-none w-4/5 border-b-2 border-gray-400"/>
                <input type="" className="outline-none w-4/5 border-b-2 border-gray-400"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer/> */}
    </div>

  )
}
export default thongtinKH;
