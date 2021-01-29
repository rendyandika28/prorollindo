import React from 'react'
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";
import './EditPemesanan.css';
import { Button } from "../../components";


const EditPemesanan = () => {
    return (
        <div class="editpemesanan">
            <h3>Data Pemesanan</h3>
            <Link to="/admin/pemesanan"><img src= {ArrowIcon}/>Kembali</Link>
            <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">ID Produk</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>PR-001</option>
                <option>PR-002</option>
                <option>PR-003</option>
                <option>PR-004</option>
                <option>PR-005</option>
              </select>
            </div>
            <div class="form-group">
              <label >Jumlah</label>
              <input type="number" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Nama Perusahaan</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Justify Company</option>
                <option>Justify Company</option>
                <option>Justify Company</option>
                <option>Justify Company</option>
                <option>Justify Company</option>
              </select>
            </div>
            <div class="form-group">
              <label for="date">Tanggal Pemesanan</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <div class="form-group">
              <label for="date">Tanggal Pemesanan</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <Button text="Edit Data" />
          </form>
    
        </div>
    )
}

export default EditPemesanan
