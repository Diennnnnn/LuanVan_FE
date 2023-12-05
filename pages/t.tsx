import Rating from "@mui/material/Rating";

const T = () => {

  return (
    <div className=" w-9/12 m-auto mt-10">
      <div className="">
        <div className="flex space-x-4">
          <p className="w-12 h-12 rounded-full bg-gray-500"></p>
          <p className="font-semibold text-xl pt-2">Vu Khoa</p>
        </div>
        <div className="pl-14 space-y-1">
          <div className=" flex  space-x-4">
            <Rating defaultValue={1} />
            <p className="">05/12/2023</p>
          </div>
          <p>phim raats hayyy</p>
        </div>

      </div>
      <div className="mt-5">
        <div className="flex space-x-4">
          <p className="w-12 h-12 rounded-full bg-gray-500"></p>
          <p className="font-semibold text-xl pt-2">Vu Khoa</p>
          <input className="h-9 w-96 border-2 border-black"></input>
        </div>
        {/* <div className="pl-14 space-y-1">
          <div className=" flex  space-x-4">
            <Rating defaultValue={1} />
            <p className="">05/12/2023</p>
          </div>
          <p>phim raats hayyy</p>
        </div> */}
      </div>
<input type="radio" defaultChecked/>
<input type="radio"/>

    </div>

    // <div className="bg-gray-200 w-96 m-auto mt-10 pb-5 rounded-lg space-y-4 text-center">
    //   <p className="uppercase font-semibold text-xl pt-5">Quên mật khẩu</p>
    //   <p className="mx-5">Vui lòng nhập email của bạn để xác nhận lấy lại mật khẩu</p>
    //   <input type="email" className=" border-2 border-black h-9 w-10/12 pl-1" />
    //   <button className=" bg-red-400 w-6/12 h-8 uppercase rounded-lg font-semibold">lấy lại mật khẩu</button>
    //   <p className="text-blue-500 text-sm">Quay lại đăng nhập</p>
    // </div>

  );
}
export default T;