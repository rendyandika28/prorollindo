import React from "react";
import { Route } from "react-router-dom";
import {
  Faktur,
  LaporanPenjualan,
  Pelanggan,
  Pembayaran,
  Pemesanan,
  Produk,
  SuratJalan,
  About,
} from "..";
import { Header, Sidebar } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main>
        <aside className="side-bar">
          <Sidebar />
        </aside>
        <aside className="home__content">
          <Route path="/admin/pelanggan" component={Pelanggan} />
          <Route path="/admin/produk" component={Produk} />
          <Route path="/admin/pemesanan" component={Pemesanan} />
          <Route path="/admin/surat-jalan" component={SuratJalan} />
          <Route path="/admin/faktur" component={Faktur} />
          <Route path="/admin/pembayaran" component={Pembayaran} />
          <Route path="/admin/laporan-penjualan" component={LaporanPenjualan} />
          <Route path="/admin/about" component={About} />
        </aside>
      </main>
    </div>
  );
};

export default Home;
