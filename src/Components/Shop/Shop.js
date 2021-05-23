import React, {useState} from 'react';
import MainItems from './MainItems';
import SideBar from './SideBar';
import Electronics from './Electronics';
import {Button} from 'react-bootstrap';
import Books from './Books';
import BestSeller from './BestSeller';
import MenFashion from './MenFashion';
import WomenFashion from './WomenFashion';
import KidsFashion from './KidsFashion';
import Fresh from './Fresh';
import Stationary from './Stationary';
import Beauty from './BestSeller';
import Health from './Health';


function Shop() {
   const [electronic, setElectronic] = useState(false);
   const [books, setBooks] = useState(false);
   const [bestseller, setBestSeller] = useState(false);
   const [menfashion, setMenFashion] = useState(false);
   const [womenfashion, setWomenFashion] = useState(false);
   const [kidfashion, setKidFashion] = useState(false);
   const [fresh, setFresh] = useState(false);
   const [stationary, setStationary] = useState(false);
   const [beauty, setBeauty]  = useState(false);
   const [health, setHealth] = useState(false);
   
   const MensFashionHandler = () => {
    if(menfashion == false){
        setMenFashion(true)
    }else{
        setMenFashion(false)
    }
}

   const ElectronicHandler = () => {
       if(electronic == false){
           setElectronic(true)
       }else{
           setElectronic(false)
       }
   }
   const BooksHandler = () => {
       if(books == false) {
           setBooks(true)
       }else{
           setBooks(false)
       }
   }
   const BestSellerHandler = () => {
       if(bestseller == false) {
           setBestSeller(true)
       }else {
           setBestSeller(false)
       }
   }

   const HealthHandler = () => {
       if(health == false){
           setHealth(true)
       }else{
           setHealth(false)
       }
   }
    const BeautyHandler = () => {
        if(beauty == false){
            setBeauty(true)
        }else{
            setBeauty(false)
        }
    }
    const WomensFashionHandler = () => {
        if(womenfashion == false){
            setWomenFashion(true)
        }else {
            setWomenFashion(false)
        }
    }
    const KidsFashionHandler = () => {
        if(kidfashion == false) {
            setKidFashion(true)
        }else{
            setKidFashion(false)
        }
    }
    const StationaryHandler = () => {
        if(stationary == false){
            setStationary(true)
        }else{
            setStationary(false)
        }
    }
    const FreshHandler = () => {
        if(fresh == false){
            setFresh(true)
        }else{
            setFresh(false)
        }
    }
    return (
        <div className="row">
            <div className="col-md-2">
                {/* <SideBar /> */}
                <div style={{backgroundColor:"black", padding:'1rem', height:"100%"}}>
            
               
            <Button onClick={() => BestSellerHandler()} className="ItemButton" variant="dark">Best sellers</Button><br />
            <Button onClick={() => ElectronicHandler()} className="ItemButton" variant="dark">Electronics</Button><br />
            <Button onClick={() => StationaryHandler()} className="ItemButton" variant="dark">Stationary</Button><br />
            <Button onClick={() => BooksHandler()} className="ItemButton" variant="dark">Books</Button><br />
            <Button onClick={() => FreshHandler()} className="ItemButton" variant="dark">Fresh</Button><br />
            <Button onClick={() => MensFashionHandler()} className="ItemButton" variant="dark">Men's Fashiom</Button><br />
            <Button onClick={() => WomensFashionHandler()} className="ItemButton" variant="dark">Women's Fashion</Button><br />
            <Button onClick={() => KidsFashionHandler()} className="ItemButton" variant="dark">Kids Fashion</Button><br />
            <Button onClick={() => BeautyHandler()} className="ItemButton" variant="dark">Beauty</Button><br />
            <Button onClick={() => HealthHandler()} className="ItemButton" variant="dark">Health</Button><br />
            
            
        
    </div>
            </div>
            <div className="col-md-10" style={{backgroundColor:'black', color:'white'}}>
                {electronic == true ? <Electronics />:
                books == true?<Books />:
                bestseller==true?<BestSeller />:
                menfashion == true?<MenFashion />:
                health == true? <Health />:
                stationary==true?<Stationary />:
                beauty == true ? <Beauty />:
                kidfashion == true? <KidsFashion />:
                menfashion == true? <MenFashion />:
                womenfashion == true? <WomenFashion />:
                fresh == true ? <Fresh />: <MainItems />}
                {/* <MainItems />   */}
            </div>
         
              
        </div>
    )
}

export default Shop;