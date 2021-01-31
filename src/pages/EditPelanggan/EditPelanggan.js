import React from 'react'
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";
import './EditPelanggan.css';
import { Button } from "../../components";


const EditPelanggan = () => {
    return (
        <div class="editpelanggan">
            <h3>Data Pelanggan</h3>
            <Link to="/admin/pelanggan"><img src= {ArrowIcon} alt="search icon"/>Kembali</Link>
            <form>
            <div class="form-group">
              <label for="nama">Nama Perusahaan</label>
              <input type="text" className="form-control" name="" id="nama"/>
            </div>
            <div class="form-group">
              <label for="alamat">Alamat</label>
              <input type="text" className="form-control" name="" id="alamat"/>
            </div>
            <div class="form-group">
              <label for="notelepon">No. Telepon</label>
              <input type="text" className="form-control" name="" id="notelepon"/>
            </div>
            <div class="form-group">
              <label for="penanggungjawab">Penanggung Jawab</label>
              <input type="text" className="form-control" name="" id="penanggungjawab"/>
            </div>
            <Button text="Edit Data" />
          </form>
    
        </div>
    )
}

export default EditPelanggan
