import {Button} from 'react-bootstrap';
import React, {useState} from 'react';
import '../../style.css'

function SideBar() {
    const [elctronic, setElectronic] = useState(false);
    const ElectronicHandler = () => {
         setElectronic(true);
    }

    return(
        <div style={{backgroundColor:"black", padding:'1rem', overflowY:"auto", height:'57rem'}}>
            
               
                <Button className="ItemButton" variant="dark">Best sellers</Button><br />
                <Button onClick={() => ElectronicHandler()} className="ItemButton" variant="dark">Electronics</Button><br />
                <Button className="ItemButton" variant="dark">Stationary</Button><br />
                <Button className="ItemButton" variant="dark">Books</Button><br />
                <Button className="ItemButton" variant="dark">Fresh</Button><br />
                <Button className="ItemButton" variant="dark">Men's Fashiom</Button><br />
                <Button className="ItemButton" variant="dark">Women's Fashion</Button><br />
                <Button className="ItemButton" variant="dark">Kids Fashion</Button><br />
                <Button className="ItemButton" variant="dark">Beauty</Button><br />
                <Button className="ItemButton" variant="dark">Health</Button><br />
                
                
            
        </div>
    )
}

export default SideBar;