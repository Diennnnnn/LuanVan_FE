import { Montserrat } from "next/font/google";
import Router from "next/router";

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const loginNV = () =>{



  return(
    <div>
        <center>
        <div className="w-96 h-64 m-auto bg-gray-200 mt-10">
            <p className="uppercase text-2xl font-semibold pt-6">đăng nhập</p>
            <input className="text-base h-8 w-3/4 pl-2 mt-4" placeholder="Nhập tên tài khoản"></input>
            <input className="text-base h-8 w-3/4 pl-2 mt-4" placeholder="Nhập mật khẩu"></input>
            <button className="uppercase text xl h-8 w-1/2 mt-6 border-2 border-[#33cc33] hover:bg-[#33cc33]">đăng nhập</button>
            <div>
              <button onClick={() => Router.back()} className="text-right pt-3">Trở về</button>
            </div>
        </div>
        </center>
    </div>

  )
}
export default loginNV;