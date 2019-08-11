import React, { useState } from 'react';
import BottomNav from './navigation/bottomNav';
import Task from './timer/task';
import Statistics from './statistics/index';
import Timing from './timer/timing';
import style from './index.module.scss';

const Index: React.FC = () => {
  // 设置html字体大小与设备宽度的关系；
  const deviceWidth: number = window.innerWidth;
  const docEle = document.querySelector('html');
  if (docEle) {
    docEle.style.fontSize = 20 * (deviceWidth / 640) + 'px';
  }

  // 设置当前导航索引
  const [currentIndex, setCurrentIndex] = useState(0);
  const bottomNavProps = {
    currentIndex,
    setCurrentIndex,
  };

  // 设置当前任务索引
  const [currentTask, setCurrentTask] = useState('工作');
  // 是否正在计时
  const [isTiming, setTimingState] = useState(false);
  const taskProps = {
    currentTask,
    setCurrentTask,
    setTimingState,
  };
  const timingProps = {
    setTimingState,
  };
  const TimerPage: React.ReactNode = isTiming ? <Timing {...timingProps} /> : <Task {...taskProps} />;
  return (
    <div className={style.app}>
      {
        currentIndex === 0 ? TimerPage : <Statistics />
      }
      <BottomNav {...bottomNavProps} />
    </div>
  );
};

export default Index;