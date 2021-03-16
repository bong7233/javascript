# Number 생성자함수
- Number 객체는 new 연산자와 함께 호출하여 Number 인스턴스를 생성
- 인수를 전달하지않고 + new 연산자:  
[[NumberData]] 내부슬롯에 0을 할당한 **Number 래퍼 객체** 생성  
[[NumberData]]=[[PrimitiveValue]]  
```
const numObj = new Number();
console.log(numObj); // Number {[[PrimitiveValue]]: 0}
```  
- 인수로 숫자 전달 + new 연산자:  
[[NumberData]] 내부슬롯에 숫자를 할당한 **Number 래퍼 객체** 생성  
```
const numObj = new Number(10);
console.log(numObj); // Number {[[PrimitiveValue]]: 10}
```
- 인수로 숫자가 아닌값 전달하면 숫자로 강제변환후 동일한과정 실행/ 숫자로 변환불가능하면 NaN 을 할당  
```
numObj = new Number('Hello');
console.log(numObj); // Number {[[PrimitiveValue]]: NaN}
// '10' -> 10 
```
- new 연산자 미사용 + Number 생성자함수 호출하면 인스턴스가 아닌 숫자 반환(명시적 타입변환에 이용)
```
Number('0');     // -> 0
Number('-1');    // -> -1
Number(true);  // -> 1
```
</br>

---
# Number 프로퍼티
## Number.EPSILON
- ES6 1과 1보다 큰숫자중 가장 작은 숫자와의 차이 = 2.22...
- 부동소수점으로 발생하는 오차해결
```
function isEqual(a, b){
  // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
  return Math.abs(a - b) < Number.EPSILON;
}

isEqual(0.1 + 0.2, 0.3); // -> true
```
## Number.MAX_VALUE
- 자바스크립트에서 표현가능한 가장 큰 양수값
    - 이것보다 큰것이 무한 Infinity
## Number.MIN_VALUE
- 자바스크립트에서 표현가능한 가장 작은 양수값
    - 이것보다 작은것은 0
## Number.MAX_SAFE_INTEGER
- 자바스크립트에서 안전하게 표현가능한 가장 큰 정수값 = 9007199254740991
    - Number.MIN_SAFE_INTEGER = -9007199254740991
## Number.POSITIVE_INFINITY / Number.NEAGATIVE_INFINITY
- 양의무한대 / 음의무한대
## Number.NaN
- 숫자가 아닌값 , window.Nan 과 같음
---
</br>

# Number 메서드
## Number.isFinite
- 정적메서드, 인수가 유한수이면 true / (음으)무한대 or NaN 이면 false
    - 숫자로 암묵적 타입변환 안함, 숫자아니여도 false (빌트인전역함수 isFinite 는 숫자로 암묵적 타입변환 함)
## Number.inInterger
- 정적메서드, 인수가 정수면 true / 아니면 false (암묵적 타입변환 안함)
## Number.inNaN
- 정적메서드, 인수가 NaN true / NaN 아니거나 숫자가아니여도 false
    - 전역빌트인함수 inNaN 은 암묵적타입변환 함
## Number.isSafeInteger
- 정적메서드, 인수가 안전한 정수 true / 아니면 false(암묵적 타입변환 안함)
## Number.prototype.toExponential
- 숫자를 지수표기법으로 변환 후 문자열로 반환
    - 지수표기법은 매우 크거나 작은수를 표기할때 e앞의수에 10의n승 곱함
- 숫자리터럴과 Number프로토타임 메서드 같이쓰면 문법에러 발생
    - why? 보통 숫자뒤의 . 마침표는 소수 구분기호로 인식하는데, 숫자리터럴.메서드()를 하면 뒤의 메서드를 프로퍼티를 해석불가하므로 문법에러
    - 방지하려면 숫자리터럴을 그룹연산자()로 묶기(한칸공백으로도 가능)
```
// 지수표기법 예시
(77.1234).toExponential();  // -> "7.71234e+1"
(77.1234).toExponential(4); // -> "7.7123e+1"

// 숫자리터럴 77
77.toExponential(); // -> SyntaxError: Invalid or unexpected token
// good
(77).toExponential(); // -> "7.7e+1"
```
## Number.prototype.toFixed
- 숫자를 반올림 후 문자열로 반환
- 몇자리수까지 나타낼껀지 0~20사이 정수값을 인수로 전달가능(생략시 기본값 0)
## Number.prototype.toPrecision
- 인수로 받은 자리수까지 유효하도록 나머지자리수 반올림 후 문자열로 반환
    - 자리수 표현 불가능시? 지수표기법 반환
- 0~21 사이 가능(생략시 기본값 0)
```
// 전체 자리수 유효. 인수를 전달하지 않으면 기본값 0이 전달된다.
(12345.6789).toPrecision(); // -> "12345.6789"
// 전체 1자리수 유효, 나머지 반올림
(12345.6789).toPrecision(1); // -> "1e+4"

```