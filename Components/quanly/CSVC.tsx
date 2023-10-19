import { Montserrat } from "next/font/google";

const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  // display: 'swap',
})

const CSVC = () => {


  return (
    <div className={roboto.className}>
        dfghjkl
    </div>

  )
}

export default CSVC;