import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import router from "next/router";
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  interface Khachhang {
    id: number;
    hotenKH: string;
    CMND: string,
    SDT: string,
    email: string
  }

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [hoten, setHoten] = useState("");
  const [id_KH, setId_KH] = useState(Number);
  const [log, setLog] = useState(Boolean)
  const [id_phong, setId_phong] = useState(Number)
  const [tenphong, setTenphong] = useState("")
  const [gia, setGia] = useState(Number)
  const [check_in, setCheck_in] = useState("")
  const [check_out, setCheck_out] = useState("")
  const [songuoi, setSonguoi] = useState(Number)


  const handleDatphong = async () => {
    router.push({
      pathname: '/datphong',
      query: { id_phong: id_phong, tenphong: tenphong, gia: gia, songuoi: songuoi, check_in: check_in, check_out: check_out } //ten bien: gia tri truyen vao

    })
  }
  const handleOpenUserMenu = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOnClick = () => {
    localStorage.removeItem("khachhang");
    setAnchorElUser(null);
    setLog(false)
  }
  const handleLogin = () => {
    router.push({
      pathname: '/loginuser',

    })
  }
  useEffect(() => {

    let khachhang1 = JSON.parse(localStorage.getItem('khachhang') || '{}');
    console.log("zxcvb", Object.keys(khachhang1).length)
    if (Object.keys(khachhang1).length === 0) {
      setLog(false)
    } else {
      setLog(true)
      setKhachhang(khachhang1);
      const ressss: Khachhang[] = khachhang1;
    }

  }, []);

  return (
    <div>
      {/* <center className={roboto.className} > */}
      <div className="h-[90px] m-auto w-[100px] bg-cover bg-[url('../public/logo.jpg')]"> </div>
      <hr className="m-2" />

      <div className="flex items-center justify-center mt-2">
        <div className="basis-9/12 space-x-8 text-xl uppercase text-center  ">
          <Link href="/" className="hover:text-[#33cc33]" >Trang chủ</Link>
          <Link href="/rooms" className="hover:text-[#33cc33]">Phòng</Link>
          <Link href="/noiquy" className="hover:text-[#33cc33]">Nội quy</Link>
          <Link href="" onClick={handleDatphong} className="hover:text-[#33cc33]">Đặt phòng</Link>
          <Link href="" className="hover:text-[#33cc33]">Liên hệ</Link>
        </div>
        {/* <Link href="/loginuser" className="border-2 border-gray-400  h-10 w-10 rounded-full hover:bg-gray-300"><FontAwesomeIcon icon={faUser} color="#33cc33" /></Link> */}
        <div className="">
          <Box sx={{ flexGrow: 0 }} >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {log === false ? (
                  <div onClick={handleLogin}>đăng nhập</div>
                ) : (
                  <Avatar alt="Semy Sharp" src="/hinh10.jpg" />

                )}
              </IconButton>
            </Tooltip>
            {
              log === false ?
                null : (
                  (
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <MenuItem onClick={handleOnClick}>
                        <Typography textAlign="center" sx={{ margin: 1 }}>
                          <LogoutIcon />Đăng xuất
                        </Typography>
                      </MenuItem>
                    </Menu>
                  )
                )
            }
          </Box>
        </div>

      </div>
      {/* <button s={()=>console.log("asd",log)}>clivk</button> */}
    </div>


  )
}
export default Header;
