import React from 'react';
import { BsLinkedin, BsInstagram,BsGithub} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='https://github.com/orgs/rania-deiri'> <BsGithub/></a>
    </div>
    <div>
     <a href='https://www.linkedin.com/in/rania-deiri-368289210'> <BsLinkedin /></a>
    </div>
    <div>
      <a href='https://www.facebook.com/Rania.r.deiri'><FaFacebookF /></a>
    </div>
   
  </div>
);

export default SocialMedia;