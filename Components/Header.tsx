import Head from "next/head";
import Link from "next/link";
const Header = () =>{
  return(
    <Head>
      <center>
        <div className="h-[100px] w-[120px] bg-cover bg-[url('../public/logo.jpg')]"> </div>
        <hr className="m-2"/>
        <div className="flex items-center justify-center gap-8 ">
            <Link href="">Trang chu</Link>
            <Link href="">Trang chu</Link>
            <Link href="">Trang chu</Link>
            <Link href="">Trang chu</Link>
        </div>
      </center>
      

      {/* <div className="flex">
      <div className="h-[100px] w-[120px] bg-cover bg-[url('../public/logo.jpg')]"> </div>
        <hr className="m-2"/>
        <div className=" flex items-center justify-center gap-8 ">
            <Link href="">Trang chu</Link>
            <Link href="">Trang chu</Link>
            <Link href="">Trang chu</Link>
            <Link href="">Trang chu</Link>
        </div>
      </div> */}

      {/* <div className="grid grid-cols-3 border-red-500">
        <div className="col-span-1">
            <p>sdfghjk</p>
        </div>
      </div> */}
    </Head>
  )
}
export default Header;
