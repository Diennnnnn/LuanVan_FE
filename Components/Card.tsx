import Image from "next/image";

type Props = {
    img: any;
};

const Card = ({ img }: Props) => {
    return (
        <div className="">
            <div>
                <img className="object-cover h-16 w-16" src={img} alt="db" />
            </div>
        </div>
    )
}
export default Card;