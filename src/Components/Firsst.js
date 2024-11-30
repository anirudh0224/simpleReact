import React from 'react'
import { FaCircle } from "react-icons/fa";

function Firsst(props) {
  console.log(props);

  return (
    <div >
      <div className="mainBox" style={{ background: 'rgb(79,80,82)' }}>
        <div className="imgBox">
          <img src={props.img} width={'200px'} height={'220px'} />
        </div>
        <div className="connBox" style={{ padding: '15px' }}>
          <div className="conn1">
            <h2 className='titleh2' style={{marginBottom:'7px'}}>{props.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}> 
              <div style={{ fontSize: '9px', color: 'red', display: 'flex', alignItems: 'center', marginRight: '9px' }}>{props.sym} </div>
              <div style={{color:'white',fontWeight:'bold'}}>{props.des}</div>
            </div>
          </div>
          <div className="conn2">
            <div className="loc">{props.location}</div> <div className="loct">{props.locType}</div>
          </div>
          <div className="conn3">
            <div className="firstseen">{props.firstseen}</div>  <div className="seent">{props.seenType}</div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Firsst
