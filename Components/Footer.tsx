import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse, faPhone, faEnvelope, faGlobe, } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
import { faTiktok, faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import D from "./D";

const roboto = Montserrat({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})
const Footer = () => {

    return (
        <div className={roboto.className}>
            <div className="relative  m-auto xl:w-10/12 w-full">

                <div className="flex">
                    <div className="md:basis-3/12  ">
                        <div className=" lg:h-40 lg:w-48 md:h-32 md:w-36 mt-12 bg-cover m-auto lg:mt-6 bg-[url('../public/logo.jpg')]"></div>
                    </div>
                    <div className="md:basis-5/12 basis-6/12 space-y-4 text-center pt-10 ">
                        <div>
                            <FontAwesomeIcon icon={faHouse} />
                            <label className="pl-3">47 Đặng Thái Thân, Phường 3 Đà Lạt</label>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faPhone} />
                            <label className="pl-3">0899509000</label>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <label className="pl-3">home.thekupid@gmail.com</label>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGlobe} />
                            <label className="pl-3">www.thekupid.com</label>
                        </div>
                    </div>
                    <div className="md:basis-4/12 basis-6/12 space-y-4 p-6 pl-[5%]">
                        <label className="uppercase text-xl ">kết nối với chúng tôi<br /></label>
                        <div>
                            <Link href=''><FontAwesomeIcon icon={faFacebook} style={{ color: "#3b5998", }} />
                                <span className="pl-3">Facebook</span>
                            </Link>
                        </div>
                        <div>
                            <Link href=''><FontAwesomeIcon icon={faTiktok} />
                                <span className="pl-3">Tiktok</span>
                            </Link>
                        </div>
                        <div>
                            <Link href=''><FontAwesomeIcon icon={faInstagram} style={{ color: "#3b5998, #4267b2 ", }} />
                                <span className="pl-3">Instagram</span>
                            </Link>
                        </div>
                        <div>
                            <Link href=''><FontAwesomeIcon icon={faYoutube} style={{ color: "#cd201f", }} />
                                <span className="pl-3">Youtube</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
export default Footer;
