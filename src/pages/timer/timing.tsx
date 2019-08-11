import React, { useState, useEffect } from 'react';
import method from '../../common/methods';
import style from './timing.module.scss';

interface TimingProps {
  setTimingState: Function;
}
const Timing = (props: TimingProps) => {
  const [currentTime, setCurrentTime] = useState(10);
  const [isStop, setStopState] = useState(false);
  console.log('外层', currentTime);
  // hook加计时器真的太奇怪了；
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentTime(currentTime - 1);
    }, 1000);
    if (currentTime === 0 || isStop) {
      clearTimeout(timer);
    }
    // 不加这个暂停时会有1秒延时；
    return () => {
      clearTimeout(timer);
    };
  });

  // 处理放弃
  const { setTimingState } = props;
  return (
    <div className={style.timing}>
      <div className={style.clock}>
        <div className={style.secondCircle}>
          <div className={style.innerCircle}>
            <p className={style.text}>
              {
                currentTime !== 0 ?
                  (!isStop ? '计时中' : '已暂停') :
                  '已完成'
              }
            </p>
            <p className={style.time}>
              {
                currentTime !== 0 ?
                  method.parseTime(currentTime) :
                  <i className="iconfont icon-wancheng"></i>
              }
            </p>
          </div>
        </div>
      </div>
      {
        currentTime !== 0 ?
          <div className={style.isTiming}>
            <p
              className={!isStop ? style.stopTiming : style.continueTiming}
              onClick={() => setStopState(!isStop)}
            >
              {isStop ? '继续计时' : '暂停计时'}
            </p>
            <p
              className={style.quit}
              onClick={() => setTimingState(false)}
            >
              放弃
            </p>
          </div> :
          <div
            className={style.finishTiming}
            onClick={() => setTimingState(false)}
          >
            开始新番茄
          </div>
      }
    </div>
  );
};

export default Timing;