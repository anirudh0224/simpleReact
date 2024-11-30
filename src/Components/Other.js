import React from 'react'
import Firsst from './Firsst'
import img2 from './images/2.jpeg'
import img1 from './images/1.jpeg'
import img3 from './images/3.jpeg'
import img4 from './images/4.jpeg'
import img5 from './images/5.jpeg'
import img6 from './images/6.jpeg'
import { FaCircle } from "react-icons/fa";

function Other() {
    return (
        <div className='mainData' style={{backgroundColor:'#272b33'}}>
            <div style={{ display: 'flex' }}>
            <Firsst img={img1} title="Evil Beth Clone" des="Dead - Human" location="Last Know Location" locType="Earth(C-137)" firstseen="First seen in:" seenType="Meeseeks and Destroy" sym={<FaCircle/>}/>
                <Firsst img={img2} title="Gazorpazorpfield" des="Alive - Alien" location="Last Know Location" locType="Interdimensional Cable" firstseen="First seen in:" seenType="Rixty Minutes" sym={<FaCircle/>}/>
            </div>
            <div style={{ display: 'flex' }}>
                <Firsst img={img3} title="eyehole Man" des="Alive - Alien" location="Last Know Location" locType="Interdimensional Cable" firstseen="First seen in:" seenType="Interdimensional Cable 2: Tempting Fate" sym={<FaCircle/>}/>
                <Firsst img={img4} title="Josiah" des="Alive - Human" location="Last Know Location" locType="Earth(Replacement Dimesion)" firstseen="First seen in:" seenType="The Old Man and the seat" sym={<FaCircle/>}/>
            </div>
            <div style={{ display: 'flex' }}>
                <Firsst img={img5} title="Hunter's Father" des="Alive - Human" location="Last Know Location" locType="Earth(Giantn Telepathic Spiders Dimension)" firstseen="First seen in:" seenType="The Ricks Must Be Crazy" sym={<FaCircle/>}/>
                <Firsst img={img6} title="Steves Jobs Rick" des="Alive - Human" location="Last Know Location" locType="Citadel of Ricks" firstseen="First seen in:" seenType="The Ricklantic Mixup" sym={<FaCircle/>}/>
            </div>
        </div>
    )
}

export default Other
