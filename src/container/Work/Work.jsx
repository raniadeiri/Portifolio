import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import img1 from '../../assets/socialmedia.png'
import img2 from '../../assets/postsapp.png'
import img3 from '../../assets/img3.PNG'
import img4 from '../../assets/portifolio.PNG'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([
    {codeLink: "https://github.com/raniadeiri/post-app",
      description: "Posts Application for viewing and adding posts",
      title : "Posts App",
      tags:  ['UI/UX', 'Web App', 'React JS', 'All'],
      imgUrl: img2
      },
      {codeLink: "https://github.com/raniadeiri/Portifolio",
      description: "A Modern UI/UX Portfolio Project",
      title : "Portifolio",
      tags:  ['UI/UX', 'Web App', 'React JS', 'All'],
      imgUrl:img4
      },
      {codeLink: "https://github.com/raniadeiri/JS-Frameworks-Course-Assignment",
      description: "Project For Showing Data From Api, Selecting Specific Row And Show Its Data, Login, Contact And Admin Functionality",
      title : "JS Frameworks Course Assignment",
      tags:  ['UI/UX', 'Web App', 'All'],
      imgUrl:img3
      },
      {codeLink: "https://socialmediaappgraduationproject.netlify.app/",
      description: "Social Media Application clones facebook for viewing posts and reacting to it and logging in and register",
      title : "Social Media Application",
      tags:  ['UI/UX', 'Web App', 'React JS', 'All'],
      imgUrl:img1
      }
  ]);
  const [filterWork, setFilterWork] = useState([
    {codeLink: "https://github.com/raniadeiri/post-app",
    projectLink:"https://github.com/raniadeiri/post-app",
      description: "Posts Application for viewing and adding posts",
      title : "Posts App",
      tags:  ['UI/UX', 'Web App', 'React JS', 'All'],
      imgUrl: img2
      },
      {codeLink: "https://github.com/raniadeiri/Portifolio",
      projectLink:"https://github.com/raniadeiri/Portifolio",
      description: "A Modern UI/UX Portfolio Project",
      title : "Portifolio",
      tags:  ['UI/UX', 'Web App', 'React JS', 'All'],
      imgUrl:img4
      },
      {codeLink: "https://github.com/raniadeiri/JS-Frameworks-Course-Assignment",
      projectLink:"https://github.com/raniadeiri/JS-Frameworks-Course-Assignment",
      description: "Project For Showing Data From Api, Selecting Specific Row And Show Its Data, Login, Contact And Admin Functionality",
      title : "JS Frameworks Course Assignment",
      tags:  ['UI/UX', 'Web App', 'All'],
      imgUrl:img3
      },
      {codeLink: "https://github.com/raniadeiri/SocialMediaApp-GraduationProject",
      projectLink:"https://socialmediaappgraduationproject.netlify.app/",
      description: "Social Media Application clones facebook for viewing posts and reacting to it and logging in and register",
      title : "Social Media Application",
      tags:  ['UI/UX', 'Web App', 'React JS', 'All'],
      imgUrl:img1
      }
  ]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  
  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={work.imgUrl} alt={work.name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);