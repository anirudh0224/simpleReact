import React from 'react'

function Aboutbox(props) {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div className="mainbox">
        <div className="img">
          <img src={props.img} alt="" width={'100%'} height={'250rem'} />
        </div>
        <div className='mainLogo'>
          <div className='symbol'>{props.logo}</div>
        </div>
        <div className="contentx">
          <h4 className='content'>{props.title}</h4>
          <div className='lor'><p className='para'>{props.para}</p></div>
        </div>
      </div>
    </div>
  )
}

export default Aboutbox
