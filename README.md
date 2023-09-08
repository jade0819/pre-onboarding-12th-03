# 원티드 프리온보딩 프론트엔드 인턴십 3주차 개인 과제

<br>

## 프로젝트 소개

💡 목표<br>
[한국임상정보](https://clinicaltrialskorea.com/) 사이트 검색창의 `추천 검색 리스트` 클론 코딩

<br>
<br>

## ✔️ 배포

`aws` [🔗Link](http://preonboarding-frontend-12th-03.s3-website.ap-northeast-2.amazonaws.com/)

<br/>
<br/>

## 🛫 시작 가이드

- 실행을 위해 다음 Node version이 필요합니다.
  [Node.js 18.17.0](https://nodejs.org/ca/blog/release/v18.17.0/)

```
git clone https://github.com/jade0819/pre-onboarding-12th-03.git
cd pre-onboarding-12th-03
npm install
npm run start
```

<br/>
<br/>

## 🚀 요구사항

검색창에 질환명 검색 시 API 호출을 통한 `추천 검색어` 표시 기능을 구현

- [x] API 호출별 **로컬 캐싱** 기능 구현
- [x] API **호출 횟수** 줄이는 전략 적용
- [x] API를 호출할 때 마다 **console.log("calling api")** 출력
- [x] **키보드 접근성** 기능
- [x] **expire time** 구현

<br/>
<br/>

## 📈 Best Practice

### 1. 로컬 캐싱 기능 기술

- **로컬 스토리지(Local storage)를 사용하여 로컬 캐싱 기능을 구현했습니다.**<br>
  사용자가 검색어를 입력하면 로컬 스토리지에 해당 검색어의 캐시 데이터가 있는지 체크합니다. 캐시 데이터가 없다면 API 호출을 통해 추천 검색어 리스트를 가져오고, 캐시 데이터가 있다면 만료 시간(Expire time)을 현재 시간과 비교합니다. 만료 되었다면 API 호출을 하고 만료되지 않았다면 캐시 데이터 사용합니다.

- 로컬 스토리지를 사용한 이유

  > 1. 대부분의 웹 브라우저에서 지원함
  > 2. 간단하고 빠르게 구현 가능<br>
  >    key-value 형태로 데이터를 데이터를 저장하기 때문에
  > 3. 데이터 영속성 및 오프라인 환경에서 사용 가능 <br>
  >    새로고침 시에도 데이터가 유지되며, 애플리케이션이 오프라인 상태일 때에도 사용 가능

### 2. API 호출 횟수를 줄이는 전략 기술

- **`Debounce` 개념을 도입했으며, `검색어 검사`를 통해 API 호출 횟수를 줄였습니다.**<br>
  검색창에 사용자 입력이 들어올 때 타이머를 시작해서 타이머가 만료되면 API 호출을 하는 로직을 구현했습니다. 검색어를 처음 입력할 때 타이머가 작동해 **400ms** 시간이 지나면 입력된 검색어에 대한 추천 검색어 리스트 API를 호출합니다.
  또 API 호출 직전 검색어에 대한 **정규식 검사**를 통해 잘못된 검색어에 대한 API 호출을 제한했습니다.

- Debounce 개념을 도입한 이유

  > 1. 연속적으로 발생하는 이벤트 처리에 적합
  > 2. 사용자 입력 처리에 많이 사용

- 검색어 검사 기능을 추가한 이유
  > '암' 이라는 질병명을 입력하면 서버에서 추천 검색어 데이터를 받을 수 있지만, 'ㅏ암' 혹은 '암ㅁ' 이라고 자음 또는 모음으로만 구성된 문자가 검색어에 포함되어있을 때는 추천 검색어 데이터 값이 없기 이를 제한함으로써 API 호출 횟수를 줄임

### 3. 키보드 접근성

- ** KeyDownEvent를 사용해서 키보드 접근성을 구현했습니다. **<br>
  `Up`, `Down` 키를 입력하면 추천 검색어 리스트로 이동이 가능하게 구현했습니다.<br>
  `Enter` 키를 입력하면 해당 추천 검색어를 검색창에 자동 입력되도록 구현했습니다.<br>
  `Esc` 추천 검색어 리스트창 닫을 수 있도록 구현했습니다.

<br/>
<br/>

## 🛠️ 사용한 기술 스택

#### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Git hub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Source Tree](https://img.shields.io/badge/SOURCE%20TREE-blue?style=for-the-badge&logo=sourcetree)

#### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

#### Development

![HTML5](https://img.shields.io/badge/HTML-%23F5AF64?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS-%230A82FF?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)

<img src="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=000"/>
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

#### Styling

<img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
