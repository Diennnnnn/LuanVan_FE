import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
// import Modal from './Modal';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';
const Chitietphim = () => {

    return (
        <div className=' w-10/12 m-auto mt-7  '>
            <p className='text-3xl uppercase font-normal'>Nội dung phim</p>
            <hr className='mt-2 border-black' />
            <div className='flex mt-6'>
                <div className='basis-7/12 border-2 border-gray-500 '>
                    <ReactPlayer
                        height={350}
                        width={650}
                        // playing={true}
                        controls={true}
                        poster
                        url="https://www.youtube.com/watch?v=JBh7SlUwPUg"></ReactPlayer>
                </div>
                <div className='basis-5/12 border-2 border-gray-800 space-y-2'>
                    <p className='uppercase text-2xl font-normal mb-1 text-red-500'>wolfoo và hòn đảo kỳ bí</p>
                    <div className='flex space-x-2 mb-3'>
                        <div className='flex '>
                            <AccessTimeIcon />
                            <p className='pl-2'>100 phút</p>
                        </div>
                        <div className='pl-5  flex'>
                            <CalendarTodayIcon />
                            <p className='pl-2'>13-10-2023</p>
                        </div>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-semibold'>Quốc gia:</p>
                        <p>Việt Nam</p>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-semibold'>Đạo diễn:</p>
                        <p>Phan Thị Thơ</p>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-semibold'>Nhà sản xuất:</p>
                        <p>Sconnect</p>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-semibold'>Thể loại:</p>
                        <p>Hoạt hình, Hài</p>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-semibold'>Diễn viên:</p>
                        <p>Sony Minh Hiếu, Đạt Phi, Như Ý</p>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-semibold'></p>
                        <p></p>
                    </div>
                    <div className='flex space-x-2'>
                        <p className='font-semibold'></p>
                        <p></p>
                    </div>

                    <button className='uppercase font-semibold bg-red-400 w-36 h-8 rounded-tr-lg rounded-bl-lg ml-[18%]'>đặt vé</button>

                </div>

            </div>
            <div className='mt-6 space-y-2'>
                <div className='flex space-x-2 '>
                    <InfoIcon sx={{ fontSize: 30 }}/>
                    <p className='font-semibold text-2xl'>Chi tiết</p>
                </div>
                <p className='text-justify indent-10'>Wolfoo and The Mysterious Island (Wolfoo và hòn đảo kỳ bí) - câu chuyện xoanh quanh nhân vật chính là chú sói nhỏ Wolfoo 8 tuổi - một chú bé vui vẻ, tốt bụng và yêu thích sự khám phá. Đồng hành cùng Wolfoo chính là cô em gái Lucy 6 tuổi tinh nghịch, hay làm nũng nhưng vô cùng yêu thương anh trai. Câu chuyện bắt đầu khi hai anh em Wolfoo và Lucy bị hút vào một chiếc dây chuyền và đến với Linh Giới - một thế giới vô cùng kỳ diệu. Tại Linh Giới, một sự cố bất ngờ đã khiến hai anh em bị chia tách. Trong hành trình tìm em gái, Wolfoo đã vô tình bị cuốn vào cuộc đấu tranh khốc liệt chống lại binh đoàn quỷ dữ - đứng đầu là Chúa Quỷ Bane - đang cai trị Đảo Thần Bí. Không chỉ là câu chuyện phiêu lưu thuần túy, bộ phim còn mang trong mình những bài học quý giá về sự sáng tạo, sự can đảm và cả tình yêu thương. Tất cả những điều đó đã tạo nên một bộ phim thỏa mãn sự giải trí nhưng cũng đầy tính giáo dục.</p>
            </div>
        </div>



    );
}

export default Chitietphim;

{/* {
                phim.map((item, index) => {
                    return (
                        <>
                            <div key={index}>
                                <div>
                                    {domLoaded && (
                                        <ReactPlayer
                                            height={300}
                                            width={300}
                                            // playing={true}
                                            controls={true}
                                            poster
                                            url={item.trailer} />

                                    )}
                                </div>
                                <div>
                                    <p>{item.tenphim}</p>
                                    <p>Quốc gia:{item.quocgia}</p>
                                    <p>Diễn viên:{item.dienvien}</p>
                                    <p>Nhà sản xuất:{item.nsx}</p>
                                    <p>Thể loại:</p>
                                    <p>Đạo diễn:{item.daodien}</p>
                                    <p>Ngày khởi chiếu{item.ngaychieu}</p>
                                </div>
                                <button className='bg-slate-600'>Đặt vé</button>
                                <div>
                                    <div>Nội dung phim</div>
                                    <div>{item.tomtat}</div>
                                </div>
                            </div>
                        </>
                    )
                })
            } */}
{/* <Modal
                id_phim={id_phim}
                onClose={() => setShowModal(false)}
                show={showModal}
            ></Modal> */}