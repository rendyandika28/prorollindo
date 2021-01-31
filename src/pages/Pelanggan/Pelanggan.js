import React from "react";
import "./Pelanggan.css";
import { Button } from "../../components";
import SearchIcon from "../../assets/icons/search-icon.png";
import { Link } from "react-router-dom";

const Pelanggan = () => {
  return (
    <div className="pelanggan">
      <h2>Data Pelanggan</h2>

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
          class="tab-pane fade show active pelanggan__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form>
            <div class="form-group">
              <label for="nama_perusahaan">Nama Perusahaan</label>
             <input type="text" className="form-control" name="" id="nama_perusahaan"/>
            </div>
            <div class="form-group">
              <label for="alamat">Alamat</label>
             <input type="text" className="form-control" name="" id="alamat"/>
            </div>
            <div class="form-group">
              <label for="nomortelepon">Nomor Telepon</label>
             <input type="text" className="form-control" name="" id="nomortelepon"/>
            </div>
            <div class="form-group">
              <label for="penanggungjawab">Penanggung Jawab</label>
             <input type="text" className="form-control" name="" id="penanggungjawab"/>
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
           <div class="pelanggan__tablebutton ">
            <Link to="/admin/pelanggan/edit"><Button text="Edit"/></Link>
            <Button text="Hapus"/>
            <div class="pelanggan__search">
              <img src={SearchIcon}></img><input type="text"/> 
            </div>
          </div>
          <table class="table">
            <thead>
              <tr class="pelanggan__tablehead">
                <th scope="col"></th>
                <th scope="col">ID <br/> Pelanggan</th>
                <th scope="col">Nama <br/> Perusahaan</th>
                <th scope="col">Alamat</th>
                <th scope="col">Penanggung <br/> Jawab</th>
                <th scope="col">No. Telepon</th>
                <th scope="col">Piutang</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><input type="checkbox" name="" id=""/></th>
                <td>PL-001</td>
                <td>Justify Company</td>
                <td>Jl. tuntungan no 5</td>
                <td>Fachri</td>
                <td>08228664424</td>
                <td>Rp. 2.300.000</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox" name="" id=""/></th>
                <td>PL-001</td>
                <td>Justify Company</td>
                <td>Jl. tuntungan no 5</td>
                <td>Fachri</td>
                <td>08228664424</td>
                <td>Rp. 2.300.000</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox" name="" id=""/></th>
                <td>PL-001</td>
                <td>Justify Company</td>
                <td>Jl. tuntungan no 5</td>
                <td>Fachri</td>
                <td>08228664424</td>
                <td>Rp. 2.300.000</td>
              </tr>
            </tbody>
          </table>
          {/* pagination */}
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><Link class="" href="#">&laquo;</Link></li>
              <li class="page-item"><Link class="" href="#">1</Link></li>
              <li class="page-item"><Link class="active" href="#">2</Link></li>
              <li class="page-item"><Link class="" href="#">3</Link></li>
              <li class="page-item"><Link class="" href="#">4</Link></li>
              <li class="page-item"><Link class="" href="#">5</Link></li>
              <li class="page-item"><Link class="" href="#">&raquo;</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pelanggan;
