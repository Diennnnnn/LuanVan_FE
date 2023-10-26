import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//icons fontwasome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from 'react'
config.autoAddCss = false


export default function App({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   localStorage.removeItem("khachhang");

  // }, []);
  return <Component {...pageProps} />
}
