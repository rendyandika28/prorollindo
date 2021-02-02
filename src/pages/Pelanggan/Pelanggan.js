import React, { useEffect, useState } from "react";
import "./Pelanggan.css";
import { Button } from "../../components";
import SearchIcon from "../../assets/icons/search-icon.png";
import { Link } from "react-router-dom";
import axios from "../../data/axios";

const Pelanggan = () => {
  const [dataPelanggan, setDataPelanggan] = useState([]);
  const [formAddData, setFormAddData] = useState({
    nama_perusahaan: "",
    penanggung_jawab: "",
    alamat: "",
    telepon: "",
  });

  const handleAddData = (e) => {
    e.preventDefault();
    axios
      .post("/pelanggan/create", formAddData)
      .then((res) => alert("Berhasil menambahkan data pelanggan"))
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
      .get("/pelanggan")
      .then((res) => setDataPelanggan(res.data.results))
      .catch((err) => console.log(err.message));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pelanggan">
      <h2>Data Pelanggan</h2>

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
          className="tab-pane fade show active pelanggan__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form onSubmit={handleAddData}>
            <div className="form-group">
              <label htmlFor="nama_perusahaan">Nama Perusahaan</label>
              <input
                type="text"
                className="form-control"
                name="nama_perusahaan"
                id="nama_perusahaan"
                value={formAddData.nama_perusahaan}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="alamat">Alamat</label>
              <input
                type="text"
                className="form-control"
                name="alamat"
                id="alamat"
                value={formAddData.alamat}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nomortelepon">Nomor Telepon</label>
              <input
                type="tel"
                className="form-control"
                name="telepon"
                id="nomortelepon"
                value={formAddData.telepon}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="penanggungjawab">Penanggung Jawab</label>
              <input
                type="text"
                className="form-control"
                name="penanggung_jawab"
                id="penanggungjawab"
                value={formAddData.penanggung_jawab}
                onChange={handleInputChange}
              />
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
          {dataPelanggan.length === 0 ? (
            <h3>Data Belum Tersedia</h3>
          ) : (
            <>
              <div className="pelanggan__tablebutton ">
                <Link to="/admin/pelanggan/edit">
                  <Button text="Edit" />
                </Link>
                <Button text="Hapus" />
                <div className="pelanggan__search">
                  <img src={SearchIcon} alt="icon"></img>
                  <input type="text" />
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr className="pelanggan__tablehead">
                    <th scope="col"></th>
                    <th scope="col">
                      ID <br /> Pelanggan
                    </th>
                    <th scope="col">
                      Nama <br /> Perusahaan
                    </th>
                    <th scope="col">Alamat</th>
                    <th scope="col">
                      Penanggung <br /> Jawab
                    </th>
                    <th scope="col">No. Telepon</th>
                    <th scope="col">Piutang</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPelanggan.map((data) => (
                    <tr key={data.id}>
                      <th scope="row">
                        <input type="checkbox" name="" id="" />
                      </th>
                      <td>{data.id}</td>
                      <td>{data.nama_perusahaan}</td>
                      <td>{data.alamat}</td>
                      <td>{data.penanggung_jawab}</td>
                      <td>{data.telepon}</td>
                      <td>{data.piutang}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* pagination */}
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <Link className="" to="#" href="#">
                      &laquo;
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#" href="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="active" to="#" href="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#" href="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#" href="#">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#" href="#">
                      5
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="" to="#" href="#">
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

export default Pelanggan;
