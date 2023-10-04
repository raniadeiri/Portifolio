import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as ReactTooltip from 'react-tooltip';

import { AppWrap,MotionWrap } from '../../wrapper';
import { urlFor } from '../../client';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([
    {name:"GIT",bgColor:"#edf2f8",icon:"image-a804a741fb26f6c236c73086a87cfc9f64106401-480x480-png"},
    {name:"Figma",bgColor:"#edf2f8",icon:"image-6551e520e801ab656029527c09265981c06dce33-480x480-png"},
    {name:"Html",bgColor:"#edf2f8",icon:"image-31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480-png"},
    {name:"JQuery",bgColor:"#edf2f8",icon:"image-edd236bf2c5f5c7df77f9d104c5dd11ce18cc125-900x500-png"},
    {name:"CSS",bgColor:"#edf2f8",icon:"image-107574d887f1c07c9fbea0704de7f293e244a8f3-480x480-png"},
    {name:"Redux",bgColor:"#edf2f8",icon:"image-91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480-png"},
    {name:"APIs",bgColor:"#edf2f8",icon:"image-4fe2a405f87c20361b6231f2ff542dfa79aea801-64x64-png"},
    {name:"Javascript",bgColor:"#edf2f8",icon:"image-66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480-png"},
    {name:"React",bgColor:"#edf2f8",icon:"image-34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64-png"}
  ]);



  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
