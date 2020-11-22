import { Component } from 'react';
import React from 'react';
import 'antd/dist/antd.css';
import { Card, Row, Col, Image } from 'antd';

class GambarDetail extends Component {
    state = {
        deskripsiProduct : "The Air Jordan XXXV features a stabilising Eclipse plate 2.0."
    }
    
    ubahdeskripsiProduct = () => {
        this.setState((state) => {
            if (state.deskripsiProduct === "The Air Jordan XXXV features a stabilising Eclipse plate 2.0."){
                return {deskripsiProduct : "5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5"}
            } else {
                return {deskripsiProduct : "The Air Jordan XXXV features a stabilising Eclipse plate 2.0."}
            }
        })
    }

    componentWillUnmount() {
        alert('Anda yakin ingin menyembunyikan detail pictures?')
        }

    render() {
        return (
            <Card size="small" style={{boxShadow:'0px 1px 1px'}}>
                <Row justify="center">
                    <Col>
                        <Image width={150} src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5f73de66-06bb-4b31-a9e0-ddacfe63c3bb/air-jordan-xxxv-pf-tech-pack-basketball-shoe-T4GrDr.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4e01755a-2036-4ee0-9d7f-b40737b1d71e/air-jordan-xxxv-pf-tech-pack-basketball-shoe-T4GrDr.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c695216d-465b-4bbc-b752-4f3ea121a049/air-jordan-xxxv-pf-tech-pack-basketball-shoe-T4GrDr.jpg"/>
                    </Col>
                    <Col>
                        <Image width={150} src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b3aead5-4e36-4715-8dd6-d6e236d6e429/air-jordan-xxxv-pf-tech-pack-basketball-shoe-T4GrDr.jpg"/>
                    </Col>
                </Row>
                <div style={{Align:'center', display: 'inline-block'}}>
                    <a onClick={this.ubahdeskripsiProduct}> View Product!</a>
                    <p>{this.state.deskripsiProduct}</p>
                </div>
            </Card>
        );
    }
}

export default GambarDetail;