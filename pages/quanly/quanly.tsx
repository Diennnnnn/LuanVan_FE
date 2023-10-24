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
import { Danhmuccsvc, Dichvu, Khuyenmai, Noiquy } from '@/Service/userService';
import CSVC_QL from '@/Components/quanly/CSVC_QL';
import DichvuQL from '@/Components/quanly/DichvuQL';
import KhuyenmaiQL from '@/Components/quanly/KhuyenmaiQL';


export default function LabTabs() {
  interface Noiquy {
    id: number;
    mota: string;
    motaEN: string;

  }
  interface DanhmucCSVC {
    id: number;
    tenCSVC: string;
    giagoc: number;
    soluong: number;
    thoigianmua: Date
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

  const [noiquy, setNoiquy] = useState<Noiquy[]>([]);
  const [csvc, setCSVC] = useState<DanhmucCSVC[]>([]);
  const [dichvu, setDichvu] = useState<Dichvu[]>([]);
  const [khuyenmai, setKhuyenmai] = useState<Khuyenmai[]>([]);


  const [value, setValue] = React.useState('1');
  const [open, setOpen] = React.useState(false);
  const [option, setOption] = React.useState(0)
  //   const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
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

    handleNoiquy();
    handleCSVC();
    handleLayDichVu();
    handleLayKhuyenmai();
  }, [])
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
            <Tab icon={<HolidayVillage />} iconPosition="start" label="home" sx={{ color: 'green' }} value="1" />
            <Tab icon={<MeetingRoom />} iconPosition="start" label="phòng" sx={{ color: 'green' }} value="2" />
            <Tab icon={<AssignmentIndIcon />} iconPosition="start" label="thông tin" sx={{ color: 'green' }} value="4" />
            <Tab icon={<ListIcon />} iconPosition="start" label="Phiếu đặt" sx={{ color: 'green' }} value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="flex">
            <div className="w-2/12 border-2 border-green-300 uppercase text-xl space-y-5">
              <ListItemButton >
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(1)} primary="cơ sở vật chất" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <ExtensionIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(2)} primary="Thiết bị" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <RoomServiceIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(3)} primary="Dịch vụ" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <DiscountIcon />
                </ListItemIcon>
                <ListItemText onClick={() => setOption(4)} primary="Khuyến mãi" />
              </ListItemButton>

              <ListItemButton onClick={() => setOption(5)}>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="nội quy" />
              </ListItemButton>
            </div>
            {option == 1 ? (
              <div className='w-10/12 border-2 border-green-300'>
                <CSVC_QL csvc={csvc} />
              </div>
            ) : null}

            {option == 2 ? (
              <div className='w-10/12'>
                sdfghjk
              </div>
            ) : null}
            {option == 3 ? (
              <div className='w-10/12   '>
                <DichvuQL dichvu={dichvu} />
              </div>
            ) : null}
            {option == 4 ? (
              <div className='w-10/12   '>
                <KhuyenmaiQL khuyenmai= {khuyenmai}/>
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
            <div className="w-2/12 border-2 border-green-300 uppercase text-xl space-y-5">

              <ListItemButton>
                <ListItemIcon>
                  <MyLocationIcon />
                </ListItemIcon>
                <ListItemText primary="Vị trí" />
              </ListItemButton>

              <ListItemButton >
                <ListItemIcon>
                  <PanoramaIcon />
                </ListItemIcon>
                <ListItemText primary="loại phòng" />
              </ListItemButton>

              <ListItemButton >
                <ListItemIcon>
                  <RoomPreferencesIcon />
                </ListItemIcon>
                <ListItemText primary="phòng" />
              </ListItemButton>
              {/* <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Phim" />
                {open ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton> */}

              {/* <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>

                    <ListItemText primary="Phim đang chiếu" />

                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>

                    <ListItemText primary="Phim sắp chiếu" />

                  </ListItemButton>
                </List>
              </Collapse> */}

            </div>
            <div className="w-10/12 border-2 border-red-300"></div>
          </div>
        </TabPanel>

        <TabPanel value="3">
          <div className='flex border-2 border-green-400 h-96  overflow-scroll'>
            <div className='w-8/12'></div>
            <table className=''>
              <thead>
                <tr>
                  <th className="border border-slate-300 text-center">#</th>
                  <th className="border border-slate-300 text-center">Tên phim</th>
                  <th className="border border-slate-300 text-center">Đạo diễn</th>
                  <th className="border border-slate-300 text-center">Diễn viên</th>
                  <th className="border border-slate-300 text-center">Nhà sản xuất</th>
                  <th className="border border-slate-300 text-center">Ngôn ngữ</th>
                  <th className="border border-slate-300 text-center">Tóm tắt</th>
                  <th className="border border-slate-300 text-center">Thời lượng</th>
                  <th className="border border-slate-300 text-center">Tác vụ</th>
                  <th className="border border-slate-300 text-center">Poster</th>
                  <th className="border border-slate-300 text-center">Trailer</th>
                  <th className="border border-slate-300 text-center">Ngày chiếu</th>
                  <th className="border border-slate-300 text-center">Trạng thái phim</th>
                  <th className="border border-slate-300 text-center">Giới hạn tuổi</th>
                  <th className="border border-slate-300 text-center">Quốc gia</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300 text-center">fgh</td>
                  <td className="border border-slate-300 text-center">dfcv</td>
                  <td className="border border-slate-300 text-center">sdfcv</td>
                  <td className="border border-slate-300 text-center">sdcfv</td>
                  {/* <td className="border border-slate-300 text-center">{valueRap ? valueRap : }</td> */}

                  <td className="border border-slate-300 text-center">
                    dfghjk
                  </td>

                </tr>
              </tbody>
            </table>

          </div>
        </TabPanel>

        <TabPanel value="4">
          <div className="flex">
            <div className="w-2/12 border-2 border-green-300 uppercase text-xl space-y-5">
              <ListItemButton>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="nhân viên" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="khách hàng" />
              </ListItemButton>

            </div>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}