import React from 'react';
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/chart";
import { productData } from "../../dummydata";
import { Publish } from '@mui/icons-material';

export default function product() {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to ="/newProduct">
                <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
                <div className="productTopLeft">
                    <Chart data = {productData} dataKey="Sales" title="Sales Perfomance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://arzooo-static-prod.s3.ap-south-1.amazonaws.com/images/products/b0110/30f12/b011030f12fbcd257f586ffc7db8cf0f6dcb47a60d358f0863ae38578a2f4335_01.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Oneplus TV</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">132</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5142</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type='text' placeholder='Oneplus TV'/>
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div> 
                    <div className="prodcutFormRight">
                        <div className="productUpload">
                            <img src="https://arzooo-static-prod.s3.ap-south-1.amazonaws.com/images/products/b0110/30f12/b011030f12fbcd257f586ffc7db8cf0f6dcb47a60d358f0863ae38578a2f4335_01.jpg" 
                            alt="" 
                            className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type='file' id='file' style={{display:"none"}}/>
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                </form>
            </div>
    </div>
  )
}
