import React, { useState } from 'react';
import BottomNav from './navigation/bottomNav';
import Task from './timer/task';
import style from './index.module.scss';

const Index: React.FC = () => {
  // 设置html字体大小与设备宽度的关系；
  const deviceWidth: number = window.innerWidth;
  const docEle = document.querySelector('html');
  if (docEle) {
    docEle.style.fontSize = 20 * (deviceWidth / 640) + 'px';
  }

  // 设置当前索引
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChangeCurrentIndex: (btn: string) => void = function(btn: string): void {
    if (btn === '计时') {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(1);
    }
  };
  const bottomNavProps = {
    currentIndex,
    handleChangeCurrentIndex,
  };
  return (
    <div className={style.app}>
      <Task />
      <BottomNav {...bottomNavProps} />
    </div>
  );
};

export default Index;