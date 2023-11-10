// import axios from "axios";
export async function Phong(params: { id_phong: any }): Promise<any> {
  const { id_phong } = params;
  const response = await fetch(
    `http://localhost:8080/api/Phong?keyword=${id_phong}`
  );
  const data = await response.json();
  return data;
}
export async function Phong_tenphong(params: { tenphong: any }): Promise<any> {
  const { tenphong } = params;
  const response = await fetch(
    `http://localhost:8080/api/Phong_tenphong?keyword=${tenphong}`
  );
  const data = await response.json();
  return data;
}
export async function Phong_idLP(params: { phong_idLP: any }): Promise<any> {
  const { phong_idLP } = params;
  const response = await fetch(
    `http://localhost:8080/api/Phong_idLP?keyword=${phong_idLP}`
  );
  const data = await response.json();
  return data;
}
export async function Loaiphong_tenLP(params: { lp_tenloai: any }): Promise<any> {
  const { lp_tenloai } = params;
  const response = await fetch(
    `http://localhost:8080/api/Loaiphong_tenloai?keyword=${lp_tenloai}`
  );
  const data = await response.json();
  return data;
}
export async function Noiquy(params: { id_noiquy: any }): Promise<any> {
  const { id_noiquy } = params;
  const response = await fetch(
    `http://localhost:8080/api/Noiquy?keyword=${id_noiquy}`
  );
  const data = await response.json();
  return data;
}

export async function Loaiphong(params: { id_lp: any }): Promise<any> {
  const { id_lp } = params;
  const response = await fetch(
    `http://localhost:8080/api/Loaiphong?keyword=${id_lp}`
  );
  const data = await response.json();
  return data;
}

export async function Danhmuccsvc(params: { id_dmcsvc: any }): Promise<any> {
  const { id_dmcsvc } = params;
  const response = await fetch(
    `http://localhost:8080/api/Danhmuccsvc?keyword=${id_dmcsvc}`
  );
  const data = await response.json();
  return data;
}


export async function Dsthietbi(params: { id_phong: any }): Promise<any> {
  const { id_phong } = params;
  const response = await fetch(
    `http://localhost:8080/api/Dsthietbi?keyword=${id_phong}`
  );
  const data = await response.json();
  return data;
}

export async function Vitri(params: { id_vt: any }): Promise<any> {
  const { id_vt } = params;
  const response = await fetch(
    `http://localhost:8080/api/Vitri?keyword=${id_vt}`
  );
  const data = await response.json();
  return data;
}

export async function Khachhang(params: { SDT: any }): Promise<any> {
  const { SDT } = params;
  const response = await fetch(
    `http://localhost:8080/api/Khachhang?keyword=${SDT}`
  );
  const data = await response.json();
  return data;
}

export async function AllKhachhang(params: { id_allkh: any }): Promise<any> {
  const { id_allkh } = params;
  const response = await fetch(
    `http://localhost:8080/api/ALLKhachhang?keyword=${id_allkh}`
  );
  const data = await response.json();
  return data;
}

export async function AllNhanvien(params: { id_allnv: any }): Promise<any> {
  const { id_allnv } = params;
  const response = await fetch(
    `http://localhost:8080/api/LayNhanvien?keyword=${id_allnv}`
  );
  const data = await response.json();
  return data;
}

export async function Dichvu(params: { id_dv: any }): Promise<any> {
  const { id_dv } = params;
  const response = await fetch(
    `http://localhost:8080/api/Dichvu?keyword=${id_dv}`
  );
  const data = await response.json();
  return data;
}

export async function Khuyenmai(params: { id_km: any }): Promise<any> {
  const { id_km } = params;
  const response = await fetch(
    `http://localhost:8080/api/Khuyenmai?keyword=${id_km}`
  );
  const data = await response.json();
  return data;
}


