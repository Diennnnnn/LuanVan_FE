import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HolidayVillage from '@mui/icons-material/HolidayVillage';
import MeetingRoom from '@mui/icons-material/MeetingRoom';
import GavelIcon from '@mui/icons-material/Gavel';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ListIcon from '@mui/icons-material/List';
import CategoryIcon from '@mui/icons-material/Category';
import ExtensionIcon from '@mui/icons-material/Extension';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import DiscountIcon from '@mui/icons-material/Discount';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import PanoramaIcon from '@mui/icons-material/Panorama';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import GroupIcon from '@mui/icons-material/Group';
import NoiquyQL from '@/Components/quanly/NoiquyQL';
import { useEffect, useState } from 'react';
import { AllKhachhang, Danhmuccsvc, Dichvu, Dsthietbi, Khuyenmai, Loaiphong, Noiquy, Phong, Vitri } from '@/Service/userService';
import CSVC_QL from '@/Components/quanly/CSVC_QL';
import DichvuQL from '@/Components/quanly/DichvuQL';
import KhuyenmaiQL from '@/Components/quanly/KhuyenmaiQL';
import KhachhangQL from '@/Components/quanly/KhachhangQL';
import Thietbi_QL from '@/Components/quanly/Thietbi_QL';
import Vitri_QL from '@/Components/quanly/Vitri_QL';
import LoaiphongQL from '@/Components/quanly/LoaiphongQL ';
import Phong_QL from '@/Components/quanly/Phong_QL';
import NhanvienQL from '@/Components/quanly/Nhanvien_QL';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import HinhanhPhong from '@/Components/quanly/HinhanhPhong';
import Phieudat_QL from '@/Components/quanly/Phieudat_QL';
import Thongke from '@/Components/quanly/Thongke';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ChitietSDDV from '@/Components/quanly/ChitietSDDV';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import router from 'next/router';
import Hoadon_QL from '@/Components/quanly/Hoadon_QL';

// import Hoadon from '@/Components/quanly/Hoadon';

