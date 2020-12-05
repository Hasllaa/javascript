### 1. forEach
forEach 반복문은 오직 Array 객체에서만 사용 가능.
```
arr.forEach(callback (currentvalue [, index [, array]])[, thisArg])
```
-callback : 각 요소에 대해 실행할 함수로써 세가지 매개변수를 받음.
1) currentValue : 처리할 현재 요소.
2) index(옵): 처리할 현재 요소의 인덱스.
3) array(옵): forEach()를 호출할 배열.
-thisArg(옵션) : callback을 실행할 때 this로 사용할 값.

반환 값 : undefined

forEach()는 주어진 callback을 배열에 있는 각 요소에 대해 오름차순으로 한 번씩 실행한다.
삭제했거나 초기화하지 않은 인덱스 속성에 대해서는 실행하지 않음.

forEach()는 반복 전에 배열의 복사본을 만들지 않음.
```
let words = ['one', 'two', 'three', 'four']
words.forEach(function(word) {
  console.log(word)
  if (word === 'two') {
    words.shift()
  }
})

// one
// two
// four
```

----------------------
### 2. for...in
for...in문은 상속된 열거 가능한 속성들을 포함하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복함.
```
for(variable in object){...}
```
-variable : 매번 반복마다 다른 속성이름이 변수로 지정됨.
-object : 반복작업을 수행할 객체로 열거형 속성을 갖고 있는 객체.

-------------------------

  -  for...in은 임의의 순서로 객체의 속성들에 대해 반복함.
  -  for...in은 열거 가능한 non-Symbol 속성에 대해서만 반복함.
  -  for...in은 인덱스 순서가 중요한 Array에서 반복을 위해 사용 불가ㅠ
  -  for...in은 정수가 아닌 이름을 가진 속성, 상속된 모든 열거 가능한 속성들을 반환함.
  -  반복되는 순서는 구현에 따라 다르기 때문에, 배열의 반복이 일관된 순서로 요소를 방문하지 못 할 가능성 있음.
    => 때문에 순서가 중요한 배열의 반복시에는 숫자 인덱스를 사용가능한 for 반복문을 사용.
    키-값 쌍이 선호되는 데이터의 경우(속성이 "key"의 역할을 함) 특정 값을 가진 키가 있는지 확인하려는 경우에 for...in을 사용가능.

-----------------------------
### 3. for...of
for...of 명령문은 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성함.
```
for(variable of iterable) {
	statement
}
```
-variable : 각 반복에 서로 다른 속성값이 variable에 할당됨.
-iterable : 반복되는 열거가능(enumerable)한 속성이 있는 객체.

---------------------------------
### 4. for...in VS for...of
for...in 루프는 객체의 모든 열거가능한 속성에 대해 반복합니다.

for...of 구문은 컬렉션 전용입니다. 모든 객체보다는, Symbol.iterator속성이 있는 모든 컬렉션 요소에 대해 이 방식으로 반복합니다.
```
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}

```





