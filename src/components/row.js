import { motion } from 'framer-motion'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import MyLottie from './mylottie';

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      // whileHover={{ scale: 1.05 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}
    >
      {children}
    </motion.div>
  );
}


const TextCol = (props) => {
  const { rowTitle, rowDesc } = props;
  return (
    <Col lg={6} sm={12} className="d-flex align-items-center justify-content-center" >

      <FadeInWhenVisible>
        <div style={{ padding: "10%" }}>
          <h1>  {rowTitle} </h1>
          {rowDesc}
        </div>
      </FadeInWhenVisible>
    </Col>
  );
}

const LottieCol = (props) => {
  const { lottieAnimationData, size } = props;
  return (
    <Col lg={6} sm={12} className="d-flex align-items-center justify-content-center">
      <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.5 }}>
        <FadeInWhenVisible>
          <MyLottie animationData={lottieAnimationData} size={size} />
        </FadeInWhenVisible>
      </motion.div>
    </Col>
  );
}

const CustomRow = (props) => {

  const { lottieAnimationData, rowTitle, rowDesc, inverted, idName, size } = props


  return (
    <div style={{ width: "100vw", marginBottom: '0px' }} id={idName}>
      <Container fluid className="h-100">
        {inverted ?
          <Row className="h-100 mb-10">
            <TextCol rowTitle={rowTitle} rowDesc={rowDesc} />
            <LottieCol lottieAnimationData={lottieAnimationData} size={size} />
          </Row>
          :
          <Row className="h-100 mb-10">
            <LottieCol lottieAnimationData={lottieAnimationData} size={size} />
            <TextCol rowTitle={rowTitle} rowDesc={rowDesc} />
          </Row>
        }
      </Container>
    </div >
  );
}

export default CustomRow;