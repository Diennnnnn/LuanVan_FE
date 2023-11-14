// import Chitietphim from '@/Components/Chitietphim';
// import D from '@/Components/D';
// import Header1 from '@/Components/Header1';
// import Header from '@/Components/Header1';
// import * as React from 'react';
// import { useEffect, useState } from 'react';
// import CommonUtils from "@/Components/CommonUtils"
// import { Layhinhanh,ThemHinhanh } from '@/Service/userService';
// function ResponsiveAppBar() {
//   interface HinhanhPhong {
//     id: number;
//     hinhanh: string;
//     id_Phong: number;

//   }
//   const [hinhanhPhong, setHinhanhPhong] = useState<HinhanhPhong[]>([]);

//   const [prevURLIMG, setPrevURLIMG] = useState("");
//   const [fileIMG, setFileIMG] = useState<File>()
//   const [hinhanh, setHinhanh] = useState("");
//   const [id_Phong, setId_Phong] = useState(1);

//   const handleOnChangeImage = async (event: { target: { files: any; }; }) => {
//     console.log("img")
//     setFileIMG(event.target.files[0]);

//     let data = event.target.files;
//     let file = data[0];

//     if (file) {
//       let base64img = await CommonUtils.getBase64(file);
//       console.log("check base64 img: ", base64img);
//       let objectUrl = URL.createObjectURL(file);
//       console.log("check objectUrl img: ", objectUrl);

//       setHinhanh(base64img)
//       setPrevURLIMG(objectUrl)

//     }
//     console.log("setPrevURLIMG", prevURLIMG)

//   };

//   const handleThemanh = async () => {
//     // console.log("mota", mota)
//     // console.log("motaEN", motaEN)

//     let res = await ThemHinhanh(
//       {
//         hinhanh: hinhanh,
//         id_Phong: id_Phong

//       }
//     );
//     if (res && res.errCode === 0) {
//       setHinhanh('')
//       setId_Phong(0)
//       // handleNoiquy1()
//       alert("Thêm hình ảnh thành công")

//     } else {
//       console.log(res)
//       alert("Thêm hình ảnh không thành công")
//     };

//   }

//   const handleLayhinhanh = async () => {
//     try {
//       const params = {
//         id_layha: "ALL",
//       };
//       console.log(params)

//       const response = await Layhinhanh(params);
//       const res: HinhanhPhong[] = response.layha;
//       console.log(response)
//       console.log(res)
//       setHinhanhPhong(res);
//       // res.map((res)=>{
//       //   setId(res.id)
//       //   console.log("id",id)
//       // })
//       // console.log(phongs)

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(()=>{

//     handleLayhinhanh();
//   },[])

//   return (
//     <div>
//       <div className="preview-img-container bg-slate-500">
//         <input
//           className="w-56 boder-2 bg-slate-400"
//           id="preview-img"
//           type="file"
//           accept=".png,.jpg"
//           hidden
//           // onChange={(e) => setFileIMG(e.target.files?.[0])}
//           onChange={(event) => handleOnChangeImage(event)}
//         />
//         <label className="lable-upload" htmlFor="preview-img">
//           Tải ảnh <i className="fas fa-upload"></i>
//         </label>

//       </div>
//       <div
//         className="preview-img bg-contain bg-no-repeat  w-96 h-32"

//         style={{
//           backgroundImage: `url(${prevURLIMG})`,
//         }}
//       // onClick={() => openPreviewImg()}
//       >
//       </div>
//       <button onClick={handleThemanh}>hhhhhhhhhhhhhhh</button>


//       {
//         hinhanhPhong.map((item, index) => {
//           return (
//             <div key={index}>
//               <div
//                 className="preview-img bg-contain bg-no-repeat  w-96 h-32"
//                 // src={new Buffer(item.anhminhhoa, "base64").toString("binary")}
//                 style={{
//                   backgroundImage: `url(${new Buffer(item.hinhanh, "base64").toString("binary")})`,
//                 }}
//               // onClick={() => openPreviewImg()}
//               >
//               </div>
//             </div>
//           )
//         })
//       }
//     </div >
//   );
// }
// export default ResponsiveAppBar;

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Checkbox } from '@mui/material';

export default function ResponsiveDialog() {
  const [open1, setOpen1] = React.useState(false);
  const [agree1, setAgree1] = React.useState(Boolean);

  const theme1 = useTheme();
  const fullScreen1 = useMediaQuery(theme1.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen1(true);
  };

  const handleAgree = () => {
    setOpen1(false);
    setAgree1(true)
  };

  return (
    <React.Fragment>
      {/* <input type='checkbox' onClick={handleClickOpen}></input> */}
      <Checkbox  onClick={handleClickOpen}></Checkbox>
      {/* <Button variant="outlined" className='ml-10 mt-10' onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        fullScreen={fullScreen1}
        open={open1}
        onClose={() => setOpen1(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className='uppercase ' id="responsive-dialog-title">
          {"Xác nhận hủy đặt phòng"}
        </DialogTitle>

        <DialogActions>
          <Button autoFocus
            onClick={() => setOpen1(false)}
          >
            huủy
          </Button>
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}