# 정규표현식
- 일정한 패턴가진 문자열집합 표현하는 형식언어
- 문자열대상 **패턴 매칭기능**
    - 패턴과 일치하는 문자열 검색,추출,치환

## 정규표현식 생성
- 정규표현식 리터럴
    - /패턴/i(플래그) 형식
- RegExp 생성자함수 사용
```
const target = 'Is there is?';
const regexp = /is/i;
regexp.test(target); // true

const regexp2 = new RegExp(/is/i);
regexp2.test(target); // true
```
## RegExp 메서드
- RegExp.prototype.exec
    - 문자열에대해 패턴검색하여 결과를 배열로 반환/ 없으면 null
    - 모든패턴 검색하는 g 플래그 지정해도 ? 첫번째 매칭결과만 반환 
- RegExp.prototype.match
    - 문자열에대해 패턴검색하여 결과를 배열로 반환
    - g 플래그 지정하면 매칭결과 전부 반환
- RegExp.prototype.test
    - 문자열 패턴검색 -> 불리언값 반환

## 플래그
- 정규표현식의 검색방식 설정, 총6개/ 여기선 3개
- 플래그는 옵션이므로 선택적 사용 가능
    - 기본값은 대소문자 구분해서 검색 1개이상 존재해도 첫번째 매칭값 찾으면 종료
<table>
  <thead>
    <tr>
      <th style="text-align: center">플래그</th>
      <th style="text-align: left">의미</th>
      <th style="text-align: left">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align: center">i</td>
      <td style="text-align: left">Ignore case</td>
      <td style="text-align: left">대소문자를 구별하지 않고 패턴 검색</td>
    </tr>
    <tr>
      <td style="text-align: center">g</td>
      <td style="text-align: left">Global</td>
      <td style="text-align: left">대상 문자열 내에서 패턴과 일치하는 모든 문자열 전역 검색</td>
    </tr>
    <tr>
      <td style="text-align: center">m</td>
      <td style="text-align: left">Multi line</td>
      <td style="text-align: left">문자열의 행이 바뀌더라도 패턴 계속 검색
      </td>
    </tr>
  </tbody>
</table>

## 패턴
- / 로 열고닫으며 문자열의 따옴표 생략/ 따옴표쓰면 따옴표까지 포함해서 검색
- 특별한의미를 가지는 메타문자 meta character , 기호 로 표현가능
- 패턴과 일치하는 문자열이 존재 ? **정규표현식과 매치한다**
---
- 문자열검색
    - 패턴과 플래그로 검색
- 임의 문자열검색
    - . 마침표 는 임의의 문자1개 의미
    - ... => 3자리문자열과 매치
- 반복검색
    - {m,n} 은 패턴이 최소 m번 최대n번 반복되는 문자열 찾기(공백쓰지않게주의)
    - {n} 은 n이 무작위로 반복되는 문자열찾기
    - ' + '플러스는 앞선패턴이 한번이상 반복되는 문자열
    - ' ? '물음표는 앞선패턴이 0번이상 반복되는 문자열
- OR 검색
    - 아|에 -> 아 or 에
    - 패턴을 묶으려면 [] , 패턴내의 범위지정은 [a-b]
    - /d = 숫자  /D = 숫자아닌문자
    - /w = 알파벳,숫자,언더스코어  /W = 반대
- NOT 검색
    - [...] 내의 ^ 은 not 의미
- 시작위치로 검색
    - [...] 밖의 ^ 은 문자열의 시작의미
    - /^start/
- 마지막위치로 검색
    - $ 는 문자열의 마지막
    - /end$/
---