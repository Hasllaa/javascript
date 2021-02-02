```javascript
class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes; // 📍
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
      if(this.callback) {
        this.callback(this.counter);
      }
    }
  }
}

function printSomthing(num) {
  console.log(`good! ${num}`);
}

function alertNum(num) {
  alert(`alert! ${num}`);
}

// 생성자에 원하는 콜백함수 전달
const printCounter = new Counter(printSomthing);
const alertCounter = new Counter(alertNum);
```
 클래스를 너무 길게 만들면 재사용 기능이 떨어진다.
 
 콜백함수를 이용해 클래스를 만들게 되면 카운터를 쓰는 사람이 취향대로 사용 가능하다.
