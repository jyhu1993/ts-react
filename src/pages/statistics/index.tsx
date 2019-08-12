import React from 'react';
import * as echarts from 'echarts';
import style from './index.module.scss';
import todayData from '../../mock/todayData';

const list: number[] = todayData.map((item) => {
  return item.count;
});
let total: number = list.reduce((x, y) => x + y);

const Statistics = () => {
  // let todayChart = echarts.init(document.getElementById('todayMountNode'));
  return (
    <div className={style.statistics}>
      <div className={style.items}>
        <span className={style.item}>今日番茄数</span>
        <span className={style.item}>累计番茄数</span>
      </div>
      <div className={style.todayFinish}>
        <div className={style.title}>
          <p>今日完成</p>
          <p>{total}个番茄</p>
        </div>
        <div id="todayMountNode" className={style.todayMountNode}></div>
      </div>
    </div>
  );
};

export default Statistics;