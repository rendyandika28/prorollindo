import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AboutIcon,
  FakturIcon,
  FakturIconActive,
  LaporanIcon,
  LaporanIconActive,
  PelangganIcon,
  PelangganIconActive,
  PembayaranIcon,
  PembayaranIconActive,
  PemesananIcon,
  PemesananIconActive,
  ProdukIcon,
  ProdukIconActive,
  SurjalIcon,
  SurjalIconActive,
} from "../../assets/icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [menu] = useState([
    {
      url: "/admin/pelanggan",
      id: "pelanggan",
      img: PelangganIcon,
      imgActive: PelangganIconActive,
      title: "data pelanggan",
    },
    {
      url: "/admin/produk",
      id: "produk",
      img: ProdukIcon,
      imgActive: ProdukIconActive,
      title: "data produk",
    },
    {
      url: "/admin/pemesanan",
      id: "pemesanan",
      img: PemesananIcon,
      imgActive: PemesananIconActive,
      title: "data pemesanan",
    },
    {
      url: "/admin/surat-jalan",
      id: "surat-jalan",
      img: SurjalIcon,
      imgActive: SurjalIconActive,
      title: "data surat jalan",
    },
    {
      url: "/admin/faktur",
      id: "faktur",
      img: FakturIcon,
      imgActive: FakturIconActive,
      title: "data faktur",
    },
    {
      url: "/admin/pembayaran",
      id: "pembayaran",
      img: PembayaranIcon,
      imgActive: PembayaranIconActive,
      title: "data pembayaran",
    },
    {
      url: "/admin/laporan-penjualan",
      id: "laporan-penjualan",
      img: LaporanIcon,
      imgActive: LaporanIconActive,
      title: "laporan penjualan",
    },
  ]);

  const [menuActive, setMenuActive] = useState("pelanggan");

  const activeMenu = () => {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1);
    menu.forEach((item) => {
      if (item.id === lastURLSegment) {
        const prevMenu = document.querySelector(`.sidebar .active`);
        if (prevMenu) {
          prevMenu.classList.remove("active");
        }
        const active = document.querySelector(`.sidebar #${lastURLSegment}`);
        active.classList.add("active");
        setMenuActive(lastURLSegment);
      } else if (lastURLSegment === "about") {
        const prevMenu = document.querySelector(`.sidebar .active`);
        if (prevMenu) {
          prevMenu.classList.remove("active");
        }
      }
    });
  };

  useEffect(() => {
    activeMenu();
  }, [window.location.href]);

  return (
    <div className="sidebar">
      <ul>
        {menu.map((item) => (
          <Link to={item.url} style={{ textDecoration: "none" }} key={item.id}>
            <li id={item.id}>
              <span>
                <img
                  src={item.id === menuActive ? item.imgActive : item.img}
                  alt="icon sidebar"
                />
              </span>
              <span>{item.title}</span>
            </li>
          </Link>
        ))}
      </ul>
      <Link
        to="/admin/about"
        className="sidebar__about"
        style={{ textDecoration: "none" }}
      >
        <span>
          <img src={AboutIcon} alt="icon" />
        </span>
        <span>
          <h4>Tentang Kami</h4>
          <p>Kelompok Sistem Informasi Akuntansi</p>
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
