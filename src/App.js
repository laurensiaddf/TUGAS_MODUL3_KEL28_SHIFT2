import React from 'react';
import Barang from './components/Barang';
import DetailProduct from './components/DetailProduct';
import GambarDetail from './components/GambarDetail';
import 'antd/dist/antd.css';
import { Layout, Typography, Button } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

class App extends React.Component {
  state = {
    komponenMuncul : false
  }
  
  ubahKomponenMuncul = () => {
    this.setState((state) => {
        return {komponenMuncul : !this.state.komponenMuncul}
    })
  }
  
  state = {
  komponenGambar : false
  }
  
  ubahKomponenGambar = () => {
    this.setState((state) => {
      return {komponenGambar : !this.state.komponenGambar}
    })
  }
  
  componentDidMount() {
    alert(`Anda yakin ingin membuka website LOVESHOES?`)
  }

  render() {
    return (
      <Layout>
        <Header style={{background:'#353B3F'}}>
          <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '25px'}}>
            LOVESHOES
          </Text>
        </Header>
        <Content style={{textAlign:'center', display: 'inline-block'}}>
          <Barang />
          <div style={{Align:'center', display: 'inline-block'}}>
            <div style={{margin:'10px'}}>
              <Button Align="center" type="primary" onClick={this.ubahKomponenGambar}>{this.state.komponenGambar ? 'Hide' : 'View'} Details Picture!</Button>
              {this.state.komponenGambar ? <GambarDetail/> : ''}
            </div>
            <Button Align="center" type="primary" onClick={this.ubahKomponenMuncul}>{this.state.komponenMuncul ? 'Hide' : 'View'} Details Products!</Button>
            {this.state.komponenMuncul ? <DetailProduct/> : ''}
          </div>
        </Content>
        <Footer style={{background:'#D9DFE4', textAlign:'center', width:'100%'}}>
          Tugas Praktikum RSBK MODUL 3 - KELOMPOK 28 (LAURENSIA & MAHANI)
        </Footer>
      </Layout>
    )
  }
}

export default App;