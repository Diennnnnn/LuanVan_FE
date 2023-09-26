import { Montserrat } from "next/font/google";

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
const lichsu = () =>{



  return(
    <div className={roboto.className }>
        hellooooooo
    </div>

  )
}
export default lichsu;