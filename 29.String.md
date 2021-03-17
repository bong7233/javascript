# String
- 원시타입 문자열을 다룰때 유용한 프로퍼티,메서드 포함

## String 생성자함수
- new 연산자와 함께 호출하여 String 인스턴스 생성
- 인수없이 + new = [[StringData]] 내부슬롯에 빈 문자열을 할당한 Stirng 래퍼객체 생성
```
const strObj = new String();
console.log(strObj); // String {length: 0, [[PrimitiveValue]]: ""}
```
- 문자열 아닌값은 문자열 강제변환 후 [[StringData]]내부슬롯에 할당한 후 래퍼객체 생성
- new연산자없이 String 생성자함수 호출 = String인스턴스 생성하지않고 문자열 반환(명시적 타입변환 방법)  

## length 프로퍼티
- 문자열의 갯수 반환
    - 'holly'.length; = 5
- String 래퍼객체는 유사배열객체다(Iterable)
    - 인덱스=프로퍼티 키, 각문자=프로퍼티값 으로 가지고있음

## String 메서드
- accessor method 만 있음 (원본배열 변경하지 않음)
    - 문자열은 immutable 원시값, So String 래퍼객체도 읽기전용
- String.prototype.indexOf
    - 문자열 검색하여 첫번쨰 인덱스값 반환/ 없으면 -1 반환
    - 두번째 인수로 인덱스 시작지점 설정
- String.prototype.search
    - 정규표현식을 인수로받아 검색하여 일치하는 인덱스 반환/ 없으면 -1 반환
- String.prototype.includes ES6
    - 문자열이 포함되어있으면 true/ 없으면 false
    - 두번째 인수로 인덱스 시작지점 설정
- String.prototype.startsWith ES6
    - 문자열이 인수로 시작하는지 true/false
    - 두번째 인수로 인덱스 시작지점 설정
- String.prototype.endsWith ES6
    - 문자열이 인수로 끝나는지 true/false
    - 두번째 인수로 문자열의 길이 전달가능
        - str.endsWith('lo', 5); => 문자열의 처음부터 5자리까지가 lo로 끝나는지?
- String.prototype.charAt
    - 인수로 전달받은 인덱스에 위치한 문자 반환
    - 범위를 벗어나면 빈문자열 반환
- String.prototype.substring
    - 첫번째 인수의 인덱스위치이상 두번쨰인수의 인덱스위치 미만의 문자열 반환
    - 두번째 인수를 생략하면 문자열끝까지 반환
    - 만약 첫번쨰가 두번쨰보다 크다? 그럼 알아서 바꿔서 적용
    - 인수가 0보다작거나 NaN인경우 0으로 취급
    - 인수가 문자열의 길이보다길면 문자열의 길이로 취급
- String.prototype.slice
    - substring과 동일, 음수인 인수 전달가능(뒤에서부터시작)
- String.prototype.toUpperCase /toLowerCase
    - 문자열 대문자/ 소문자로 변경
- String.prototype.trim
    - 문자열 앞뒤의 공백문자 제거
- String.prototype.repeat ES6
    - 인수로받은 정수만큼 문자열을 반복해 연결시켜 반환 / 0이면 빈문자열
        - 음수면 RangeError 발생, 기본값은 0
- String.prototype.replace
    - 첫번째인수로받은 문자열,정규표현식을 검색해 두번쨰인수로 치환 후 반환
    - 여러개가 검색되면 첫번째 문자열만 치환
    - 특수한 교체패턴 사용가능([MDN함수설명](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace))
- String.prototype.split
    - 첫번째 인수로 전달한 문자열,정규표현식을 기준으로 문자열을 나눠서 반환
    - 빈문자열 전달시 각문자를 모두분리, 생략시 문자열전체를 단일요소로 가진 배열반환
    - 두번째 인수로 배열길이 지정가능
    - split 메서드는 배열 을 반환하므로 배열메서드 join,reverse사용가능
