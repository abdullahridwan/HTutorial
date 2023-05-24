import styled from 'styled-components'
import { motion } from 'framer-motion'


export const Header = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  opacity: 0.8;
`;

export const Title = styled(motion.h1)`
  font-family: Sans-serif;
  color: white;
  font-size: 10vh;
  z-index: 1;
  margin: 0;
  white-space: nowrap;
  transition: all .1s linear;
`;

export const Paragraph = styled.p`
  max-width: 900px;
  font-size: 32px;
  position: relative;
  margin: 17vh;
`;

export const Img = styled.img`
  width: 25em;
`;

export const Section = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 10em 0;
  color: white;
`;