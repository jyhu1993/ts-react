import React from 'react';
import style from './bottomNav.module.scss';

interface BottomNavProps {
  currentIndex: number;
  setCurrentIndex: Function;
}
const BottomNav = (props: BottomNavProps) => {
  const { currentIndex, setCurrentIndex } = props;
  return (
    <div className={style.bottomNav}>
      <div
        className={currentIndex === 0 ? `${style.item} ${style.activeItem}` : style.item}
        onClick={() => setCurrentIndex(0)}
      >
        <i className={`iconfont icon-jishi ${style.icon}`} />
        <p className={style.title}>计时</p>
      </div>
      <div
        className={currentIndex === 1 ? `${style.item} ${style.activeItem}` : style.item}
        onClick={() => setCurrentIndex(1)}
      >
        <i className={`iconfont icon-tongji ${style.icon}`} />
        <p className={style.title}>统计</p>
      </div>
    </div>
  );
};

export default BottomNav;