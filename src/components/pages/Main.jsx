import React from 'react';

// 레이아웃
import Header from '../layout/Header';
import MainWrap from '../layout/MainWrap';

// 배경색 변경
import BlackBG from '../BGchange/BlackBG';
import WhiteBG from '../BGchange/WhiteBG';

// 섹션
import Intro from '../section/Intro';
import HorizontalCont from '../section/HorizontalCont';
import MainCont from '../section/MainCont';
import Intro2 from '../section/Intro2';
import ListOfMyWork from '../section/ListOfMyWork';

import GetInTouch from '../section/GetInTouch';
import ContactMe from '../section/ContactMe';
import Outro from '../section/Outro';

import GITCMwrap from '../layout/GITCMwrap';
import Footer from '../layout/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <MainWrap>
        <BlackBG>
          <Intro />
          <HorizontalCont />
        </BlackBG>
        <WhiteBG>
          <MainCont />
        </WhiteBG>
        <BlackBG>
          <Intro2 />
          <ListOfMyWork />
        </BlackBG>
      </MainWrap>
      <Footer>
        <GITCMwrap>
          <GetInTouch />
          <ContactMe />
        </GITCMwrap>
        <Outro />
      </Footer>
    </>
  );
}

export default Main;