export default function LabTabs() {
  interface Phong {
    //tên giống csdl
    id: number;
    id_LP: number;
    id_VT: number;
    tenphong: string;
    trangthai: string;
    mota: string;
  }
  interface Dsthietbi {
    id: number;
    id_CSVC: number;
    id_Phong: number;
    soluong: number;
    thoigianbatdau: Date;
  }
  interface DanhmucCSVC {
    id: number;
    tenCSVC: string;
    giagoc: number;
    soluong: number;
    thoigianmua: Date
  }
  interface Noiquy {
    id: number;
    mota: string;
    motaEN: string;

  }

  interface Dichvu {
    id: number;
    tenDV: string;
    gia: number;
    DVT: string;
    ghichu: string;
  }
  interface Khuyenmai {
    id: number;
    tenKM: string;
    phantram: number;
    mota: string;
    start: string;
    finish: string;
    dieukien: string
  }
  interface Khachhang {
    id: number;
    hotenKH: string;
    gioitinh: string,
    ngaysinh: string,
    CMND: string,
    SDT: string,
    email: string,
    avt: string
  }
  interface Vitri {
    id: number;
    khu: string;
    tang: number;
    // dientich: number;
  }
  interface Loaiphong {
    id: number;
    tenloaiphong: string;
    songuoi: number;
    gia: number;
  }
  const [noiquy, setNoiquy] = useState<Noiquy[]>([]);
  const [csvc, setCSVC] = useState<DanhmucCSVC[]>([]);
  const [phong, setPhong] = useState<Phong[]>([]);
  const [thietbi, setThietbi] = useState<Dsthietbi[]>([]);
  const [vitri, setVitri] = useState<Vitri[]>([]);
  const [loaiphong, setLoaiphong] = useState<Loaiphong[]>([]);

  const [dichvu, setDichvu] = useState<Dichvu[]>([]);
  const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);
  const [allkh, setAllkh] = useState<Khachhang[]>([]);


  const [value, setValue] = React.useState('1');
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState(0)

  const [log, setLog] = useState(Boolean)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  //   const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleOnClick = () => {
    localStorage.removeItem("nhanvien");
    // setAnchorElUser(null);
    // setLog(false)
    console.log("check check")
    router.push({
      pathname: '/',

    })
  }
  // const handleClick = () => {
  //   setOpen(!open);
  // };
  useEffect(() => {
    const handleNoiquy = async () => {
      try {
        const params = {
          id_noiquy: "ALL",
        };
        console.log(params)

        const response = await Noiquy(params);
        const res: Noiquy[] = response.nq;
        console.log(response)
        console.log(res)
        setNoiquy(res);
      } catch (error) {
        console.log(error);
      }
    };

    const handleCSVC = async () => {
      try {
        const params = {
          id_dmcsvc: "ALL",
        };
        console.log(params)

        const response = await Danhmuccsvc(params);
        const res: DanhmucCSVC[] = response.dmcsvc;
        console.log(response)
        console.log(res)
        setCSVC(res);
      } catch (error) {
        console.log(error);
      }
    };

    const handlePhong = async () => {
      try {
        const params = {
          id_phong: "ALL",
        };
        console.log(params)

        const response = await Phong(params);
        const res: Phong[] = response.phong;
        console.log(response)
        console.log(res)
        setPhong(res);
      } catch (error) {
        console.log(error);
      }
    };


    const handleVitri = async () => {
      try {
        const params = {
          id_vt: "ALL",
        };
        console.log(params)

        const response = await Vitri(params);
        const res: Vitri[] = response.vt;
        console.log(response)
        console.log(res)
        setVitri(res);
      } catch (error) {
        console.log(error);
      }
    };

    const handleLoaiphong = async () => {
      try {
        const params = {
          id_lp: "ALL",
        };
        console.log(params)

        const response = await Loaiphong(params);
        const res: Loaiphong[] = response.loaiphong;
        console.log(response)
        console.log(res)
        setLoaiphong(res);
      } catch (error) {
        console.log(error);
      }
    };

    const handleLayDichVu = async () => {
      try {
        const params = {
          id_dv: "ALL",
        };
        console.log(params)

        const response = await Dichvu(params);
        const res: Dichvu[] = response.dichvu;
        console.log(response)
        console.log(res)
        setDichvu(res);
      } catch (error) {
        console.log(error);
      }
    };

    const handleLayKhuyenmai = async () => {
      try {
        const params = {
          id_km: "ALL",
        };
        console.log(params)

        const response = await Khuyenmai(params);
        const res: Khuyenmai[] = response.khuyenmai;
        console.log(response)
        console.log(res)
        setKhuyenmai(res);
      } catch (error) {
        console.log(error);
      }
    };

    const handleLayAllKhachhang = async () => {
      try {
        const params = {
          id_allkh: "ALL",
        };
        console.log(params)

        const response = await AllKhachhang(params);
        const res: Khachhang[] = response.allkh;
        console.log(response)
        console.log(res)
        setAllkh(res);
      } catch (error) {
        console.log(error);
      }
    };

    handleNoiquy();
    handleCSVC();
    handleLayDichVu();
    handleLayKhuyenmai();
    handleLayAllKhachhang();
    handlePhong();
    handleVitri();
    handleLoaiphong();
  }, [])
  return (

    <Box sx={{ width: '100%', typography: 'body1' }}>
      <SpeedDial
      onClick={handleOnClick}
      // className='bg-green-400 '
        ariaLabel="dang xuat"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon  sx={{color:'green'}}/>}
        // onChange={handleOnClick}
      >
      </SpeedDial>
{/* <button onClick={handleOnClick}>sdfghj</button> */}
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
            <Tab icon={<HolidayVillage />} iconPosition="start" label="home" sx={{ color: 'green' }} value="1" />
            <Tab icon={<MeetingRoom />} iconPosition="start" label="phòng" sx={{ color: 'green' }} value="2" />
            <Tab icon={<AssignmentIndIcon />} iconPosition="start" label="thông tin" sx={{ color: 'green' }} value="3" />
            <Tab icon={<ListIcon />} iconPosition="start" label="Phiếu đặt" sx={{ color: 'green' }} value="4" />
            <Tab icon={<ListIcon />} iconPosition="start" label="Thống kê" sx={{ color: 'green' }} value="5" />
            <Tab icon={<ChecklistIcon />} iconPosition="start" label="Chi tiết SDDV" sx={{ color: 'green' }} value="6" />
            <Tab icon={<ChecklistIcon />} iconPosition="start" label="Hóa đơn" sx={{ color: 'green' }} value="7" />

          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="flex">
            <div className="w-2/12 border-r-2 border-black uppercase text-xl space-y-5">
              <ListItemButton onClick={() => setOption(1)} className={`${option === 1 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="cơ sở vật chất" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(2)} className={`${option === 2 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <ExtensionIcon />
                </ListItemIcon>
                <ListItemText primary="Thiết bị" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(3)} className={`${option === 3 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <RoomServiceIcon />
                </ListItemIcon>
                <ListItemText primary="Dịch vụ" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(4)} className={`${option === 4 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <DiscountIcon />
                </ListItemIcon>
                <ListItemText primary="Khuyến mãi" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(5)} className={`${option === 5 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="nội quy" />
              </ListItemButton>
            </div>
            {option == 1 ? (
              <div className='w-10/12 '>
                <CSVC_QL csvc={csvc} />
              </div>
            ) : null}

            {option == 2 ? (
              <div className='w-10/12'>
                <Thietbi_QL phong={phong} csvc={csvc} />
              </div>
            ) : null}
            {option == 3 ? (
              <div className='w-10/12   '>
                <DichvuQL dichvu={dichvu} />
              </div>
            ) : null}
            {option == 4 ? (
              <div className='w-10/12   '>
                <KhuyenmaiQL khuyenmai={khuyenmai} />
              </div>
            ) : null}
            {option == 5 ? (
              <div className='w-10/12   '>
                <NoiquyQL noiquy={noiquy} />
              </div>
            ) : null}
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div className="flex">
            <div className="w-2/12 border-r-2 border-black uppercase text-xl space-y-5">

              <ListItemButton onClick={() => setOption(5)} className={`${option === 5 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <MyLocationIcon />
                </ListItemIcon>
                <ListItemText primary="Vị trí" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(6)} className={`${option === 6 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <WallpaperIcon />
                </ListItemIcon>
                <ListItemText primary="loại phòng" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(7)} className={`${option === 7 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <RoomPreferencesIcon />
                </ListItemIcon>
                <ListItemText primary="phòng" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(10)} className={`${option === 10 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <PanoramaIcon />
                </ListItemIcon>
                <ListItemText primary="Hình ảnh" />
              </ListItemButton>
            </div>
            {option == 5 ? (
              <div className='w-10/12   '>
                <Vitri_QL vitri={vitri} />
              </div>
            ) : null}
            {option == 6 ? (
              <div className='w-10/12   '>
                <LoaiphongQL loaiphong={loaiphong} />
              </div>
            ) : null}
            {option == 7 ? (
              <div className='w-10/12   '>
                <Phong_QL />
              </div>
            ) : null}

            {option == 10 ? (
              <div className='w-10/12   '>
                <HinhanhPhong />
              </div>
            ) : null}
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div className="flex">
            <div className="w-2/12 border-r-2 border-black uppercase text-xl space-y-5">
              <ListItemButton onClick={() => setOption(8)} className={`${option === 8 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="nhân viên" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(9)} className={`${option === 9 ? ' bg-gray-100' : ''}`}>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="khách hàng" />
              </ListItemButton>

            </div>
            {option == 8 ? (
              <div className='w-10/12'>
                <NhanvienQL />
              </div>
            ) : null}
            {option == 9 ? (
              <div className='w-10/12'>
                <KhachhangQL allkh={allkh} />
              </div>
            ) : null}
          </div>
        </TabPanel>

        <TabPanel value="4"><Phieudat_QL /></TabPanel>
        <TabPanel value="5"><Thongke /></TabPanel>

        <TabPanel value="6"><ChitietSDDV /></TabPanel>
        <TabPanel value="7"><Hoadon_QL/></TabPanel>
      </TabContext>
    </Box>
  );
}