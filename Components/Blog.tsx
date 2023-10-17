import { Noto_Serif } from "next/font/google";

const noto_serif = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
    // display: 'swap',
  })
const Blog = () => {

    return (
        <div className={noto_serif.className }>
            <div className="grid grid-cols-2 gap-2 w-11/12 mt-40 h-64 m-auto ">
                <div className="col-span-1 ">
                    <p className="uppercase text-2xl">Bình luận phim</p>
                    <div className="flex">
                        <img src="/hinh10.jpg" className="w-52 h-36 mt-3"/>
                        <p>dfghj</p>
                    </div>
                    <div className="flex">
                        <img src='https://cdn.galaxycine.vn/media/2023/9/29/750x500_1695961597860.jpg' className="w-52 h-36 mt-3"/>
                        <p>dfghj</p>
                    </div>
                </div>
                <div className="col-span-1 ">
                    <p className="uppercase text-2xl">blog điện ảnh</p>
                    <div className="flex">
                        <img src='https://cdn.galaxycine.vn/media/2023/9/29/750x500_1695961597860.jpg' className="w-52 h-36 mt-3"/>
                        <p>dfghj</p>
                    </div>                    
                    <div className="flex">
                        <img src='https://cdn.galaxycine.vn/media/2023/9/29/750x500_1695961597860.jpg' className="w-52 h-36 mt-3"/>
                        <p>dfghj</p>
                    </div>                
                </div>
            </div>
        </div>
    )
}
export default Blog;