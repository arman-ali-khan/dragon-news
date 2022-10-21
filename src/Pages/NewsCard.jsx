import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillEye, AiFillStar } from 'react-icons/ai';
import { BiBookmarkAlt, BiShareAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    return (
        <div>
        
          
         <Card key={news._id}>
             <ListGroup className='p-2'  style={{background:'#e9e9e969'}}>
                <div className='d-flex align-items-center justify-content-between mx-2'>
               <div className='d-flex align-items-center '>
               <img  style={{ height: '80px', width: '80px', borderRadius:'50%', padding:'5px' }} src={news.author.img} alt="" />
                <div>
                 <span className='p-1 m-0'>{news.author.name}</span>
                 <span className='p-0 m-0'><small>{news.author.published_date}</small></span>
                </div>
               </div>
                <div>
                 <BiBookmarkAlt/>
                 <BiShareAlt/>
                </div>
                </div>
             </ListGroup>
           <Card.Title className='p-2 text-center'>{news.title}</Card.Title>
         <Card.Img  style={{ height: '50%', width: '100%' }} variant="top" src={news.image_url} />
         <Card.Body>
           <Card.Text>
            {
                news.details.length > 200 ? <span> {news.details.slice(0,200)+ '...' } <Link to={`/news/${news._id}`}>See more</Link></span> : ''
            }
           </Card.Text>
           
         </Card.Body>
         <ListGroup className='p-2' style={{background:'#e9e9e969'}}>
                <div className='d-flex justify-content-between mx-4 align-items-center'>
                 <span><AiFillStar className='text-warning'/> {news.rating.number}</span>
                 <span><AiFillEye/> {news.total_view}</span>
                </div>
             </ListGroup>
       </Card>
       
        
     </div>
    );
};

export default NewsCard;