interface IMethod {
  [propName: string]: Function;
}

const parseTime: (x: number) => string = function(x: number): string {
  const minute = Math.floor(x / 60);
  const second = Math.floor(x % 60);
  return (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
};

const method: IMethod = {
  parseTime,
};

export default method;