import { mock, Random } from 'mockjs';

let currentDate = new Date().getDate();
const currentMonth = new Date().getMonth() + 1;
let date = [];
let i = 7;
while (i > 0) {
  date.unshift(currentDate);
  currentDate -= 1;
  i--;
}
date[0] = currentMonth + '月' + date[0] + '日';

const weekData = mock({
  date: date,
  value: [Random.natural(3, 20) as Number, Random.natural(3, 20) as Number, Random.natural(3, 20) as Number, Random.natural(3, 20) as Number, Random.natural(3, 20) as Number, Random.natural(3, 20) as Number, Random.natural(3, 20) as Number]
});

export default weekData;