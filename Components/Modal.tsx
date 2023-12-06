import ReactDOM from "react-dom";
import styled from "styled-components";
// import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


type Props = {
  //   fullname: string;
  //   name_clinic: string;
  //   iddv: number;
  show: any;
  onClose: any;
};
// export type thongtinbenhnhan = {
//   id: number;
//   Ho: string;
//   Ten: string;
//   Dienthoai: string;
//   Gioitinh: string;
//   Diachi: string;
//   Hovaten: string;
// };
const Modal = ({ show, onClose }: Props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const handleCloseClick = () => {
    onClose()
    // console.log(onClose)
    // console.log(show)

  }

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const modalContent = show ? (

    <StyledModalOverlay>
      { }
      <StyledModal className="  w-[10/12]  rounded-lg ">
        <StyledModalHeader className=" ">

          <div className="bg-contain bg-no-repeat w-[350px] h-[600px] bg-[url('../public/qc1.jpg')]">
            <HighlightOffIcon onClick={handleCloseClick}/>
          </div>
          {/* <span className=" text-center uppercase w-full">
              Lịch chiếu CGV Cần Thơ
            </span>

            <button
              // href="#"
              className="rounded-full text-center h-7 w-7 bg-gray-300"
              onClick={handleCloseClick}
            >
              x
            </button> */}

        </StyledModalHeader>
        {
          (
            <StyledModal>
            </StyledModal>
          )}
        {/* <StyledModalBody className="bg-white">
          <div className="modal"></div>
        </StyledModalBody> */}
      </StyledModal>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as HTMLElement
    );
  } else {
    return null;
  }
};

const StyledModalBody = styled.div`
  padding-top: 1px;
`;

const StyledModalHeader = styled.div`
  /* display: flex;
  justify-content: flex-end;
  font-size: 25px; */
`;

const StyledModal = styled.div`
  /* background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px; */
`;
const StyledModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;

// 1.có ngày,id phim
// 2.có idcumrap => tất cả id_rap trong cụm rạp đó
//  lay từng id_rap + ngày,id phim(buoc1) => idchieu
// 3. id chieu => id suatchieu