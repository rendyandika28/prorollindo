import React from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../assets/icons";
import "./Faktur.css";


const Faktur = () => {
  return <div>
     <div className="faktur">
    <h3>Data Faktur</h3>
    

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
          class="tab-pane fade show active faktur__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">ID Pemesann</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>PR-001</option>
                <option>PR-002</option>
                <option>PR-003</option>
                <option>PR-004</option>
                <option>PR-005</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="date">Tanggal Faktur</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <div class="form-group">
              <label for="date">Tanggal Jatuh Tempo</label>
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
          <div class="faktur__tablebutton ">
          <Link to="/admin/faktur/edit"><Button text="Edit"/></Link>
          <Button text="Hapus"/>
          <div class="faktur__search">
          <img src={SearchIcon}></img><input type="text"/> 
          </div>
          </div>
          <table class="table">
  <thead>
    <tr>
      <th></th>
      <th scope="col">ID <br></br> Faktur</th>
      <th scope="col">ID<br></br> Surat Jalan</th>
      <th scope="col">Nama<br></br> Perusahaan</th>
      <th scope="col">Tanggal<br></br> Jatuh Tempo</th>
      <th scope="col">Lunas</th>
      <th scope="col">Piutang</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>Rp. 2.300.000</td>
      <td>0</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>Rp. 2.300.000</td>
      <td>0</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>0</td>
      <td>Rp. 2.300.000</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>Rp. 2.300.000</td>
      <td>0</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>0</td>
      <td>Rp. 2.300.000</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>Rp. 2.300.000</td>
      <td>0</td>
    </tr>
    <tr>
      <td><input  type="checkbox" value="" id="defaultCheck1"></input></td>
      <th>PM-0001</th>
      <td>PT.Justify Meet</td>
      <td>07 Desember 2020</td>
      <td>12 januari 2021</td>
      <td>Rp. 2.300.000</td>
      <td>0</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
          
    </div>
  </div>;
};

export default Faktur;
