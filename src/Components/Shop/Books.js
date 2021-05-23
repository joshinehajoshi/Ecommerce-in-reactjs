import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Card, Button} from 'react-bootstrap';



function Books() {

    const [data, setData] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        axios.get('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json')
        .then((resp) => setData(resp.data.dataseries))
        console.log(data)
        
    }, [])

    const TotalHandler = () => {
        
        setPrice((prevState) => (
            prevState + price
        )
        )

        setQuantity((prevState) => (
            prevState + 1
        ))
    }
    
       
    

    return (
        
        <div>

            <h1>Books</h1>
            <h2>Total: {price}</h2>
            <h2>Quantity: {quantity}</h2>
            {data.map((a) => {
                return(
                    
                    <Card style={{color:"black", width:"99%"}}>
                    <Card.Header>Book Number: {a.timepoint}</Card.Header>
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                      </Card.Text>
                      <Card.Text>
                        Price: {a.rh2m}
                       
                      </Card.Text>
                      <Button variant="primary" onClick={() => TotalHandler(setPrice(a.rh2m))}>Add to Cart</Button>
                    </Card.Body>
                  </Card>
                )
            })}
            {console.log(data)}
        </div>
    )
}

export default Books;