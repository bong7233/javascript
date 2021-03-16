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
