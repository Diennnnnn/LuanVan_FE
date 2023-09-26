import  Slider  from "react-slick";
import Card from "@/Components/Card1";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const data = [
    { img: "/hinh1.jpg" },
    { img: "/hinh2.jpg" },
    { img: "/hinh3.jpg" },
    { img: "/hinh4.jpg" },
    { img: "/hinh5.jpg" },
    { img: "/hinh6.jpg" },
    { img: "/hinh8.jpg" },
    { img: "/hinh10.jpg" },
    { img: "/hinh11.jpg" },
    { img: "/hinh12.jpg" },
  ]

const MySlider = () =>{

    const setting = {
        arrows: true,
        Infinity: true,
        speed:500,
        slidesToShow:4,
        slidesToScroll:1,
        // nextArrow:<NextArrow />,
        // Responsive:[
        //     breakpoint:1200,

        // ]

    }

    return (
        <div className="">
            <Slider {...setting}>
            {data.map((el, index) => <Card key={index} img={el.img}></Card>)}

            </Slider>
        </div>
    )

}
export default MySlider;

