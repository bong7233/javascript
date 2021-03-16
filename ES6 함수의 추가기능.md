# 함수의 구분
- ES6 전까지의 함수 = 구분없이 호출되고 인스턴스생성하고 메서드역할하고..
- 즉 일반함수로 호출가능, 생성자함수로 호출가능
    - callable(호출가능한 함수객체) and constructor(인스턴스 생성가능한 함수객체) // 생성못하는함수객체는 non-constructor라고함
- 또한 메서드(객체에 바인딩된 함수)와 콜백함수도 callable,constructor
    - 하지만 메서드가 constructor? 그럼 prototype 프로퍼티도 있고 prototype 객체도생성하네? --> 이건 불필요한 객체를 만들기떄문에 성능면에서 좋지않다
```
var foo = function () {
  return 1;
};

// 일반적인 함수로서 호출
foo(); // -> 1

// 생성자 함수로서 호출
new foo(); // -> foo {}

// 메서드로서 호출
var obj = { foo: foo };
obj.foo(); // -> 1
```

- So ES6 에서는 목적에따라 세가지로 구분(추가로 제너레이터함수와 async함수도있지만 나중에 깊이들어가서 따로공부하기)

<table>
  <thead>
    <tr>
      <th style="text-align: left">ES6 함수의 구분</th>
      <th style="text-align: center">constructor</th>
      <th style="text-align: center">prototype</th>
      <th style="text-align: center">super</th>
      <th style="text-align: center">arguments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left">일반 함수(Normal)</td>
      <td style="text-align: center">○</td>
      <td style="text-align: center">○</td>
      <td style="text-align: center">✗</td>
      <td style="text-align: center">○</td>
    </tr>
    <tr>
      <td style="text-align: left">메서드(Method)</td>
      <td style="text-align: center">✗</td>
      <td style="text-align: center">✗</td>
      <td style="text-align: center">○</td>
      <td style="text-align: center">○</td>
    </tr>
    <tr>
      <td style="text-align: left">화살표 함수(Arrow)</td>
      <td style="text-align: center">✗</td>
      <td style="text-align: center">✗</td>
      <td style="text-align: center">✗</td>
      <td style="text-align: center">✗</td>
    </tr>
  </tbody>
</table>

- 일반함수는 함수선언문이나 함수표현식으로 정의한 함수(기존과 동일)
- 메서드, 화설표함수는 ES6에서 차이가있음을 기억(non-constructor로 변경)

## 메서드
- ES6 사양에서는 **메서드 축약표현으로 정의된 함수** = **메서드**
- 인스턴스를 생성할수 없는 non-constructor
- 즉, 생성자함수로서 호출할 수 없다
- 인스턴스 생성불가? => 프로토타입 프로퍼티도없고 프로토타입도 생성하지않음
```
const obj = {
  x: 1,
  // foo는 메서드이다.
  foo() { return this.x; },
  // bar에 바인딩된 함수는 메서드가 아닌 일반 함수이다.
  bar: function() { return this.x; }
};
```
- 표준빌트인 객체가 제공하는 프로토타입메서드와 정적메서드는 모두 non-constructor (아직은 무슨말인지 이해못함)
- ES6 메서드는 자신을 바인딩한 객체를 가리키는 내부슬롯[[HomeObject]]가짐
    - 내부슬롯[[HomeObject]] 을 가짐?= super keyword를 사용가능
    - ES6 에서 super keyword를 사용가능한 유일한함수가 메서드
    - 즉 메서드 정의시 프로퍼티값으로 익명함수표현식을 할당하는 이전의방식은 사용하지않음

## 화살표함수
- function keyword 대신 =>(fat arrow) 로 간략하게 함수정의
- 화살표함수는 콜백함수 내부에서 this가 전역객체를 가리키는 문제 해결에 유용

### 화살표함수 정의
- 함수 표현식으로 정의// 선언문으로 정의할 수 없음
    - const multiply = (x, y) => x * y;
- 매개변수가 여러개인 경우 소괄호() 안에 매개변수 선언
    - const arrow = (x, y) => { ... };
- 매개변수가 한개인 경우 소괄호 생략가능// 매개변수 없을땐 소괄호 생략불가능
    - const arrow = x => { ... };
- 함수 몸체가 하나의 문으로 구성되면 중괄호{} 생략가능// 이때 내부의 문이 값으로 평가될수 있는 표현식이라면, 암묵적으로 반환
    - 만약 중괄호 생략했는데 문이 표현식이아닌문? syntaxError
    - 몸체가 여러개의 문으로 구성? 중괄호 생략불가능
```
// concise body
const power = x => x ** 2;
power(2); // -> 4

// 위 표현은 다음과 동일하다.
// block body
const power = x => { return x ** 2; };
```
- 함수 몸체가 객체리터럴을 반환하는경우 객체리터럴을 소괄호()로 wrap
    - wrap안하면? 객체리터럴의 중괄호를 함수를감싸는 중괄호로 해석...
```
const create = (id, content) => ({ id, content });
create(1, 'JavaScript'); // -> {id: 1, content: "JavaScript"}

// 위 표현은 다음과 동일하다.
const create = (id, content) => { return { id, content }; };
```
- 화살표함수를 즉시실행함수(IIFE) 로 사용가능
    - 화살표함수도 일급객체 이므로 고차함수에 인수로 전달가능(가독성 굿)
