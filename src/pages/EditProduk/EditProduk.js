import React from 'react'
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../assets/icons";
import './EditProduk.css';
import { Button } from "../../components";


const EditProduk = () => {
    return (
        <div class="editproduk">
            <h3>Data Produk</h3>
            <Link to="/admin/produk"><img src= {ArrowIcon}/>Kembali</Link>
            <form>
            <div class="form-group">
              <label for="tipe">Tipe Pelumas</label>
              <select class="form-control" id="tipe">
                <option>Sintetik</option>
                <option>Mineral</option>
                <option>Semi Sintetik</option>
              </select>
            </div>
            <div class="form-group">
              <label for="merk">Merk Pelumas</label>
             <input type="text" className="form-control" name="" id="merk"/>
            </div>
            <div class="form-group">
              <label for="unitbase">Unit Base</label>
              <select class="form-control" id="unitbase">
                <option>Drum</option>
                <option>Derigen</option>
                <option>Kaleng</option>
              </select>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div class="form-group">
                  <label for="stock">Stock</label>
                <input type="number" className="form-control" name="" id="stock"/>
                </div>
              </div>
              <div className="col-sm-6">
                <div class="form-group">
                  <label for="harga">Harga</label>
                <input type="number" className="form-control" name="" id="harga"/>
                </div>
              </div>
            </div>
            <Button text="Edit Data" />
          </form>
    
        </div>
    )
}

export default EditProduk