export async function Datphong(params:{
  id_KH: number;
  id_phong: number;
  ngaydat: Date;
  check_in: string;
  check_out: string;
  songuoi: number;
  tongtien:number,
  thanhtoan:string,
  trangthai:string,
  ghichu:string,
  hotennguoio:string,
  SDT_nguoio:string,
  CCCD_nguoio:string
  }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/Datphong`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }
 //noi quy
  export async function QLnoiquy(params:{
    mota: string;
    motaEN: string;
    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemNoiquyQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLnoiquy(params:{
    id: number;
    mota: string;
    motaEN: string;
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaNoiquyQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLnoiquy(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaNoiquyQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }
 //csvc
  export async function ThemQLCSVC(params:{
    tenCSVC:string;
    giagoc:number;
    soluong:number;
    thoigianmua:Date
    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemCSVCQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLCSVC(params:{
    id: number;
    tenCSVC:string;
    giagoc:number;
    soluong:number;
    thoigianmua:Date
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaCSVCQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLCSVC(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaCSVCQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }


  //dich vụ
  export async function ThemQLDichvu(params:{
    tenDV:string;
    gia:number;
    DVT:string;
    ghichu:string;
    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemDichvuQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLDichvu(params:{
    id: number;
    tenDV:string;
    gia:number;
    DVT:string;
    ghichu:string;
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaDichvuQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLDichvu(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaDichvuQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  //khuyenmai
  export async function ThemQLKhuyenmai(params:{
    tenKM:string;
    phantram:number;
    mota:string;
    start:Date;
    finish:Date;
    dieukien:string;
    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemKhuyenmaiQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLKhuyenmai(params:{
    id: number;
    tenKM:string;
    phantram:number;
    mota:string;
    start:Date;
    finish:Date;
    dieukien:string;
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaKhuyenmaiQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLKhuyenmai(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaKhuyenmaiQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  //vitri
  export async function ThemQLVitri(params:{
    khu:string;
    tang:number;
    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemVitriQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLVitri(params:{
    id: number;
    khu:string;
    tang:number;
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaVitriQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLVitri(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaVitriQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  //lloaipphong

  export async function ThemQLLoaiphong(params:{
    tenloaiphong:string;
    songuoi:number;
    gia:number;

    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemLoaiphongQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLLoaiphong(params:{
    id: number;
    tenloaiphong:string;
    songuoi:number;
    gia:number;
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaLoaiphongQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLLoaiphong(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaLoaiphongQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  //thiet bi
  export async function ThemQLThietbi(params:{
    id_CSVC:number;
    id_Phong:number;
    soluong:number;
    thoigianbatdau:Date;


    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemThietbiQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLThietbi(params:{
    id: number;
    id_CSVC:number;
    id_Phong:number;
    soluong:number;
    thoigianbatdau:Date;
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaThietbiQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLThietbi(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaThietbiQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }
 
  //phong
  export async function ThemQLPhong(params:{
    id_LP:number;
    id_VT:number;
    tenphong:string;
    mota:string;
    dientich:number


    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemPhongQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLPhong(params:{
    id: number;
    id_LP:number;
    id_VT:number;
    tenphong:string;
    mota:string;
    dientich:number
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaPhongQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLPhong(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaPhongQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  //nhanvien

  export async function ThemQLNhanvien(params:{
    hotenNV: string,
    ngaysinh: Date,
    gioitinh: string,
    CCCD:string,
    SDT:string,
    email:string,
    diachi:string,
    chucvu:string,
    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemNhanvienQL`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
  export async function SuaQLNhanvien(params:{
    id: number;
    hotenNV: string,
    ngaysinh: Date,
    gioitinh: string,
    CCCD:string,
    SDT:string,
    email:string,
    diachi:string,
    chucvu:string,
    }): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/SuaNhanvienQL`,
    {
      method:"POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  export async function XoaQLNhanvien(params:{id: number;}): Promise<any> {
    const response = await fetch(`http://localhost:8080/api/XoaNhanvienQL`,
    {
      method:"DELETE",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  }

  //hinhanh
  export async function ThemHinhanh(params:{
    hinhanh: string,
    id_Phong: number,

    }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/PostPictures`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
  }
  export async function Layhinhanh(params: { id_layha: any }): Promise<any> {
      const { id_layha } = params;
      const response = await fetch(
        `http://localhost:8080/api/Layhinhanh?keyword=${id_layha}`
      );
      const data = await response.json();
      return data;
  }
  export async function Layhinhanh_IdPhong(params: { id_Phong: any }): Promise<any> {
    const { id_Phong} = params;
    const response = await fetch(
      `http://localhost:8080/api/Layhinhanh_IdPhong?keyword=${id_Phong}`
    );
    const data = await response.json();
    return data;
  }

    export async function SuaHinhanh(params:{
      id: number;
      hinhanh: string,
      id_Phong: number,
      }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/SuaHinhanh`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }
  
    export async function XoaHinhanh(params:{id: number;}): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/XoaHinhanh`,
      {
        method:"DELETE",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }


    export async function SuaTTKH(params:{
      id: number;
      hotenKH: string,
      ngaysinh: Date,
      gioitinh: string,
      CMND: string,
      SDT: string,
      email: string,
      avt: string,
      }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/SuaTTKH`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }


    export async function ThemTTKH_SDT(params:{
     sdt: string
      }): Promise<any> {
      const response = await fetch(`http://localhost:8080/api/ThemTTKH_SDT`,
      {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(params),
      });
      const data = await response.json();
      return data;
    }

    export async function XoaAvtKH(params:{
      id: number
       }): Promise<any> {
       const response = await fetch(`http://localhost:8080/api/XoaAvtKH`,
       {
         method:"POST",
         headers: {
           "Content-Type":"application/json",
         },
         body: JSON.stringify(params),
       });
       const data = await response.json();
       return data;
     }

     export async function VNPay(params:{  
          amount: number // số tiền
          bankCode: string
       }): Promise<any> {
       const response = await fetch(`http://localhost:8080/order/create_payment_url`,
       {
         method:"POST",
         headers: {
           "Content-Type":"application/json",
         },
         body: JSON.stringify(params),
       });
       const data = await response.json();
       return data;
     }


  export async function LayPhieudat(params: { id_pd: any }): Promise<any> {
    const { id_pd} = params;
    const response = await fetch(
      `http://localhost:8080/api/LayPhieudat?keyword=${id_pd}`
    );
    const data = await response.json();
    return data;
  }
  export async function Phieudat_idKH(params: { phieudat_idKH: any }): Promise<any> {
    const { phieudat_idKH } = params;
    const response = await fetch(
      `http://localhost:8080/api/LayPhieudat_idKH?keyword=${phieudat_idKH}`
    );
    const data = await response.json();
    return data;
  }


  export async function Nhanvien_SDT(params: { SDT: any }): Promise<any> {
    const { SDT } = params;
    const response = await fetch(
      `http://localhost:8080/api/LayNhanvien_SDT?keyword=${SDT}`
    );
    const data = await response.json();
    return data;
  }
