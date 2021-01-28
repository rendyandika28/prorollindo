import React from "react";
import "./LaporanPenjualan.css";

const LaporanPenjualan = () => {
  return (
    <div className="laporan">
      <h2>laporan penjualan</h2>
      <div className="laporan__container">
        <form>
          <div className="laporan__bytype">
            <label htmlFor="bytype">Penjualan per tipe pelumas</label>
            <input type="radio" name="type" id="bytype" />
          </div>
          <div className="laporan__bymonth">
            <div>
              <label htmlFor="bymonth">Penjualan perbulan</label>
              <input type="radio" name="type" id="bymonth" />
            </div>
            <input type="date" name="date" id="date" />
          </div>
          <button type="submit">Cetak</button>
        </form>
      </div>
    </div>
  );
};

export default LaporanPenjualan;
