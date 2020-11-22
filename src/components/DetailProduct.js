import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

class DetailProduct extends Component {
    state = {
        lihatLebih : false
    }
    
    ubahlihatLebih = () => {
        this.setState((state) => {
            return {lihatLebih : !this.state.lihatLebih}
        })
    }

    componentWillUnmount() {
        alert('Anda yakin ingin menyembunyikan detail products?')
        }       

    render() {
        return (
            <Card hoverable title=" Details Products" size="small" style={{ Align:'center', width: '100%', boxShadow:'0px 1px 1px'}}>
                <p style={{margin:'2px'}}>Name Products : Air Jordan XXXV PF 'Tech Pack'</p>
                <p style={{margin:'2px'}}>Type : Basketball Shoe</p>
                <p style={{margin:'2px'}}>Price : Rp 2,889,000</p>
                <p style={{margin:'2px'}}>Stocks: 5</p>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <a onClick={this.ubahlihatLebih}>{this.state.lihatLebih ? 'Minimize' : 'View'} Colour Products!</a>
                    {this.state.lihatLebih ? 
                    <p>Glacier Grey/Black/Racer Blue/Laser Crimson</p> : ''}
                </div>
            </Card>
        );
    }
}

export default DetailProduct;