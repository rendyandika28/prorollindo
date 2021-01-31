import React from "react";
import "./Pembayaran.css";
import { Button } from "../../components";
import SearchIcon from "../../assets/icons/search-icon.png";
import { Link } from "react-router-dom";

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
           <div class="pembayaran__tablebutton ">
            <Link to="/admin/pembayaran/edit"><Button text="Edit"/></Link>
            <Button text="Hapus"/>
            <div class="pembayaran__search">
              <img src={SearchIcon}></img><input type="text"/> 
            </div>
          </div>
          <table class="table">
            <thead>
              <tr class="pembayaran__tablehead">
                <th scope="col"></th>
                <th scope="col">ID <br/> Pembayaran</th>
                <th scope="col">Tanggal <br/> Pembayaran</th>
                <th scope="col">Nama <br/> Perusahaan</th>
                <th scope="col">Jumlah <br/> Pembayaran</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><input type="checkbox" name="" id=""/></th>
                <td>SW-001</td>
                <td>10 Februari 2021</td>
                <td>Justify Company</td>
                <td>Rp. 2.300.000</td>
                <td>
                  <select name="" id="">
                    <option value="complete">Complete</option>
                    <option value="cancel">Cancel</option>
                    <option value="waiting">Waiting</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox" name="" id=""/></th>
                <td>SW-001</td>
                <td>10 Februari 2021</td>
                <td>Justify Company</td>
                <td>Rp. 2.300.000</td>
                <td>
                  <select name="" id="">
                    <option value="complete">Complete</option>
                    <option value="cancel">Cancel</option>
                    <option value="waiting">Waiting</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th scope="row"><input type="checkbox" name="" id=""/></th>
                <td>SW-001</td>
                <td>10 Februari 2021</td>
                <td>Justify Company</td>
                <td>Rp. 2.300.000</td>
                <td>
                  <select name="" id="">
                    <option class="complete" value="complete">Complete</option>
                    <option class="cancel" value="cancel">Cancel</option>
                    <option class="waiting" value="waiting">Waiting</option>
                  </select>
                </td>
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

export default Pembayaran;
