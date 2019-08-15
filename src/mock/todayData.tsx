import { mock } from 'mockjs';

interface Item {
  name: string;
  value: number;
}
const todayData: Item[] = [
  mock({
    name: '工作',
    'value|1-100': 100
  }),
  mock({
    name: '学习',
    'value|1-100': 100
  }),
  mock({
    name: '思考',
    'value|1-100': 100
  }),
  mock({
    name: '写作',
    'value|1-100': 100
  }),
  mock({
    name: '运动',
    'value|1-100': 100
  }),
  mock({
    name: '阅读',
    'value|1-100': 100
  })
];

export default todayData;