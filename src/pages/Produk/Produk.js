import React, { useEffect, useState } from "react";
import "./Produk.css";
import { Button } from "../../components";
import SearchIcon from "../../assets/icons/search-icon.png";
import { Link } from "react-router-dom";
import axios from "../../data/axios";

const Produk = () => {
  const [dataProduk, setDataProduk] = useState([]);

  const [formAddData, setFormAddData] = useState({
    tipe_pelumas: "Sintetik",
    merk_pelumas: "",
    unit_base: "Drum",
    stok: "",
    harga: "",
  });

  const handleAddData = (e) => {
    e.preventDefault();
    axios
      .post("/produk/create/", formAddData)
      .then((res) => alert("Berhasil menambahkan data produk"))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setFormAddData({
      ...formAddData,
      [e.target.name]: e.target.value,
    });
  };

  // fetch Data Pelanggan
  const fetchData = () => {
    axios
      .get("/produk")
      .then((res) => setDataProduk(res.data.results))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="produk">
      <h2>Data Produk</h2>

      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
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
        <li className="nav-item">
          <a
            className="nav-link"
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

      <div className="tab-content" id="myTabContent">
        {/* Tambah Datas */}
        <div
          className="tab-pane fade show active produk__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form onSubmit={handleAddData}>
            <div className="form-group">
              <label htmlFor="tipe">Tipe Pelumas</label>
              <select
                className="form-control"
                id="tipe"
                name="tipe_pelumas"
                value={formAddData.tipe_pelumas}
                onChange={handleInputChange}
              >
                <option value="Sintetik">Sintetik</option>
                <option value="Mineral">Mineral</option>
                <option value="Semi Sintetik">Semi Sintetik</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="merk">Merk Pelumas</label>
              <input
                type="text"
                className="form-control"
                name="merk_pelumas"
                id="merk"
                value={formAddData.merk_pelumas}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="unitbase">Unit Base</label>
              <select
                className="form-control"
                id="unitbase"
                name="unit_base"
                value={formAddData.unit_base}
                onChange={handleInputChange}
              >
                <option value="Drum">Drum</option>
                <option value="Derigen">Derigen</option>
                <option value="Kaleng">Kaleng</option>
              </select>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="stock">Stock</label>
                  <input
                    type="number"
                    className="form-control"
                    name="stok"
                    id="stock"
                    value={formAddData.stok}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="harga">Harga</label>
                  <input
                    type="number"
                    className="form-control"
                    name="harga"
                    id="harga"
                    value={formAddData.harga}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <Button text="Tambah Data" />
          </form>
        </div>
        {/* List Data */}
        <div
          className="tab-pane fade"
          id="list"
          role="tabpanel"
          aria-labelledby="list-tab"
        >
          {dataProduk.length === 0 ? (
            <h3>Data Belum Tersedia</h3>
          ) : (
            <>
              <div className="produk__tablebutton ">
                <Link to="/admin/produk/edit">
                  <Button text="Edit" />
                </Link>
                <Button text="Hapus" />
                <div className="produk__search">
                  <img src={SearchIcon} alt="icon"></img>
                  <input type="text" />
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr className="produk__tablehead">
                    <th scope="col"></th>
                    <th scope="col">
                      ID <br /> Produk
                    </th>
                    <th scope="col">Tipe</th>
                    <th scope="col">Merk</th>
                    <th scope="col">Unit Base</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {dataProduk.map((data) => (
                    <tr key={data.id}>
                      <th scope="row">
                        <input type="checkbox" name="" id="" />
                      </th>
                      <td>{data.id}</td>
                      <td>{data.tipe_pelumas}</td>
                      <td>{data.merk_pelumas}</td>
                      <td>{data.unit_base}</td>
                      <td>{data.stok}</td>
                      <td>{data.harga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* pagination */}
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="" to="#">
                      &laquo;
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="active" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#">
                      &raquo;
                    </Link>
                  </li>
                </ul>
              </nav>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Produk;
