/* eslint-disable @next/next/no-img-element */

type Props = {
    img: any;
}

const Card = ({img}:Props)=>{



   return (
    <div>
        <div className="">
            <img className="h-96   object-contain" src={img} alt="hahaha"></img>
        </div>
    </div>
   ) 
}
export default Card;