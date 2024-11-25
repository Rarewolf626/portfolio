import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import curvePng from '../Icons/curved.png';
import useWindowDimensions from '../utils/dimensionHelper';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { width } = useWindowDimensions();
  let textContainerWidthClass, heroTextFontSize, descFontSize;
  
  if (width < 768) {
    textContainerWidthClass = 'w-100';
    heroTextFontSize = undefined;
    descFontSize = undefined;
  } else if (width >= 768 && width < 992) {
    textContainerWidthClass = 'w-50';
    heroTextFontSize = 'xx-large';
    descFontSize = 'inherit';
  } else {
    textContainerWidthClass = 'w-50';
    heroTextFontSize = undefined;
    descFontSize = undefined;
  }

  return(
    <>
      <CustomNav />
      <div className="position-absolute w-100 d-none d-md-block" style={{height: '100vh', top: 0, zIndex: -1000}}>
        <div 
          style={{
            backgroundImage: `url(${curvePng})`, 
            backgroundRepeat: 'no-repeat', 
            backgroundAttachment: 'fixed', 
            backgroundSize: `auto 50vh`,
          }}
          className="h-100 position-fixed fixed-top fixed-bottom" 
        />
      </div>
      <Container className={`${textContainerWidthClass} mt-5 float-md-right text-right mr-lg-5`}>
        <h2 className="pr-lg-5 pr-xs-3 text-boldest mb-0 color-customBlue" style={{fontSize: heroTextFontSize}}>
          Let’s work together to bring your ideas to life!
        </h2><br />
        <h5 className="pr-lg-5 pr-xs-3 text-wrap color-customBlueLight" style={{fontSize: descFontSize}}>
        One of the aspects I value most about software development is the diversity in clients and project scopes. <br />Regardless of the technology or requirements, feel free to reach out and share your vision <br />—I’m eager to explore how we can bring it to life!
        </h5>
        <br/>
        <br/>
        <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
          <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1" onClick={() => window.open('https://api.whatsapp.com/send/?phone=18634093057', '_blank')}>
            <FontAwesomeIcon size="1x" icon={faWhatsapp} /><span style={{}}>Whatsapp</span>
          </Button>
          <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1" onClick={() => window.open('https://t.me/rarewolfdev', '_blank')}>
            <FontAwesomeIcon size="1x" icon={faTelegram} /><span>Telegram</span>
          </Button>
          <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1 px-2" onClick={() => window.open('https://join.skype.com/invite/bofyiiFFrvcG', '_blank')}>
            <FontAwesomeIcon size="1x" icon={faSkype} /><span>Skype</span>
          </Button>
          <Button className="contact-btns bg-customBlue shadow border-0 py-1 px-2" onClick={() => window.open('mailto:s.rarewolf626@gmail.com?subject="Hello !"', '_blank')}>
            <FontAwesomeIcon size="1x" icon={faMailBulk} /><span>Mail</span>
          </Button>
        </div>
      </Container>
    </>
  )
};

export default Contact;
