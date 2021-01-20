### html
```html
  <ul class="container">
    <li></li>
    <li></li>
    <li></li>
  </ul>
```

### javascript
```javascript
  const ul = document.querySelector('.container');
  ul.addEventListener('click', (event)=> {
  if(event.target.nodeName === 'LI'){
    event.target.classList.add('selected');
  }
})
```

- 이벤트위임을 사용하면 불필요한 메모리 사용을 줄일 수 있고 관리도 쉬워진다.
  `event.target`을 이용하면 사용하기 쉽다.
