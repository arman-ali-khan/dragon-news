import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillStar } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';

const News = () => {
   const news = useLoaderData()
    return (
        <>
        <Card key={news._id}>
             
            
         <Card.Img  style={{ height: '50%', width: '100%' }} variant="top" src={news.image_url} />
           <Card.Title className='p-2 text-center'>{news.title}</Card.Title> 
           <ListGroup className='p-2'  style={{background:'#e9e9e969'}}>
                <div className='d-flex align-items-center justify-content-between mx-2'>
               
                 <p className='p-1 m-0'><b>Author: </b>{news.author.name}</p>
                 <p className='p-0 m-0'><b>Publish Date:</b>{news.author.published_date}</p>
                
                <p><AiFillStar className='text-warning'/> <b>{news.rating.number}</b></p>
               
                </div>
             </ListGroup>
         <Card.Body>
           <Card.Text>
            {news.details}
           </Card.Text>
           
         </Card.Body>
         
       </Card>
       </>
    );
};

export default News;