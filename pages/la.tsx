import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { green } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
const Dropdown = () => {

  return (
    <div className="w-8/12 m-auto mt-10 pb-10">
      <p className="uppercase font-semibold text-2xl text-center">những quy định tại rạp phim cgv</p>
      <p className="uppercase font-semibold text-lg mt-3">i. nội quy phòng chiếu</p>
      <div className="ml-4">
        <li>Không quay phim, chụp ảnh.</li>
        <li>Tắt chuông điện thoại.</li>
        <li>Không hút thuốc.</li>
        <li>Không gây mất trật tự.</li>
        <li>Không nhai kẹo cao su.</li>
        <li>Không mang thú cưng vào rạp.</li>
        <li>Bảo quản tài sản cá nhân cẩn thận.</li>
        <li>Chỉ thức ăn và nước uống mua tại Cụm Rạp Chiếu Phim CGV Cinemas mới được phép mang vào rạp.</li>
        <li>Không sử dụng rượu, bia, thức uống có cồn (dù với bất kỳ nồng độ cồn nào), các chất kích thích khác trong khuôn viên Cụm Rạp Chiếu Phim CGV Cinemas.</li>
        <li>Sau 22 giờ Cụm Rạp Chiếu Phim CGV Cinemas không phục vụ khách dưới 13 tuổi</li>
        <li>Sau 23 giờ Cụm Rạp Chiếu Phim CGV Cinemas không phục vụ khách dưới 16 tuổi.</li>
        <li>Ban Quản Lý Cụm Rạp Chiếu Phim CGV Cinemas có quyền từ chối không cho Quý Khách vào Rạp Chiếu Phim nếu vi phạm.</li>
        <li>CGV Việt Nam có camera an ninh trong các Cụm Rạp Chiếu Phim CGV Cinemas.</li>
      </div>

      <p className="uppercase font-semibold text-lg mt-3">ii. phân loại phim theo độ tuổi</p>
      <p className=" font-semibold">1. Phân loại phim</p>
      <p>CGV Việt Nam thông báo tiêu chí phân loại phim theo lứa tuổi như sau:</p>

      <table className="border-collapse border border-slate-400 ...">
        <thead>
          <tr>
            <th className="border border-slate-300">Phân loại</th>
            <th className="border border-slate-300">Định nghĩa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-300">P</td>
            <td className="border border-slate-300 ">Phim được phép phổ biến đến người xem ở mọi độ tuổi.</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">K</td>
            <td className="border border-slate-300 ...">Phim được phổ biến đến người xem dưới 13 tuổi và có người bảo hộ đi kèm.</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">T13</td>
            <td className="border border-slate-300 ...">Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên (13+).</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">T16</td>
            <td className="border border-slate-300 ...">Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+).</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">T18</td>
            <td className="border border-slate-300 ...">Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên (18+).</td>
          </tr>
          <tr>
            <td className="border border-slate-300 ...">C</td>
            <td className="border border-slate-300 ...">Phim không được phép phổ biến.</td>
          </tr>

        </tbody>
      </table>

      <p className=" font-semibold">2. Lưu ý</p>
      <li>Quý Khách Hàng xem phim được phân loại T13, T16, T18 vui lòng mang theo giấy tờ tùy thân có ảnh nhận diện và ngày tháng năm sinh để đảm bảo việc tuân thủ theo quy định. CGV Việt Nam có quyền yêu cầu khách hàng xuất trình Giấy khai sinh, Căn cước công dân, Thẻ học sinh, thẻ sinh viên, bằng lái xe, hoặc các giấy tờ tùy thân khác để xác định độ tuổi Quý Khách Hàng.</li>
      <li>Ban Quản Lý Cụm Rạp Chiếu Phim CGV Cinemas có quyền kiểm tra và từ chối khách hàng nếu không đúng quy định về độ tuổi.</li>
      <p className=" font-semibold">3. Chế tài</p>
      <li>Phạt tiền từ 60.000.000 đồng đến 80.000.000 đồng đối với hành vi không đảm bảo người xem phim đúng độ tuổi theo phân loại phim.</li>

      <p className="uppercase font-semibold text-lg mt-3">iii. quy định về khung giờ chiếu phim cho trẻ em</p>
      <p className=" font-semibold">1. Quy định về khung giờ chiếu phim cho trẻ em</p>
      <p>CGV Việt Nam thông báo áp dụng quy định về khung giờ chiếu phim cho trẻ em như sau:</p>
      <p>(i) Giờ chiếu phim cho trẻ em dưới 13 tuổi tại Cụm Rạp Chiếu Phim CGV Cinemas kết thúc trước 22 giờ.</p>
      <p>(ii) Giờ chiếu phim cho trẻ em dưới 16 tuổi tại Cụm Rạp Chiếu Phim CGV Cinemas kết thúc trước 23 giờ.</p>
      <p className=" font-semibold">2. Lưu ý</p>
      <li>- CGV Việt Nam có quyền yêu cầu khách hàng xuất trình Giấy khai sinh, Căn cước công dân, Thẻ học sinh, thẻ sinh viên, bằng lái xe, hoặc các giấy tờ tùy thân khác để xác định độ tuổi Quý Khách Hàng.</li>
      <li>Ban Quản Lý Cụm Rạp Chiếu Phim CGV Cinemas có quyền kiểm tra và từ chối khách hàng nếu không đúng quy định về độ tuổi.</li>
      <p className=" font-semibold">3. Chế tài</p>
      <li>Phạt tiền từ 60.000.000 đồng đến 80.000.000 đồng đối với hành vi không đảm bảo người xem phim đúng độ tuổi theo phân loại phim.</li>

    </div>
  );
};

export default Dropdown;