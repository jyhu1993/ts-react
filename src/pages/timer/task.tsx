import React from 'react';
import style from './task.module.scss';

interface TaskProps {
  currentTask: string;
  setCurrentTask: Function;
  setTimingState: Function;
}

const Task = (props: TaskProps) => {
  interface Task {
    icon: string;
    text: string;
  }
  const taskList: Task[] = [
    {
      icon: 'icon-gongzuo',
      text: '工作'
    },
    {
      icon: 'icon-xuexi',
      text: '学习'
    },
    {
      icon: 'icon-faqisikao',
      text: '思考'
    },
    {
      icon: 'icon-tubiaozhizuomoban-',
      text: '写作'
    },
    {
      icon: 'icon-yundong',
      text: '运动'
    },
    {
      icon: 'icon-yuedu',
      text: '阅读'
    }
  ];
  const { currentTask, setCurrentTask, setTimingState } = props;
  return (
    <div className={style.task}>
      <h3 className={style.title}>选择一个任务</h3>
      <p className={style.text}>接下来的25分钟，专注做这件事</p>
      <div className={style.content}>
        {
          taskList.map((item) => {
            return (
              <div
                key={item.text}
                className={currentTask === item.text ? `${style.item} ${style.active}` : style.item}
                onClick={() => setCurrentTask(item.text)}
              >
                <i className={`iconfont ${item.icon} ${style.icon}`}></i>
                <p>{item.text}</p>
              </div>
            );
          })
        }
      </div>
      <p
        className={style.startTime}
        onClick={() => setTimingState(true)}
      >
        开始计时
      </p>
    </div>
  );
};

export default Task;