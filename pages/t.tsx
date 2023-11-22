import { Navbar } from "flowbite-react";
import { useEffect, useState } from "react";
const T = () => {
  const arrp: number[] = []
  const [dsphong, setDsphong] = useState([
    {
      id: 0,

    },
  ])
  useEffect(()=>{
    arrp.push(1)
    dsphong.push({id:2})
  },[])
  return (
    <div>
      <div>
        {arrp}
      </div>
      <div>
        {dsphong.map((item, i) => {
          return (
            <p key={i}>
              {item.id}
            </p>
          )
        })}
      </div>
    </div>

  );
}
export default T;