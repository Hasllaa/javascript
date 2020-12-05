sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환함.
기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따름.

```
arr.sort([compareFunction]) 
```

compareFunction : 정렬 순서를 정의하는 함수.
생략시 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니코드 코드 포인트 값에 따라 결정됨.
주의
원 배열이 정렬 되는 것, 복사본이 만들어지는 것이 아님.

```
javascript
function compareNumbers(a, b) {
  return a - b;
}
```

=>  문자열 대신 숫자를 비교하기 위해 compare 함수는 a에서 b를 뺄 수 있다. 
    다음 함수는 배열을 오름차순으로 정렬합니다 (Infinity 및 NaN이 포함되어 있지 않은 경우).
