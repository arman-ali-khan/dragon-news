import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiFillEye, AiFillStar } from 'react-icons/ai';
import { BiBookmarkAlt, BiShareAlt } from 'react-icons/bi';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const newses = useLoaderData()
    return (
        <div>
            {
                newses.length === 0 && <div className='text-center'>No News Found</div>
            }
           {
            newses.map(news=>  <>
             
            <Card key={news._id}>
                <ListGroup className='p-2'  style={{background:'#e9e9e969'}}>
                   <div className='d-flex align-items-center justify-content-between mx-2'>
                  <div className='d-flex align-items-center '>
                    <Image  style={{ height: '80px', width: '80px', padding:'5px' }} roundedCircle src={news.author.img}></Image>
                   <div>
                    <p className='p-1 m-0'>{news?.author?.name ? news?.author?.name : 'No Name'}</p>
                    <p className='p-0 m-0'><small>{news.author.published_date}</small></p>
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
                    <p><AiFillStar className='text-warning'/> {news.rating.number}</p>
                    <p><AiFillEye/> {news.total_view}</p>
                   </div>
                </ListGroup>
          </Card>
          </> )
           }
        </div>
    );
};

export default Category;