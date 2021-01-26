```javascript
this.x = 5;
var sample = {
  x: 7,
  getX: function() { return this.x; }
};

sample.getX(); // 7

var sample2 = sample.getX;
sample2(); // 5

var sample3 = sample2.bind(sample);
sample3(); // 7

```
전역 변수 x와 module의 속성 x를 혼동하지 않도록 해야한다.
