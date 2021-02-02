import React, { useEffect, useState } from "react";
import "./Pembayaran.css";
import { Button } from "../../components";
import SearchIcon from "../../assets/icons/search-icon.png";
import { Link } from "react-router-dom";
import axios from "../../data/axios";

const Pembayaran = () => {
  const [dataFaktur, setDataFaktur] = useState([]);
  const [dataPembayaran, setDataPembayaran] = useState([]);
  const [formAddData, setFormAddData] = useState({
    faktur: "",
    jumlah_bayar: "",
    tgl_pembayaran: "",
  });
  const fetchData = async () => {
    const faktur = await axios.get("/transaksi/faktur/");
    const pembayaran = await axios.get("/transaksi/pembayaran/");
    setDataFaktur(faktur.data.results);
    setDataPembayaran(pembayaran.data.results);
    setFormAddData({
      ...formAddData,
      faktur: faktur.data.results[0].id,
    });

    await coloringStatus();
  };

  const handleAddData = (e) => {
    e.preventDefault();
    axios
      .post("/transaksi/pembayaran/create/", formAddData)
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
    const el = document.querySelector(".pembayaran .pembayaran__status");
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
    <div className="pembayaran">
      <h2>Data Pembayaran</h2>

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
          className="tab-pane fade show active pembayaran__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form onSubmit={handleAddData}>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">ID Faktur</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                value={formAddData.faktur}
                onChange={handleInputChange}
                name="faktur"
              >
                {dataFaktur.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.id}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="totalamount">Jumlah Pembayaran</label>
              <input
                type="number"
                className="form-control"
                id="totalamount"
                value={formAddData.jumlah_bayar}
                onChange={handleInputChange}
                name="jumlah_bayar"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Tanggal Pembayaran</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={formAddData.tgl_pembayaran}
                onChange={handleInputChange}
                name="tgl_pembayaran"
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
          <div className="pembayaran__tablebutton ">
            <Link to="/admin/pembayaran/edit">
              <Button text="Edit" />
            </Link>
            <Button text="Hapus" />
            <div className="pembayaran__search">
              <img src={SearchIcon} alt="icon"></img>
              <input type="text" />
            </div>
          </div>
          <table className="table">
            <thead>
              <tr className="pembayaran__tablehead">
                <th scope="col"></th>
                <th scope="col">
                  ID <br /> Pembayaran
                </th>
                <th scope="col">
                  Tanggal <br /> Pembayaran
                </th>
                <th scope="col">
                  Nama <br /> Perusahaan
                </th>
                <th scope="col">
                  Jumlah <br /> Pembayaran
                </th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {dataPembayaran.map((data) => (
                <tr>
                  <th scope="row">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <td>{data.id}</td>
                  <td>{data.tgl_pembayaran}</td>
                  <td>{data.faktur.pemesanan.pelanggan.nama_perusahaan}</td>
                  <td>{data.jumlah_bayar}</td>
                  <td className="pembayaran__status">{data.status}</td>
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
        </div>
      </div>
    </div>
  );
};

export default Pembayaran;
