import React from 'react'
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";
import { Button } from "../../components";
import './EditFaktur.css'

const EditFaktur = () => {
    return (
        <div class="editfaktur">
            <h3>Data Faktur</h3>
            <Link to="/admin/faktur"><img src= {ArrowIcon}/>Kembali</Link>
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
              <label for="date">Tanggal Faktur</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <div class="form-group">
              <label for="date">Tanggal Jatuh Tempo</label>
              <input type="date" class="form-control" id="date" />
            </div>
            <Button text="Edit Data" />
          </form>
    
        </div>
    )
}

export default EditFaktur
