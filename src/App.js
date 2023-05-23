import { useScroll, useTransform } from 'framer-motion';
import './App.css';
import Home from './components/home'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Title } from './style';
import { FiMenu } from 'react-icons/fi'; // Example: using react-icons library
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import CustomNavbar from './components/mynavbar';
import CustomRow from './components/row';
import Footer from './components/footer';
import aboutAnimationData from './components/about.json';
import contactAnimationData from './components/contact.json'
import Button from 'react-bootstrap/Button';
import PhoneOutlined from '@ant-design/icons/PhoneOutlined';
import MailOutlined from '@ant-design/icons/MailOutlined';

const phoneNumber = "311"
const emailAddress = "SouljaBoy@gmail.com"


const MyButton = (props) => {
  const { buttonText, buttonIcon, buttonColor, linkTo } = props
  return (
    <a href={linkTo}>
      <div style={{ paddingTop: '5px', width: '200px', paddingTop: '10px', }}>
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          style={{ transformOrigin: 'left' }}

        >
          <Button variant={buttonColor} style={{ backgroundColor: { buttonColor }, width: '150px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {buttonIcon}
              <span style={{ marginLeft: '10px' }}>{buttonText}</span>
            </div>
          </Button>
        </motion.div>
      </div>
    </a>
  );
}



const MyNavbar = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.1, 1], [0, -600]);
  const x_opp = useTransform(scrollYProgress, [0.1, 1], [0, 600]);

  const aboutUsDesc = <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Maecenas pharetra quis elit interdum consectetur.
    Duis hendrerit purus ullamcorper purus porta bibendum.
    Duis hendrerit consectetur mauris eu vehicula.
    Vestibulum varius sit amet purus ac elementum.
    Sed molestie quam est, at accumsan libero pretium ut.
    Etiam efficitur et orci sed condimentum. Nullam lacus orci,
    malesuada vitae ligula nec, porttitor fringilla nibh.
    Etiam eros nisl, rhoncus ac nisi aliquam, ullamcorper semper ex.
    Interdum et malesuada fames ac ante ipsum primis in faucibuss.
  </p>
  const contactUsSection = <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Maecenas pharetra quis elit interdum consectetur.
      Duis hendrerit purus ullamcorper purus porta bibendum.
      Duis hendrerit consectetur mauris eu vehicula.
      Vestibulum varius sit amet purus ac elementum.
      Sed molestie quam est, at accumsan libero pretium ut.
      Etiam efficitur et orci sed condimentum. Nullam lacus orci,
      malesuada vitae ligula nec, porttitor fringilla nibh.
      Etiam eros nisl, rhoncus ac nisi aliquam, ullamcorper semper ex.
      Interdum et malesuada fames ac ante ipsum primis in faucibus.
    </p>
    <div style={{ display: 'inline' }}>


      <MyButton buttonText="Call Us" buttonIcon={<PhoneOutlined />} buttonColor="outline-dark" linkTo={`tel:${phoneNumber}`} />
      <MyButton buttonText="Email Us" buttonIcon={<MailOutlined />} buttonColor="outline-dark" linkTo={`mailto:${emailAddress}`} />

    </div>
  </div>




  return (
    <>
      <CustomNavbar />
      <div>
        <div className="home-page" id="home">
          <div className="overlay">
            <Title style={{ x: x }}> Hassan</Title>
            <Title style={{ x: x_opp }}> Tutorial</Title>
          </div>
        </div>
      </div >
      <CustomRow lottieAnimationData={aboutAnimationData} rowTitle="About Us" rowDesc={aboutUsDesc} inverted={false} idName={"about"} size={"100%"} />
      <CustomRow lottieAnimationData={contactAnimationData} rowTitle="Contact Us" rowDesc={contactUsSection} inverted={true} idName={"contact"} size={"80%"} />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <MyNavbar />
    </>
  );
}

export default App;
