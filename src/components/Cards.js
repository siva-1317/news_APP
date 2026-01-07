import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({description, title ,image, url}) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={image || 'https://dummyimage.com/300x180/000/fff&text=news'} alt='newsImage'/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div>
        <Card.Text>
          {description || "no description"}
        </Card.Text>
        </div>
        <div style={{marginBottom:"10px",marginTop:"20px", float:"end"}}>

       
        <Button variant="primary" onClick={() => window.open(url, "_blank")}>In depth</Button>
         </div>
      </Card.Body>
    </Card>
  );
}

export default Cards