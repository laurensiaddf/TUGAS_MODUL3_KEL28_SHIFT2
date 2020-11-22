import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Typography } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

class Barang extends Component {
    state = {
            angka:0
        }

    tambahAngka = () => {
        this.setState((state) => {
            return {
                angka: state.angka + 1
            }
        })
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        if (this.state.angka !== nextState.angka) {
        if (nextState.angka >5){
            alert(`Stock Habis`)
            return false
        }
        window.confirm('Anda yakin ingin menambahkan Sepatu ke Cart?')
        return true
    }
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Sepatu anda berhasil ditambahkan ke Cart`)
    }

    render() {
        return (
            <div style={{textAlign:'center', display: 'inline-block'}}>
            <Card hoverable style={{display: 'inline-block', width:350, margin:'30px', boxShadow:'0px 1px 1px'}} 
            cover={<img alt="gambar1" height="380px" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c301dbf1-3c0f-40b7-a224-4a91756331e4/air-jordan-xxxv-pf-tech-pack-basketball-shoe-T4GrDr.jpg" />}>
            <Meta title="Air Jordan XXXV PF 'Tech Pack'" description="Rp 2,889,000" />
            <div>
            <Button type="primary" shape="round" style={{margin:'15px 25px 0px 25px'}} onClick={this.tambahAngka}>
                Add to Cart
            </Button>
            </div>
            <Text>Total cart : {this.state.angka}</Text>
            </Card>
            </div>
        );
    }
}

export default Barang;