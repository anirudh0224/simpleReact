import React from 'react'
import folio1 from './images/folio1.jpg'

function PortfolioBox(props) {
  return (
      <div className="portBox mt-4">
        <div><img src={props.img} alt="" width={'100%'} height={'250vh'} srcset="" /></div>
        <div className='m-2'>
          <h4 className='flex'>{props.title}</h4>
          <p className='flex' style={{color:'#666666'}}>{props.des}</p>
        </div>
      </div>
  )
}

export default PortfolioBox
