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