// export async function DangKy_KH(params: {
//   hten_KH: string;
//   Ngaysinh: string;
//   gt_KH: string;
//   sdt_KH: string;
//   cccd_KH: string;
//   email_KH: string;
//   diachi_KH: string;
//   taikhoan_KH: string;
//   matkhau_KH: string;
// }): Promise<any> {
//   const response = await fetch(
//     `http://localhost:8080/api/Dangky`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(params),
//     }
//   );
//   const data = await response.json();
//   return data;
// }

// export async function Datve(params: {
//   hten_KH: string;
//   httt: string;
//   tongtien: number;
//   soluongghe: number;
//   ngaymuave: string;
//   id_KH: number;
//   id_ghe: number;
//   id_suatchieu: number;
//   id_rap: number;
//   id_cumrap: number;
//   id_KM: number;
//   id_NV: number;
//   id_doan: number;
// }): Promise<any> {
//   const response = await fetch(
//     `http://localhost:8080/api/Datve`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(params),
//     }
//   );
//   const data = await response.json();
//   return data;
// }

// export async function LayTTchitietve(params: { id_ve: number }): Promise<any> {
//   const { id_ve } = params;
//   const response = await fetch(
//     `http://localhost:8080/api/TTChitietve?keyword=${id_ve}`
//   );
//   const data = await response.json();
//   return data;
// }
// export async function LayTTGhe(params: { key: any }): Promise<any> {
//   const { key } = params;
//   const response = await fetch(
//     `http://localhost:8080/api/TTGhe?keyword=${key}`
//   );
//   const data = await response.json();
//   return data;
// }

// export async function layTTChieu(params: { id_rap: number, id_phim: number,id_suatchieu: number}): Promise<any> {
//   const { id_rap,id_phim,id_suatchieu } = params;
//   const response = await fetch(
//     `http://localhost:8080/api/TTChieu?keyword=${id_rap & id_phim & id_suatchieu }`
//   );
//   const data = await response.json();
//   return data;
// }


// export async function layTTChieu(params: {
//   id_suatchieu: number;
//   id_rap: number;
//   id_phim: number;
 
// }): Promise<any> {
//   const response = await fetch(
//     `http://localhost:8080/api/TTChieu`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(params),
//     }
//   );
//   const data = await response.json();
//   return data;
// }



