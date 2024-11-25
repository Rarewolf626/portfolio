import React from 'react';
import { Link } from 'react-router-dom';
import CustomNav from '../Components/NavBar';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import CodingJpg from '../Icons/coding.jpg';
import useWindowDimensions from '../utils/dimensionHelper';
import ResumePDF from '../Assets/Resume.pdf';

const Home = ({history}) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <CustomNav />
      <div className="position-absolute" style={{height: '100vh', top: 0, bottom: 0, left: 0, right: 0, zIndex: -1}}>
        <Container className="h-100">
          <div className="d-flex h-100">
            <div className={`my-auto ${width > 760 ? 'w-50' : ''}`}>
              <div>
                <div className="">
                  <span className="color-customBlueLight h5 font-weight-bold">Hi !</span><br />
                  <span className="color-customBlue h1 font-weight-bold">I'm Willian De Almeida Lemos</span><br />
                  <span className="color-customBlueLight h3">I'm a <span className="font-weight-bold">Sr. Full Stack</span> Engineer</span><br /><br />
                  <span className="color-customBlueLight h5">I am a seasoned Full-Stack Web Developer with rich experience in architecting and deploying high-performance web applications for enterprise-level brands, SMEs, and nonprofit organizations across diverse sectors.</span><br />
                </div>
                <div>
                  <div className="d-flex mt-4">
                    <Link target="_blank" rel="noopener noreferrer" to="https://github.com/Rarewolf626" className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faGithubSquare} /></Link>
                    <Link target="_blank" rel="noopener noreferrer" to={ResumePDF} className="color-customBlue p-0 mr-3"><FontAwesomeIcon size="2x" icon={faFilePdf} /></Link>
                    <Button className="bg-customBlue font-weight-bold shadow border-0" onClick={() => history.push('/contact')}>Contact Me</Button>
                  </div><br />
                </div>
              </div>
            </div>
            <div className="w-50 my-auto d-none d-md-block">
              <img src={CodingJpg} alt='coding dev' style={{ width: '70%' }} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
};

export default Home;
