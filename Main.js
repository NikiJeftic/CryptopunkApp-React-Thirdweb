import React, { useState } from 'react'
import image from '../assets/1.jpg'
import instagramLogo from '../assets/owner/instagram.png'
import moreIcon from '../assets/owner/more.png'
import twitterLogo from '../assets/owner/twitter.png'
import './Main.css'
import { useEffect } from 'react'


const Main = ({selectedPunk, punkListData, l} ) => {

    const [activePunk, setActivePunk] = useState(punkListData[0]);
    
    useEffect(()=>{
        setActivePunk(punkListData[l-1-selectedPunk])
    },[punkListData, selectedPunk])
    
     

  return (
    <div className='main'>
        <div className='mainContent'>
                
            <div className='punkHighLight'>
                <div className='punkContainer'>
                    <img className="selectedPunk" src={activePunk.image_url}/>
                </div>
            </div>

            <div className='punkDetails' style={{color:'#fff'}}>
                    <div className='title'>
                          {activePunk.name}
                    </div>
                    
                    <span className='itemNumber'>{`#${punkListData[l-1-selectedPunk].token_id}`}</span>
            </div>
            
             <div className='owner'>
                <div className='ownerImageContainer'>
                    <img />
                </div>
                <div className='ownerDetails'>
                    <div className='ownerNameAndHandle'>
                        <div>{activePunk.owner.address}</div>
                        <div className>{activePunk.asset_contract.name}</div>
                    </div>
                </div>

                <div className='links'>
                        <div className='ownerLink'>
                            <img src={instagramLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={twitterLogo} />
                        </div>
                        <div className='ownerLink'>
                            <img src={moreIcon}/>
                        </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Main