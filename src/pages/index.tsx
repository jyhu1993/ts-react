import React from 'react';
import BottomNav from './navigation/bottomNav';
import style from './index.module.scss';

const Index: React.FC = () => {
  const deviceWidth: number = window.innerWidth;
  const docEle = document.querySelector('html');
  if (docEle) {
    docEle.style.fontSize = 20 * (deviceWidth / 640) + 'px';
  }
  return (
    <div className={style.app}>
      <BottomNav />
    </div>
  );
};

export default Index;