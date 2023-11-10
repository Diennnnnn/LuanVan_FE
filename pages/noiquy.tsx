import { Montserrat } from "next/font/google";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { useEffect, useState } from "react";
import { Noiquy } from "@/Service/userService";

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const noiquy = () =>{

  interface Noiquy {
    id: number;
    mota: string;
    motaEN: string;

  }
  const [noiquy, setNoiquy] = useState<Noiquy[]>([]);
  const [id, setId] = useState(Number);

  // console.log(phong)

  useEffect(()=>{
    const handleNoiquy = async () => {
      try {
        const params = {
          id_noiquy: "ALL",
        };
        console.log(params)
  
        const response = await Noiquy(params);
        const res: Noiquy[] = response.nq;
        console.log(response)
        console.log(res)
        setNoiquy(res);
        // res.map((res)=>{
        //   setId(res.id)
        //   console.log("id",id)
        // })
        // console.log(phongs)
  
      } catch (error) {
        console.log(error);
      }
    };
    handleNoiquy();
  },[])



  return(
    <div className={roboto.className }>
        <Header/>
        <p className="text-center text-2xl font-semibold uppercase pt-10 text-green-500">Nội quy Homestay the kupid</p>

        {
          noiquy.map((item, index) => {
            return(
              <div key={index}>
                <div className=" w-9/12 pt-5 h-full m-auto list-disc space-y-4">
                  <li className="leading-loose ">{item.mota}
                    <p className="font-semibold pl-5">{item.motaEN}</p>
                  </li>
                </div>
              </div>
            )
          })
        }
        
        <Footer/>
    </div>

  )
}
export default noiquy;
