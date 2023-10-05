import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const Header = () =>{
 
  return(
    <Head>
      <center className={roboto.className } >
        <div className="h-[90px] w-[100px] bg-cover bg-[url('../public/logo.jpg')]"> </div>
        <hr className="m-2"/>
        <div className="flex items-center justify-center gap-8 text-xl uppercase mt-2  ">
            <Link href="/" className="hover:text-[#33cc33]" >Trang chủ</Link>
            <Link href="/rooms" className="hover:text-[#33cc33]">Phòng</Link>
            <Link href="/noiquy" className="hover:text-[#33cc33]">Nội quy</Link>
            <Link href="/datphongg" className="hover:text-[#33cc33]">Đặt phòng</Link>
            <Link href="" className="hover:text-[#33cc33]">Liên hệ</Link>
            <div className="border-2 border-gray-400 pt-1 rounded-full h-10 w-10 hover:bg-gray-300"><Link href="/loginuser" className=""><FontAwesomeIcon icon={faUser} color="#33cc33" /></Link></div>
        </div>
      </center>
      

      
    </Head>
  )
}
export default Header;