```
const person = (name => ({
  sayHi() { return `Hi? My name is ${name}.`; }
}))('Lee');

console.log(person.sayHi()); // Hi? My name is Lee.
```
- 화살표함수는 콜백함수로서 정의할 떄 유용
```
// ES5
[1, 2, 3].map(function (v) {
  return v * 2;
});

// ES6
[1, 2, 3].map(v => v * 2); // -> [ 2, 4, 6 ]
```
### 화살표함수와 일반함수 차이
- 화살표함수는 non-constructor
- 중복된 매개변수이름 선언 시 에러발생(일반함수의 strcit mode도 error발생)
- 화살표함수는 함수자체의 this, arguments, super, new.target 바인딩을 갖지않음
    - 만약 이것들을 참조하면 상위스코프(화살표함수가 아닌)의 것을 참조
#### This
- 화살표함수와 일반함수의 가장 큰 구별점
- 화살표함수는 주로 다른함수의 인수로 전달되어 콜백함수로 사용됨
    - 애초에 콜백함수의 내부 this문제의 해결책으로 고안된것이 화살표함수
```
this 바인딩은 함수가 어떻게 호출되었는지에따라 동적으로 결정
즉 함수 정의시 this에 바인딩할객체가 정적으로 결정되는게아닌, 호출방식에따라 바인딩할객체가 동적으로 결정됨(한마디로 외부함수의 this와 내부함수인 콜백함수의 this가 서로 다른값이 되어버리는 결과가나옴...bad)
```
- 쉽게말하면 일반함수로 호출되는 모든 함수의 내부 this는 전역객체를 가르킴, but 클래스 내부의 코드(콜백함수)에는 암묵적으로 this가 undefined로 바인딩되는 strict mode가 적용됨.
    - 결과적으로 콜백의 this 와 외부의 this가 다른값을 가리킴= 타입에러
---
- 그래서 ES6 에서는 방법을 바꿈
```
기존의 오류발생과정
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    // add 메서드는 인수로 전달된 배열 arr을 순회하며 배열의 모든 요소에 prefix를 추가한다.
    // ①
    return arr.map(function (item) {
      return this.prefix + item; // ②
      // -> TypeError: Cannot read property 'prefix' of undefined
    });
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
```
- add메서드를 호출한 외부객체를 가리키는 this를 일단 회피시키고 콜백함수 내부에서 사용
```
...
add(arr) {
  // this를 일단 회피시킨다.
  const that = this;
  return arr.map(function (item) {
    // this 대신 that을 참조한다.
    return that.prefix + ' ' + item;
  });
}
...
```
- add메서드를 호출한 prefixer 객체를 가리키는 this를 Array.prototype.map의 두번쨰 인수로 전달
```
...
add(arr) {
  return arr.map(function (item) {
    return this.prefix + ' ' + item;
  }, this); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
}
...
```
- Function.prototype.bind 메서드로 add메서드를 호출한 prefixer객체를 가리키는 this를 바인딩
```
...
add(arr) {
  return arr.map(function (item) {
    return this.prefix + ' ' + item;
  }.bind(this)); // this에 바인딩된 값이 콜백 함수 내부의 this에 바인딩된다.
}
...
```
- 화살표함수는 함수자체의 this 바인딩을 갖지않음, 그래서 화살표함수 내부에서 this를 참조하면 상위스코프(여기서는 prefixer)의 this를 참조(이를 lexical this 라고함// 렉시컬스코프처럼 함수가 정의된 위치에의해 결정되는것)
```
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  add(arr) {
    return arr.map(item => this.prefix + item);
  }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition', 'user-select']));
// ['-webkit-transition', '-webkit-user-select']
```
- 화살표함수를 제외한 모든함수에는 this바인딩이 무조건 있음. but 화살표함수는 없음 , 즉 화살표함수의 this를 참조? 그럼 스코프체인을 탐색해서 상위스코프의 this를 참조.
- 화살표함수는 this 바인딩이 없음, Function.prototype.call,apply,bind 메서드를 사용해도 화살표 함수 내부의 this를 교체할 수 없음
    - 교체할수 없음이지 호출은 할수있다.(상위스코프의 this를 참조)
    - 메서드(ES6 이전의 보통 메서드)를 화살표함수로 정의하면? 만약 내부의 화살표함수가 this를 참조하여 변화시키면 전역객체의 this가 바뀌어버림 == so bad
    
```
window.x = 1;

const normal = function () { return this.x; };
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); // 10
console.log(arrow.call({ x: 10 }));  // 1
```
---
- ***짚고넘어가자. 콜백함수는 화살표함수로 쓰는게좋다. 근데 메서드에는 화살표함수쓰지말고 ES6메서드 쓰자***
    - 개념을 똑바로잡고 넘어가자
---
- 축약표현의로 정의된 ES6 메서드를 사용해서 메서드를 정의하자~ 화살표함수말고...
- 프로토타임 객체의 프로퍼티도 화살표함수를 사용하는것은 bad
    - 근데 그렇다고 ES6 쓰고싶은데 프로퍼티의 동적추가에는 ES6메서드 정의를 사용할수없네? 그럼 일반함수 할당해야겠다
    - 그래도 ES6 메서드 동적추가해서 쓰고싶은데? 그럼 객체리터럴을 바인딩해서 프로토타입의 constructor 프로퍼티와 생성자함수간의 연결을 재설정
```
function Person(name) {
  this.name = name;
}

Person.prototype = {
  // constructor 프로퍼티와 생성자 함수 간의 연결을 재설정
  constructor: Person,
  sayHi() { console.log(`Hi ${this.name}`); }
};

const person = new Person('Lee');
person.sayHi(); // Hi Lee
```
- 클래스필드 정의 제안을 사용해서 클래스필드에 화살표함수 할당도 가능(25.클래스 보기)
```
class Person {
  // 클래스 필드 정의
  name = 'Lee';

  sayHi() { console.log(`Hi ${this.name}`); }
}
const person = new Person();
person.sayHi(); // Hi Lee
```
