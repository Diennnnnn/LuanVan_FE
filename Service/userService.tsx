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
    thoigianmua:string
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
    thoigianmua:string
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
    start:string;
    finish:string;
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
    start:string;
    finish:string;
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



