import React, { useEffect, useState } from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../assets/icons";
import "./SuratJalan.css";
import axios from "../../data/axios";

const SuratJalan = () => {
  const [dataPemesanan, setDataPemesanan] = useState([]);
  const [dataSurjal, setDataSurjal] = useState([]);
  const [formAddData, setFormAddData] = useState({
    pemesanan: "",
    tanggal: "",
  });

  const fetchData = async () => {
    const pemesanan = await axios.get("/transaksi/pemesanan/");
    const suratJalan = await axios.get("/transaksi/surat-jalan/");
    setDataPemesanan(pemesanan.data.results);
    setDataSurjal(suratJalan.data.results);
    setFormAddData({
      ...formAddData,
      pemesanan: pemesanan.data.results[0].id,
    });

    await coloringStatus();
  };

  const handleAddData = (e) => {
    e.preventDefault();
    axios
      .post("/transaksi/surat-jalan/create/", formAddData)
      .then((res) => alert("Berhasil menambahkan data pelanggan"))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setFormAddData({
      ...formAddData,
      [e.target.name]: e.target.value,
    });
  };

  const coloringStatus = () => {
    const el = document.querySelector(".suratjalan .surjal__status");
    if (el.textContent === "Waiting") {
      el.style.color = "#FFB118";
    } else if (el.textContent === "Cancel") {
      el.style.color = "#E3261A";
    } else if (el.textContent === "Complete") {
      el.style.color = "#1F800F";
    } else {
      el.style.color = "#000";
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="suratjalan">
      <h3>Data Surat Jalan</h3>

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
          className="tab-pane fade show active suratjalan__tambahdata"
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
                onChange={handleInputChange}
                value={formAddData.pemesanan}
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
              <label htmlFor="date">Tanggal Surat Jalan</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={formAddData.tanggal}
                onChange={handleInputChange}
                name="tanggal"
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
          {dataSurjal.length === 0 ? (
            <h3>Data Belum Tersedia</h3>
          ) : (
            <>
              <div className="suratjalan__tablebutton ">
                <Link to="/admin/surat-jalan/edit">
                  <Button text="Edit" />
                </Link>
                <Button text="Hapus" />
                <div className="suratjalan__search">
                  <img src={SearchIcon} alt="icon"></img>
                  <input type="text" />
                </div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">
                      ID <br></br> Surat Jalan
                    </th>
                    <th scope="col">
                      ID<br></br> Pemesanan
                    </th>
                    <th scope="col">
                      Nama<br></br> Perusahaan
                    </th>
                    <th scope="col">
                      Tanggal<br></br> Surat Jalan
                    </th>
                    <th scope="col">
                      Status <br></br>Surat Jalan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataSurjal.map((data) => (
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
                      <td>{data.tanggal}</td>
                      <td className="surjal__status">{data.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SuratJalan;
