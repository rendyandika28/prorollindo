import React from 'react'
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";
import './EditPembayaran.css';
import { Button } from "../../components";


const EditPembayaran = () => {
    return (
        <div class="editpembayaran">
            <h3>Data Pembayaran</h3>
            <Link to="/admin/pembayaran"><img src= {ArrowIcon}/>Kembali</Link>
            <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Nama Perusahaan</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Justify Company</option>
                <option>Justify Company</option>
                <option>Justify School</option>
              </select>
            </div>
            <div class="form-group">
              <label >Jumlah Pembayaran</label>
              <input type="number" class="form-control"/>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Tanggal Surat Jalan</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <Button text="Edit Data" />
          </form>
    
        </div>
    )
}

export default EditPembayaran
