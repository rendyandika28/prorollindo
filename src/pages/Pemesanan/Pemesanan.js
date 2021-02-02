import React, { useEffect, useState } from "react";
import "./Pemesanan.css";
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { SearchIcon } from "../../assets/icons";
import axios from "../../data/axios";

const Pemesanan = () => {
  const [dataPemesanan, setDataPemesanan] = useState([]);
  const [dataProduk, setDataProduk] = useState([]);
  const [dataPelanggan, setDataPelanggan] = useState([]);

  const [formAddData, setFormAddData] = useState({
    produk: "",
    pelanggan: "",
    jumlah: "",
    tgl_pemesanan: "",
  });

  const handleAddData = (e) => {
    e.preventDefault();
    axios
      .post("/transaksi/pemesanan/create/", formAddData)
      .then((res) => alert("Berhasil menambahkan data pelanggan"))
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    setFormAddData({
      ...formAddData,
      [e.target.name]: e.target.value,
    });
  };

  const fetchData = async () => {
    try {
      const products = await axios.get("/produk");
      const customers = await axios.get("/pelanggan");
      const pemesanan = await axios.get("/transaksi/pemesanan/");

      setDataProduk(products.data.results);
      setDataPelanggan(customers.data.results);
      setDataPemesanan(pemesanan.data.results);
      setFormAddData({
        ...formAddData,
        produk: String(products.data.results[0].id),
        pelanggan: String(customers.data.results[0].id),
      });
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="pemesanan">
      <h2>Data Pemesanan</h2>

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
          className="tab-pane fade show active pemesanan__tambahdata"
          id="tambah"
          role="tabpanel"
          aria-labelledby="tambah-tab"
        >
          <form onSubmit={handleAddData}>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">ID Produk</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                // value={formAddData.produk}
                onChange={handleInputChange}
                name="produk"
              >
                {dataProduk.map((data) => (
                  <option key={data.id} value={parseInt(data.id)}>
                    {data.id} - {data.tipe_pelumas} - {data.merk_pelumas}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Jumlah</label>
              <input
                type="number"
                className="form-control"
                name="jumlah"
                value={formAddData.jumlah}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Nama Perusahaan</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="pelanggan"
                // value={formAddData.pelanggan}
                onChange={handleInputChange}
              >
                {dataPelanggan.map((data) => (
                  <option key={data.id} value={parseInt(data.id)}>
                    {data.nama_perusahaan}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Tanggal Pemesanan</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="tgl_pemesanan"
                value={formAddData.tgl_pemesanan}
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
          {dataPemesanan.length === 0 ? (
            <h3>Data Belum Tersedia</h3>
          ) : (
            <>
              <div className="pemesanan__tablebutton ">
                <Link to="/admin/pemesanan/edit">
                  <Button text="Edit" />
                </Link>
                <Button text="Hapus" />
                <div className="pemesanan__search">
                  <img src={SearchIcon} alt="icon"></img>
                  <input type="text" />
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th scope="col">
                      ID <br></br> Pemesanan
                    </th>
                    <th scope="col">
                      Nama<br></br> Perusahaan
                    </th>
                    <th scope="col">
                      Tanggal<br></br> Pemesanan
                    </th>
                    <th scope="col">
                      Tanggal<br></br> Pengiriman
                    </th>
                    <th scope="col">Jumlah</th>
                    <th scope="col">Total Harga</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPemesanan.map((data) => (
                    <tr key={data.id}>
                      <td>
                        <input
                          type="checkbox"
                          value=""
                          id="defaultCheck1"
                        ></input>
                      </td>
                      <th>{data.id}</th>
                      <td>{data.pelanggan.nama_perusahaan}</td>
                      <td>{data.tgl_pemesanan}</td>
                      <td>
                        {data.tgl_pengiriman
                          ? data.tgl_pengiriman
                          : "Belum Dikirim"}
                      </td>
                      <td>{data.jumlah}</td>
                      <td>{data.total_harga}</td>
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

export default Pemesanan;
