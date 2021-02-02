import React, { useEffect, useState } from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../assets/icons";
import "./Faktur.css";
import axios from "../../data/axios";

const Faktur = () => {
  const [dataPemesanan, setDataPemesanan] = useState([]);
  const [dataFaktur, setDataFaktur] = useState([]);
  const [formAddData, setFormAddData] = useState({
    pemesanan: "",
    tgl_faktur: "",
    tgl_jatuh_tempo: "",
  });
  const fetchData = async () => {
    const pemesanan = await axios.get("/transaksi/pemesanan/");
    const faktur = await axios.get("/transaksi/faktur/");
    setDataPemesanan(pemesanan.data.results);
    setDataFaktur(faktur.data.results);
    setFormAddData({
      ...formAddData,
      pemesanan: pemesanan.data.results[0].id,
    });
  };

  const handleAddData = (e) => {
    e.preventDefault();
    axios
      .post("/transaksi/faktur/create/", formAddData)
      .then((res) => alert("Berhasil menambahkan data pelanggan"))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setFormAddData({
      ...formAddData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="faktur">
        <h3>Data Faktur</h3>
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
              Tambah Data
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
            className="tab-pane fade show active faktur__tambahdata"
            id="tambah"
            role="tabpanel"
            aria-labelledby="tambah-tab"
          >
            <form onSubmit={handleAddData}>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">ID Pemesanan</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  value={formAddData.pemesanan}
                  onChange={handleInputChange}
                  name="pemesanan"
                >
                  {dataPemesanan.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.id} | {data.pelanggan.nama_perusahaan} |{" "}
                      {data.tgl_pemesanan}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Tanggal Faktur</label>
                <input
                  type="date"
                  className="form-control"
                  id="invoice_date"
                  name="tgl_faktur"
                  value={formAddData.tgl_faktur}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Tanggal Jatuh Tempo</label>
                <input
                  type="date"
                  className="form-control"
                  id="due_date"
                  name="tgl_jatuh_tempo"
                  value={formAddData.tgl_jatuh_tempo}
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
            <div className="faktur__tablebutton ">
              <Link to="/admin/faktur/edit">
                <Button text="Edit" />
              </Link>
              <Button text="Hapus" />
              <div className="faktur__search">
                <img src={SearchIcon} alt="icon"></img>
                <input type="text" />
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th scope="col">
                    ID <br></br> Faktur
                  </th>
                  <th scope="col">
                    ID<br></br> Pemesanan
                  </th>
                  <th scope="col">
                    Nama<br></br> Perusahaan
                  </th>
                  <th scope="col">
                    Tanggal<br></br> Jatuh Tempo
                  </th>
                  <th scope="col">Lunas</th>
                  <th scope="col">Piutang</th>
                </tr>
              </thead>
              <tbody>
                {dataFaktur.map((data) => (
                  <tr key={data.id}>
                    <td>
                      <input
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      ></input>
                    </td>
                    <th>{data.id}</th>
                    <td>{data.pemesanan.id}</td>
                    <td>{data.pemesanan.pelanggan.nama_perusahaan}</td>
                    <td>{data.tgl_jatuh_tempo}</td>
                    <td>{data.lunas}</td>
                    <td>{data.piutang || "0"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faktur;
