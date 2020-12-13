// 1. Shorthand property names

{
  const cash1 = {
    name: "cash",
    age: "25",
  };

  const name = "cash";
  const age = "25";

  const cash2 = {
    name: name,
    age: age,
  };

  const cash3 = {
    name,
    age, // when key==value
  }
}



// 2. Destructuring Assignment

{
  // object의 경우
  const person = {
    name: "cash",
    age: "25",
  };

  // 기존방식
  {
    const name = person.name;
    const age = person.age;
    console.log(name,age);
  }

  // 바뀐방식
  {
    const {name,age} = person; // person의 key와 value가 각각 알맞게 name과 age에 할당됨
    console.log(name,age);
  }


  // 배열의 경우
  const animals = ['pig', 'cat'];

  // 기존방식
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first,second);
  }

  // 바뀐방식
  {
    const [first, second] = animals; // animals에 할당된 배열이 순서대로 first와 second에 할당됨
    console.log(first,second);
  }
}


// 3. Spread Syntax : object가 가리키고 있는 주소의 참조값만 복사해 온다.
//  원래의 object요소를 변경하게 되면 spread syntax에도 영향을 미치게 됨.

{
  const obj1 = {key: 'key1'};
  const obj2 = {key: 'key2'};
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array]; // array안에 들어있는 요소를 낱개로 가져와서 복사해옴
  console.log(array,arrayCopy);

  const arrayCopy2 = [...array, {key: 'key3'}]; // 추가하고 싶은 아이템 추가
  console.log(array,arrayCopy,arrayCopy2);

  // object copy
  const obj3 = {...obj1};
  console.log(obj3);

  // array concatenation
  const person1 = ['Amy', 'Bruno'];
  const person2 = ['Chaile', 'David'];
  const people = [...person1, ...person2];
  console.log(people);
  
  // object merge
  // 만약 병합하는 object의 key가 동일한다면 뒤의 object가 앞의 object를 덮어씀
  const dog1 = {dog1: 'A'};
  const dog2 = {dog2: 'B'};
  const dog = {...dog1, ...dog2};
  console.log(dog);
}


// 4.Default Parameters

{
  // 기존 방법
  {
    function printMessage(message){
      if(message == null){
        message = 'default message';
      }
      console.log(message);
    }

    printMessage('hello');
    printMessage(); 
  }

  // 바뀐 방법
  //  인자 다음에 초기값을 지정해주면서 전달되지 않을 경우 출력값이 지정됨
  {
    function printMessage(message = 'default message'){
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
}


// 5. Ternary Operator

{
  const isCat = true;

  // 기존 방법
  {
    let component;
    if(isCat){
      component = 'cat';
    }else {
      component = 'dog';
    }
    console.log(component);
  }

  // 바뀐 방법
  {
    const component = isCat ? 'cat' : 'dog';
    console.log(component);
    console.log(isCat ? 'cat' : 'dog')
  }
}


// 6. Template Literlas

{
  const weather = 'sunny';
  const temperature = '4℃'

  console.log(`Today weather is ${weather} and temperature is ${temperature}.`);
}


// ES11 


// 1. Optional Chaining

{
  const person1 = {
    name: 'Cash',
    job: {
      title: 'student',
      friend: {
        name: 'Jun',
      },
    },
  },
  const person2 = {
    name: 'Jun',
  };

  // X
  {
    function printMessage(person){
      console.log(person.job.manager.name);
    }
    printMessage(person1);
    printMessage(person2); // Error
  }

  // 비효율적인 코드
  {
    function printMessage(person){
      console.log(person.job && person.job.manager && person.job.manager.name); // person의 job과 manager가 있으면 name이 출력
    }
    printMessage(person1);
    printMessage(person2);
  }

  // 새로운 방식을 적용한 코드
  {
    function printMessage(person){
      console.log(person.job?.manager?.name); // person의 job과 manager가 있으면 name이 출력
    }
    printMessage(person1);
    printMessage(person2);
  }
}


// 2. Nullish Coalescing Operator

{
  // Logical OR operator : 비교대상중 앞의 것이 거짓일 때만 뒤의 것이 실행됨
  // false: false, '', 0, null, undefined
  // 숫자 0이 출력이 안 됨.
  {
    const name= 'cash';
    const userName = name || 'Guest';
    console.log(userName);
  }

  {
    const name= null; // 이름이 정해져 있지 않으면 null을 출력하기 위해 OR연산자를 많이 사용했다.
    const userName = name || 'Guest';
    // 이렇게 되면 name의 문자열이 비어있을 경우(아무것도 쓰고 싶지 않을 때) false로 인식해
    // Guest가 할당되는 버그가 생김.
    console.log(userName);
  }

  // 명확하게 구분하기 위한 코드!
  {
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);

    const num = 0;
    const message = num ?? 'undefined';
    console.log(message);
  }
}
