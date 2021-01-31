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
  EditPemesanan,
  EditFaktur,
  EditSuratJalan,
  EditPembayaran,
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
          <Route path="/admin/pemesanan" exact component={Pemesanan} />
          <Route path="/admin/pemesanan/edit" component={EditPemesanan} />
          <Route path="/admin/surat-jalan" exact component={SuratJalan} />
          <Route path="/admin/surat-jalan/edit" component={EditSuratJalan} />
          <Route path="/admin/faktur" exact component={Faktur} />
          <Route path="/admin/faktur/edit" exact component={EditFaktur} />
          <Route path="/admin/pembayaran" exact component={Pembayaran} />
          <Route path="/admin/pembayaran/edit" component={EditPembayaran} />
          <Route path="/admin/laporan-penjualan" component={LaporanPenjualan} />
          <Route path="/admin/about" component={About} />
        </aside>
      </main>
    </div>
  );
};

export default Home;
