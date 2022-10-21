import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaDiscord, FaFacebook, FaGithub, FaGoogle, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import BrandCaruosel from './BrandCaruosel';


const RightNav = () => {
    return (
        <div>
            <ButtonGroup vertical className='w-full'>
                <Button variant='outline-primary rounded'><FaGoogle /> <span className=''>Login Google</span></Button>
                <Button variant='outline-dark mt-2 rounded'><FaGithub/> <span className=''>Github Google</span></Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Find us on</h5>
                <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook/> Facebook </ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaYoutube/> Youtube</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp/> Whatsapp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaDiscord/> Discord</ListGroup.Item>
    </ListGroup>
            </div>
            <div>
            </div>

            <div>
           <BrandCaruosel/>
            </div>
        </div>
    );
};

export default RightNav;