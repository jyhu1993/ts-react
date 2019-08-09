import React from 'react';
import style from './bottomNav.module.scss';

const BottomNav: React.FC = () => {
  return (
    <div className={style.bottomNav}>
      <div className={style.item}>
        <i className="iconfont icon-jishi" />
        <p className={style.title}>计时</p>
      </div>
      <div className={style.item}>
        <i className="iconfont icon-tongji" />
        <p className={style.title}>统计</p>
      </div>
    </div>
  );
};

export default BottomNav;