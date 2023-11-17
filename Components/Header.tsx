import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@mui/material/IconButton';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import React, { useEffect } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import router from "next/router";
import Badge from '@mui/material/Badge';
import { styled } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import HistoryIcon from '@mui/icons-material/History';
import History from "@mui/icons-material/History";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

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
    email: string,
    avt: string
  }

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [khachhang, setKhachhang] = useState<Khachhang[]>([]);
  const [hoten, setHoten] = useState("");
  const [id_KH, setId_KH] = useState(Number);
  const [log, setLog] = useState(Boolean)
  const [log11, setLog11] = useState(Boolean)

  const [id_phong, setId_phong] = useState(Number)
  const [tenphong, setTenphong] = useState("")
  const [gia, setGia] = useState(Number)
  const [check_in, setCheck_in] = useState("")
  const [check_out, setCheck_out] = useState("")
  const [songuoi, setSonguoi] = useState(Number)
  const [avt, setAvt] = useState("")


  const handleDatphong = async () => {
    router.push({
      pathname: '/datphong',
      // query: { id_phong: id_phong, tenphong: tenphong, gia: gia, songuoi: songuoi, check_in: check_in, check_out: check_out } //ten bien: gia tri truyen vao
      // tenphong={tenphong || ''} gia={gia  ||0} songuoi={songuoi || 0} id_phong={id_phong || 0} check_in={check_in || ''} check_out={check_out || ''}
      query: { id_phong: null, tenphong: null, gia: null, songuoi: null, check_in: null, check_out: null, tenloaiphong: null } //ten bien: gia tri truyen vao

    })
  }
  const handleInfor = async () => {
    router.push({
      pathname: '/thongtinKH',
      // query: { id_phong: id_phong, tenphong: tenphong, gia: gia, songuoi: songuoi, check_in: check_in, check_out: check_out } //ten bien: gia tri truyen vao

    })
  }
  const handleUpdateInfor = async () => {
    router.push({
      pathname: '/capnhatthongtinKH',

    })
  }
  const handleLichsu = async () => {
    router.push({
      pathname: '/lichsu',

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
      ressss.map((i) => {
        if (i.avt != null) {
          setAvt(new Buffer(i.avt, "base64").toString("binary"))
        }

      })
    }

  }, []);

  return (
    <div>
      {/* <center className={roboto.className} > */}
      <div className="h-[90px] m-auto w-[100px] bg-cover bg-[url('../public/logo.jpg')]"> </div>
      <hr className="m-2" />

      <div className="flex items-center justify-center mt-2">
        <div className="basis-9/12  space-x-8 text-xl uppercase text-center">
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
                  <div onClick={handleLogin} className="border-2 border-gray-400  h-10 w-10 rounded-full hover:bg-gray-300"><FontAwesomeIcon icon={faUser} color="#33cc33" /></div>
                ) : (
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar src={avt} />
                  </StyledBadge>
                  // <Avatar alt="Semy Sharp" src="/hinh10.jpg" />

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
                      <MenuItem onClick={handleInfor}>
                        <Typography textAlign="center" sx={{ margin: 1 }}>
                          <PermContactCalendarIcon />
                          <label className="pl-2">Trang cá nhân</label>
                        </Typography>
                      </MenuItem>

                      <MenuItem onClick={handleUpdateInfor}>
                        <Typography  textAlign="center" sx={{ margin: 1 }}>
                          <EditIcon />
                          <label className="pl-2">Cập nhật thông tin</label>
                        </Typography>
                      </MenuItem>

                      <MenuItem onClick={handleLichsu}>
                        <Typography textAlign="center" sx={{ margin: 1 }}>
                          <History />
                          <label className="pl-2">Lịch sử đặt phòng</label>
                        </Typography>
                      </MenuItem>

                      <hr className="w-10/12 m-auto" />

                      <MenuItem onClick={handleOnClick}>
                        <Typography textAlign="center" sx={{ margin: 1 }}>
                          <LogoutIcon />
                          <label className="pl-2">Đăng xuất</label>
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
