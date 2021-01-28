import React from "react";
import "./Pembayaran.css";
import { Button } from "../../components";

const Pembayaran = () => {
  return (
    <div className="pembayaran">
      <h2>Data Pembayaran</h2>

      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="tambah-tab"
            data-toggle="tab"
            href="#tambah"
            role="tab"
            aria-controls="tambah"
            aria-selected="true"
          >
            tambah data
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="list-tab"
            data-toggle="tab"
            href="#list"
            role="tab"
            aria-controls="list"
            aria-selected="false"
          >
            List Data
          </a>
        </li>
      </ul>

      <div class="tab-content" id="myTabContent">
        {/* Tambah Datas */}
        <div
          class="tab-pane fade show active pembayaran__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">ID Pemesanan</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="totalamount">Jumlah Pembayaran</label>
              <input type="number" class="form-control" id="totalamount" />
            </div>
            <div class="form-group">
              <label for="date">Tanggal Pembayaran</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <Button text="Tambah Data" />
          </form>
        </div>
        {/* List Data */}

        <div
          class="tab-pane fade"
          id="list"
          role="tabpanel"
          aria-labelledby="list-tab"
        >
          profile
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
