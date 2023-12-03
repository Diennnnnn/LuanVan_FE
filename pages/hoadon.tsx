import { useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import ReportTemplate from '../Components/pdf';
import { GetServerSideProps } from 'next';

interface codeProductProps {

  id_pd: string | null
  checkinsom: string | null
  checkouttre: string | null
  tiendv: string | null

}
const Hoadon = ({ id_pd, checkinsom, checkouttre, tiendv }: codeProductProps) => {
  const reportTemplateRef = useRef(null);
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',
      // [297, 210],
      
    });
    // const doc = new jsPDF('l','mm',[794, 1123]);
    // https://github.com/MrRio/jsPDF#use-of-unicode-characters--utf-8
    // doc.addFileToVFS("Amiri-Regular.ttf", Lato-Black);
    doc.addFont("Lato-Italic.ttf", "Lato-Italic", "normal");
    doc.setFont("Lato-Italic", 'normal');

    // var font = doc.getFont();
    debugger;

    // doc.text('REST: là một dạng chuyển đổi cấu trúc dữ liệu, một kiểu kiến trúc để viết API. Nó sử dụng phương thức HTTP đơn giản để tạo cho giao tiếp giữa các máy. Vì vậy, thay vì sử dụng một URL cho việc xử lý một số thông tin người dùng, REST gửi một yêu cầu HTTP như GET, POST, DELETE … đến một URL để xử lý dữ liệu . ', 10, 10);
    // doc.text('200.00 €', 10, 20);
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js">
    </script>
    // doc.save('table.pdf')
    if (reportTemplateRef.current) {
      doc.html((reportTemplateRef.current), {
        async callback(doc) {
          doc.save('Bill');
        },
      });
    }
  };

// useEffect =(()=>{
//   const handleLayPhieudat = async () => {
//     try {
//         const params = {
//             id_pd: id_pd,
//         };
//         console.log(params)

//         const response = await LayPhieudat(params);
//         const res: Phieudat[] = response.phieudat;
//         // console.log(response)
//         // console.log(res)
//         setPhieudat(res);
//         res.map(async (res) => {
//             setTienphong(res.tongtien)
//             setHtenngo(Tranlate(res.hotennguoio))
//             const params = {
//                 id_allkh: res.id_KH,
//             };
//             console.log(params)

//             const response = await AllKhachhang(params);
//             const reskh: Khachhang[] = response.allkh;
//             // console.log(response)
//             // console.log(res)
//             setAllkh(reskh);
//             setHtenKH(Tranlate(reskh[0].hotenKH))
           
//             // setPhong(res);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };
// },[])



  return (
    <div>
      <button className="button" onClick={handleGeneratePdf}>
        Download
      </button>
      <div ref={reportTemplateRef}>
        <ReportTemplate id_pd={Number(id_pd)} checkinsom={Number(checkinsom)} checkouttre={Number(checkouttre)} tiendv={Number(tiendv)} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<codeProductProps> = async (
  context
) => {
  // const {phoneNumber} = context.query;


  const { id_pd } = context.query;
  const { checkinsom } = context.query;
  const { checkouttre } = context.query;
  const { tiendv } = context.query;



  return {
    props: {
      id_pd: id_pd as unknown as string | null,
      checkinsom: checkinsom as unknown as string | null,
      checkouttre: checkouttre as string | null,
      tiendv: tiendv as unknown as string | null,


    }
  }
}
export default Hoadon;