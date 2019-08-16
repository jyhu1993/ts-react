import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import style from './index.module.scss';
import todayData from '../../mock/todayData';
import weekData from '../../mock/weekData';

const list: number[] = todayData.map((item) => {
  return item.value;
});
const tadayTotal: number = list.reduce((x, y) => x + y);

const weekTotal: number = weekData.value.reduce((x: number, y: number) => x + y);
const dayAverage = weekTotal / 7;

const Statistics = () => {
  const createPieChart = () => {
    let todayChart = echarts.init(document.getElementById('todayMountNode') as HTMLDivElement);
    todayChart.setOption({
      legend: {
        orient: 'horizontal',
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 8,
        bottom: 15,
        data: ['工作', '学习', '思考', '写作', '运动', '阅读']
      },
      series: [
        {
          name: '番茄占比',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          center: ['50%', '40%'],
          label: {
            show: false,
            position: 'center',
            formatter: '{b}:{c}\n\n({d}%)',
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '15',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: todayData
        }
      ]
    });
  };
  const createBarChart = () => {
    let weekChart: any = echarts.init(document.getElementById('weekMountNode') as HTMLDivElement);
    weekChart.on('click', function(params: any) {
      const currentDataIndex = params.dataIndex;
      weekChart.setOption({
        xAxis: {
          type: 'category',
          data: weekData.date,
          axisLine: {
            lineStyle: {
              color: '#c5c2c2',
            }
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            interval: 0,
            formatter: function (value: any, index: number) {
              if (currentDataIndex === index) {
                return `{highlight|${value}}`;
              } else {
                return value;
              }
            },
            rich: {
              highlight: {
                color: 'black'
              }
            }
          },
        },
        yAxis: {
          show: false,
        },
        grid: {
          left: 0,
          right: 0,
          bottom: 30
        },
        series: [{
          data: weekData.value,
          type: 'bar',
          barWidth: 10,
          label: {
            show: false,
            position: 'top',
            emphasis: {
              show: true,
              color: '#b40113',
            }
          },
          markLine: {
            symbol: 'none',
            label: {
              show: false
            },
            data: [
              { type: 'average', name: '平均值' }
            ]
          },
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0, color: '#b40113'
                  },
                  {
                    offset: 1, color: '#ff0000'
                  }
                ]
              },
              barBorderRadius: 4,
            }
          }
        }]
      });
    });
    weekChart.setOption({
      xAxis: {
        type: 'category',
        data: weekData.date,
        axisLine: {
          lineStyle: {
            color: '#c5c2c2',
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
        },
      },
      yAxis: {
        show: false
      },
      grid: {
        left: 0,
        right: 0,
        bottom: 30
      },
      series: [{
        data: weekData.value,
        type: 'bar',
        barWidth: 10,
        label: {
          show: false,
          position: 'top',
          emphasis: {
            show: true,
            color: '#b40113',
          }
        },
        markLine: {
          symbol: 'none',
          label: {
            show: false
          },
          data: [
            { type: 'average', name: '平均值' }
          ]
        },
        itemStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0, color: '#b40113'
                },
                {
                  offset: 1, color: '#ff0000'
                }
              ]
            },
            barBorderRadius: 4,
          }
        }
      }]
    });
  };
  useEffect(() => {
    createPieChart();
    createBarChart();
  });
  return (
    <div className={style.statistics}>
      <div className={style.items}>
        <span className={style.item}>今日番茄数</span>
        <span className={style.item}>累计番茄数</span>
      </div>
      <div className={style.gap}></div>
      <div className={style.todayFinish}>
        <div className={style.title}>
          <p>今日完成</p>
          <p>{tadayTotal}个番茄</p>
        </div>
        <div id="todayMountNode" className={style.todayMountNode}></div>
      </div>
      <div className={style.gap}></div>
      <div className={style.weekFinish}>
        <div className={style.title}>
          <div>
            <p>最近一周完成</p>
            <p className={style.average}>平均每天{dayAverage.toFixed(1)}个番茄</p>
          </div>
          <p>{weekTotal}个番茄</p>
        </div>
        <div id="weekMountNode" className={style.weekMountNode}></div>
      </div>
    </div>
  );
};

export default Statistics;