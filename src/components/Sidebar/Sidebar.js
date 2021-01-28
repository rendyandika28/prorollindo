import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AboutIcon,
  FakturIcon,
  LaporanIcon,
  PelangganIcon,
  PembayaranIcon,
  PemesananIcon,
  ProdukIcon,
  SurjalIcon,
} from "../../assets/icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [menu] = useState([
    {
      url: "/admin/pelanggan",
      id: "pelanggan",
      img: PelangganIcon,
      title: "data pelanggan",
    },
    {
      url: "/admin/produk",
      id: "produk",
      img: ProdukIcon,
      title: "data produk",
    },
    {
      url: "/admin/pemesanan",
      id: "pemesanan",
      img: PemesananIcon,
      title: "data pemesanan",
    },
    {
      url: "/admin/surat-jalan",
      id: "surat-jalan",
      img: SurjalIcon,
      title: "data surat jalan",
    },
    {
      url: "/admin/faktur",
      id: "faktur",
      img: FakturIcon,
      title: "data faktur",
    },
    {
      url: "/admin/pembayaran",
      id: "pembayaran",
      img: PembayaranIcon,
      title: "data pembayaran",
    },
    {
      url: "/admin/laporan-penjualan",
      id: "laporan-penjualan",
      img: LaporanIcon,
      title: "laporan penjualan",
    },
  ]);

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
                <img src={item.img} alt="icon sidebar" />
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
