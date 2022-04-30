import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import BandanaPunk from './assets/1.jpg';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import Punklist from './components/Punklist.js';
import Main from './components/Main'




function App() {

  const [punkListData, setPunkListData]= useState([])
  const [selectedPunk, setSelectedPunk]= useState(0)

  useEffect( () => {
    const getMyNfts= async () => {
      const openseaData=await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xe571135B36b34a6B9eC298E7a5163E7Cc84eFC55&order_direction=asc');
      setPunkListData(openseaData.data.assets)
    }
    getMyNfts()
  },[])

  return (
    <div className='app'> 
         <Header/>
         {punkListData.length>0 && (
           <>
           {console.log(punkListData)}
           
            <Main punkListData={punkListData} selectedPunk={selectedPunk} l={punkListData.length}/>
            <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
           </>
         )}
         
    </div>
  )
}

export default App;
