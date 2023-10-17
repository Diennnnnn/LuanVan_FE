import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Footer from '@/Components/Footer';
import D from '@/Components/D';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faVideo } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faDiscourse } from '@fortawesome/free-brands-svg-icons';
import Button from '@mui/material/Button';
import Grow from '@mui/material/Grow';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popper from '@mui/material/Popper';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import DraftsIcon from '@mui/icons-material/Drafts';
import List from '@mui/material/List';
import VideocamIcon from '@mui/icons-material/Videocam';
import MovieIcon from '@mui/icons-material/Movie';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Blog from '@/Components/Blog';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');
  const [open, setOpen] = React.useState(false);
  //   const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  //   const handleToggle = () => {
  //     setOpen((prevOpen) => !prevOpen);
  //   };
  //   const handleClose = (event: Event | React.SyntheticEvent) => {
  //     if (
  //       anchorRef.current &&
  //       anchorRef.current.contains(event.target as HTMLElement)
  //     ) {
  //       return;
  //     }

  //     setOpen(false);
  //   };

  //   function handleListKeyDown(event: React.KeyboardEvent) {
  //     if (event.key === 'Tab') {
  //       event.preventDefault();
  //       setOpen(false);
  //     } else if (event.key === 'Escape') {
  //       setOpen(false);
  //     }
  //   }
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Doanh Thu" value="1" />
            <Tab label="Rạp" value="2" />
            <Tab label="Khuyến mãi" value="3" />
            <Tab label="Nhân Viên" value="4" />
            <Tab label="Khách hàng" value="5" />
          </TabList>
        </Box>
        <TabPanel value="1"><Blog/></TabPanel>
        <TabPanel value="2">
          <div className="flex">
            <div className="w-2/12 border-2 border-green-300 uppercase text-xl space-y-5">

              <ListItemButton>
                <ListItemIcon>
                  <VideocamIcon />
                </ListItemIcon>
                <ListItemText primary="Phòng chiếu" />
              </ListItemButton>

              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <MovieIcon />
                </ListItemIcon>
                <ListItemText primary="Phim" />
                {open ? <ExpandLess /> : <ExpandMore />}

              </ListItemButton>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText primary="Phim đang chiếu" />

                  </ListItemButton>
                  <ListItemButton sx={{ pl: 4 }}>
                    {/* <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon> */}
                    <ListItemText primary="Phim sắp chiếu" />

                  </ListItemButton>
                </List>
              </Collapse>


              <ListItemButton >
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Lịch chiếu" />
              </ListItemButton>



              {/* <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={open ? 'composition-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                    Dashboard
                    </Button>
                   
                    
                    <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper> */}
            </div>
            <div className="w-10/12 border-2 border-red-300"></div>
          </div>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}