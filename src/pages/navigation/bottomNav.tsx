import React from 'react';
import style from './bottomNav.module.scss';

interface BottomNavProps {
  currentIndex: number;
  handleChangeCurrentIndex: Function;
}
const BottomNav = (props: BottomNavProps) => {
  const { currentIndex, handleChangeCurrentIndex } = props;
  return (
    <div className={style.bottomNav}>
      <div
        className={currentIndex === 0 ? `${style.item} ${style.activeItem}` : style.item}
        onClick={() => handleChangeCurrentIndex('计时')}
      >
        <i className="iconfont icon-jishi" />
        <p className={style.title}>计时</p>
      </div>
      <div
        className={currentIndex === 1 ? `${style.item} ${style.activeItem}` : style.item}
        onClick={() => handleChangeCurrentIndex('统计')}
      >
        <i className="iconfont icon-tongji" />
        <p className={style.title}>统计</p>
      </div>
    </div>
  );
};

export default BottomNav;