import React from 'react'
import { Button } from "../../components";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";
import './EditSuratJalan.css';
const EditSuratJalan = () => {
    return (
        <div class="editsuratjalan">
            <h3>Data Surat Jalan</h3>
            <Link to="/admin/surat-jalan"><img src= {ArrowIcon}/>Kembali</Link>
            <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">ID Pemesanan</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>PR-001</option>
                <option>PR-002</option>
                <option>PR-003</option>
                <option>PR-004</option>
                <option>PR-005</option>
              </select>
            </div>
            <div class="form-group">
              <label for="date">Tanggal Surat Jalan</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <Button text="Edit Data" />
          </form>
    
        </div>
    )
}

export default EditSuratJalan
