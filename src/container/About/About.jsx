import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap} from '../../wrapper';
import { urlFor, client } from '../../client';

import './About.scss'


const About = () => {
  const [abouts, setAbouts] = useState([
    {description:'Javascript nerd with a passion for developing the frontend logic',title:"Front End Developer",imgUrl:"image-90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900-png"}
 ,
 {description:"I'm a web designer with a passion for building beautiful and functional web applications.",title:"Web Designer",imgUrl:"image-b62651ef34a9e54c354ee437545acc348fbf0505-1200x900-png"}
]);

 

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Development</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);