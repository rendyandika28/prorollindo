import React from "react";
import "./Pembayaran.css";

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

      {/* Tambah Data Page */}
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
          </form>
        </div>
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
