# Date
- 날짜와시간을 다루는 메서드 제공
- 빌트인 객체이며 생성자함수
- UTC 국제 표준시 = GMT
    - UTC +9 = KST 한국시

## Date 생성자 함수
- Date 생성자함수로 생성한 Date객체는 날짜와 시간을 나타내는 정수값을 가짐
## 객체 생성방법 4가지
### new Date()
- new 연산자와 함께 호출 -> 현재 날짜와 시간 가지는 객체 반환
    - 내부적으로는 정수값 갖지만, 콘솔에 출력하면 날짜와 시간정보 출력
- new 연산자 없이 호출 -> 객체대신 날짜 시간정보를 문자열로 반환
### new Date(milliseconds)
- 1970년 1월1일 기준으에서 입력한 밀리초만큼 경과한 시간과 날짜를 나타내는 객체 반환
    - 1초는 1000밀리초
    - 이걸 쓸일이있을까 ..?
### new Date(dateString)
- 생성자함수에 날짜와 시간 문자열 전달 -> 해당 날짜시간 Date 객체 반환
    - 이때 인수는 Date.parse 메서드가 해석가능 해야함
```
new Date('2020/03/26/10:00:00');
// -> Thu Mar 26 2020 10:00:00 GMT+0900 (대한민국 표준시)
```
### new Date(year, month[,day,hour,minute,second,millisecond])
- 연 월 일 시 분 초 밀리초 인수전달 -> 해당 자료나타내는 Date 객체반환
    - year month = must // 이것도 생략? 1970/1/1 반환
    - 나머지생략가능, 초기값 0 or 1
<table>
  <thead>
    <tr>
      <th style="text-align: left">인수</th>
      <th style="text-align: left">내용</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: left">year</td>
      <td style="text-align: left">연을 나타내는 1900년 이후의 정수. 0부터 99는 1900부터 1999로 처리된다.</td>
    </tr>
    <tr>
      <td style="text-align: left">month</td>
      <td style="text-align: left">월을 나타내는 <b style="color:red">0 ~ 11</b>까지의 정수 (주의: 0부터 시작, 0 = 1월)</td>
    </tr>
    <tr>
      <td style="text-align: left">day</td>
      <td style="text-align: left">일을 나타내는 1 ~ 31까지의 정수</td>
    </tr>
    <tr>
      <td style="text-align: left">hour</td>
      <td style="text-align: left">시를 나타내는 0 ~ 23까지의 정수</td>
    </tr>
    <tr>
      <td style="text-align: left">minute</td>
      <td style="text-align: left">분을 나타내는 0 ~ 59까지의 정수</td>
    </tr>
    <tr>
      <td style="text-align: left">second</td>
      <td style="text-align: left">초를 나타내는 0 ~ 59까지의 정수</td>
    </tr>
    <tr>
      <td style="text-align: left">millisecond</td>
      <td style="text-align: left">밀리초를 나타내는 0 ~ 999까지의 정수</td>
    </tr>
  </tbody>
</table>
---
</br>

## Date 메서드
### Date.now
- 1970/1/1 기준 현재까지 경과시간을 밀리초 반환
### Date.parse
- 1970/1/1 기준 인수로 전달된 지정시간까지의 밀리초 반환
    - 이때 지정시간은 new Date(dateString) 인수와 동일한 형식이여야함
### Date.UTC
- 1970/1/1 기준 인수로 전달된 지정시간까지의
    - 이때 인수는 그냥 숫자로 가능 // 1980.0.2 ...
