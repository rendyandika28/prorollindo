import React from "react";
import "./Produk.css";
import { Button } from "../../components";
import SearchIcon from "../../assets/icons/search-icon.png";
import { Link } from "react-router-dom";

const Produk = () => {
  return (
    <div className="produk">
      <h2>Data Produk</h2>

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
          class="tab-pane fade show active produk__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form>
            <div class="form-group">
              <label for="tipe">Tipe Pelumas</label>
              <select class="form-control" id="tipe">
                <option>Sintetik</option>
                <option>Mineral</option>
                <option>Semi Sintetik</option>
              </select>
            </div>
            <div class="form-group">
              <label for="merk">Merk Pelumas</label>
             <input type="text" className="form-control" name="" id="merk"/>
            </div>
            <div class="form-group">
              <label for="unitbase">Unit Base</label>
              <select class="form-control" id="unitbase">
                <option>Drum</option>
                <option>Derigen</option>
                <option>Kaleng</option>
              </select>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div class="form-group">
                  <label for="stock">Stock</label>
                <input type="number" className="form-control" name="" id="stock"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div class="form-group">
                  <label for="harga">Harga</label>
                <input type="number" className="form-control" name="" id="harga"/>
                </div>
              </div>
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
           <div class="produk__tablebutton ">
            <Link to="/admin/produk/edit"><Button text="Edit"/></Link>
            <Button text="Hapus"/>
            <div class="produk__search">
              <img src={SearchIcon}></img><input type="text"/> 
            </div>
          </div>
          <table class="table">
            <thead>
              <tr class="produk__tablehead">
                <th scope="col"></th>
                <th scope="col">ID <br/> Produk</th>
                <th scope="col">Tipe</th>
                <th scope="col">Merk</th>
                <th scope="col">Unit Base</th>
                <th scope="col">Stock</th>
                <th scope="col">Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><input type="checkbox" name="" id=""/></th>
                <td>PR-001</td>
                <td>Mineral</td>
                <td>Lubricant</td>
                <td>Drum</td>
                <td>200</td>
                <td>Rp. 2.300.000</td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox" name="" id=""/></th>
                <td>PR-002</td>
                <td>Sintetik</td>
                <td>Gomas</td>
                <td>Kaleng</td>
                <td>250</td>
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

export default Produk;

