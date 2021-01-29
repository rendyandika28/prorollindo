import React from "react";
import './Pemesanan.css';
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../assets/icons";


const Pemesanan = () => {
  return <div className="pemesanan">
    <h3>Data Pemesanan</h3>
    

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
            Tambah Data
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
          class="tab-pane fade show active pemesanan__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">ID Produk</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>PR-001</option>
                <option>PR-002</option>
                <option>PR-003</option>
                <option>PR-004</option>
                <option>PR-005</option>
              </select>
            </div>
            <div class="form-group">
              <label >Jumlah</label>
              <input type="number" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Nama Perusahaan</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Justify Company</option>
                <option>Justify Company</option>
                <option>Justify Company</option>
                <option>Justify Company</option>
                <option>Justify Company</option>
              </select>
            </div>
            <div class="form-group">
              <label for="date">Tanggal Pemesanan</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <div class="form-group">
              <label for="date">Tanggal Pemesanan</label>
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
          <div class="pemesanan__tablebutton ">
          <Link to="/admin/pemesanan/edit"><Button text="Edit"/></Link>
          <Button text="Hapus"/>
          <div class="pemesanan__search">
          <img src={SearchIcon}></img><input type="text"/> 
          </div>
          </div>
          <table class="table">
  <thead>
    <tr>
      <th></th>
      <th scope="col">ID <br></br> Pemesanan</th>
      <th scope="col">Nama<br></br> Perusahaan</th>
      <th scope="col">Tanggal<br></br> Pemesanan</th>
      <th scope="col">Tanggal<br></br> Pengiriman</th>
      <th scope="col">Jumlah</th>
      <th scope="col">Total Harga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>200</td>
      <td>Rp. 2.300.000</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>200</td>
      <td>Rp. 2.300.000</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>200</td>
      <td>Rp. 2.300.000</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>200</td>
      <td>Rp. 2.300.000</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>200</td>
      <td>Rp. 2.300.000</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>200</td>
      <td>Rp. 2.300.000</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>200</td>
      <td>Rp. 2.300.000</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
          
    </div>
};

export default Pemesanan;
