
const T = () => {

  return (
    <div className="bg-gray-200 w-96 m-auto mt-10 pb-5 rounded-lg space-y-4 text-center">
      <p className="uppercase font-semibold text-xl pt-5">đặt lại mật khẩu</p>
      <p className="mx-5">Nhập lại mật khẩu mới cho tài khoản</p>
      <input type="password" className=" border-2 border-black h-9 w-10/12 pl-1"  placeholder="Nhập mật khẩu mới"/>
      <input type="email" className=" border-2 border-black h-9 w-10/12 pl-1" placeholder="Nhập lại mật khẩu" />
      <button className=" bg-red-400 w-6/12 h-8 uppercase rounded-lg font-semibold">Xác nhận</button>
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