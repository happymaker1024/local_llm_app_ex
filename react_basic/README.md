# React Basic 학습 환경 설정

이 프로젝트는 React 기본 문법과 컴포넌트 기반 프론트엔드 개발을 학습하기 위한 실습 프로젝트이다.

주요 학습 범위는 다음과 같다.

* JSX 문법
* 컴포넌트 분리
* props 전달
* `useState` 상태 관리
* 이벤트 처리
* 조건부 렌더링
* 목록 렌더링
* `useEffect`
* Axios 기반 API 호출
* FastAPI 백엔드 연동
* Ollama Chat UI 구현

---

## 1. 개발 환경

| 항목            | 내용                       |
| ------------- | ------------------------ |
| OS            | Windows 11 + WSL2 Ubuntu |
| Runtime       | Node.js                  |
| Node 관리 도구 | nvm                      |
| Frontend Tool | Vite                     |
| Library       | React                    |
| HTTP Client   | Axios                    |
| Editor        | Visual Studio Code       |

---

## 2. Node.js 설치 확인

React 프로젝트를 실행하려면 Node.js와 npm이 필요하다.

```bash
node -v
npm -v
```

WSL Ubuntu 환경에서는 Linux용 Node.js가 사용되는지 확인한다.

```bash
which node
which npm
node -p "process.platform"
```

정상 예시는 다음과 같다.

```bash
/home/aiuser/.nvm/versions/node/v22.x.x/bin/node
/home/aiuser/.nvm/versions/node/v22.x.x/bin/npm
linux
```

`process.platform` 결과가 `linux`이면 WSL Ubuntu용 Node.js가 정상적으로 사용 중인 상태이다.

---

## 3. nvm 설치 및 Node.js 설치

nvm을 설치한다.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
```

현재 터미널에 nvm을 적용한다.

```bash
source ~/.bashrc
```

nvm 설치 여부를 확인한다.

```bash
nvm --version
```

Node.js LTS 버전을 설치한다.

```bash
nvm install --lts
nvm use --lts
```

설치 결과를 확인한다.

```bash
node -v
npm -v
```

---

## 4. React 프로젝트 생성

Vite를 사용해 React 프로젝트를 생성한다.

```bash
npm create vite@latest react_basic
```

프롬프트가 나오면 다음처럼 선택한다.

```text
Framework: React
Variant: JavaScript
```

프로젝트 폴더로 이동한다.

```bash
cd react_basic
```

패키지를 설치한다.

```bash
npm install
```

개발 서버를 실행한다.

```bash
npm run dev
```

브라우저에서 다음 주소로 접속한다.

```text
http://localhost:5173
```

---

## 5. 기존 프로젝트 실행 방법

이미 프로젝트가 생성되어 있다면 다음 순서로 실행한다.

```bash
cd react_basic
npm install
npm run dev
```

---

## 6. Axios 설치

백엔드 API를 호출하기 위해 Axios를 설치한다.

```bash
npm install axios
```

설치 여부를 확인한다.

```bash
npm list axios
```

---

## 7. 권장 폴더 구조

React 기본 학습용 프로젝트는 다음 구조를 권장한다.

```text
react_basic/
├─ package.json
├─ index.html
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ App.css
   └─ components/
      ├─ Header.jsx
      ├─ Greeting.jsx
      ├─ Counter.jsx
      ├─ InputState.jsx
      ├─ ListRendering.jsx
      ├─ ConditionalRendering.jsx
      ├─ UseEffectRender.jsx
      └─ OllamaChat.jsx
```

컴포넌트는 `src/components/` 폴더에 분리해서 작성한다.

---

## 8. 컴포넌트 작성 예시

### `src/components/Header.jsx`

```jsx
function Header() {
  return (
    <header>
      <h1>React Basic</h1>
    </header>
  );
}

export default Header;
```

### `src/App.jsx`

```jsx
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
```

---

## 9. React 컴포넌트 기본 구조

일반 함수형 컴포넌트는 다음과 같이 작성한다.

```jsx
function ComponentName() {
  return (
    <div>
      ComponentName
    </div>
  );
}

export default ComponentName;
```

화살표 함수형 컴포넌트는 다음과 같이 작성한다.

```jsx
const ComponentName = () => {
  return (
    <div>
      ComponentName
    </div>
  );
};

export default ComponentName;
```

---

## 10. VS Code 추천 확장 프로그램

| 확장 프로그램                                | 용도                        |
| -------------------------------------- | ------------------------- |
| ES7+ React/Redux/React-Native snippets | React 컴포넌트 기본 구조 자동 생성    |
| Auto Close Tag                         | JSX 태그 자동 닫기              |
| Auto Rename Tag                        | JSX 여는 태그와 닫는 태그 동시 수정    |
| Prettier - Code formatter              | 코드 자동 정리                  |
| ESLint                                 | JavaScript/React 코드 오류 확인 |

---

## 11. React Snippet 단축어

`ES7+ React/Redux/React-Native snippets` 확장 프로그램을 설치하면 다음 단축어를 사용할 수 있다.

| 단축어         | 설명                |
| ----------- | ----------------- |
| `rfce`      | 일반 함수형 컴포넌트 생성    |
| `rafce`     | 화살표 함수형 컴포넌트 생성   |
| `useState`  | 상태 관리 Hook 작성     |
| `useEffect` | 렌더링 이후 실행 Hook 작성 |

예를 들어 `Header.jsx` 파일에서 다음을 입력한다.

```text
rfce
```

그러면 함수형 컴포넌트 기본 구조가 자동 생성된다.

---

## 12. VS Code Emmet 설정

JSX 자동완성을 더 편하게 사용하려면 VS Code 설정을 수정한다.

`Ctrl + Shift + P`를 누른 뒤 다음 메뉴를 선택한다.

```text
Preferences: Open User Settings (JSON)
```

아래 내용을 추가한다.

```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "emmet.triggerExpansionOnTab": true,
  "editor.linkedEditing": true
}
```

---

## 13. 주요 학습 항목

| 학습 항목                 | 설명                                   |
| --------------------- | ------------------------------------ |
| JSX                   | JavaScript 안에서 HTML과 유사한 문법을 작성하는 방식 |
| Component             | 화면을 구성하는 독립적인 UI 단위                  |
| Props                 | 부모 컴포넌트에서 자식 컴포넌트로 전달하는 값            |
| State                 | 컴포넌트 내부에서 변경되는 데이터                   |
| Event Handling        | 버튼 클릭, 입력 변경 등 사용자 이벤트 처리            |
| Conditional Rendering | 조건에 따라 다른 화면을 출력하는 방식                |
| List Rendering        | 배열 데이터를 `map()`으로 반복 출력하는 방식         |
| useEffect             | 컴포넌트 렌더링 이후 특정 작업을 실행하는 Hook         |
| Axios                 | HTTP API 요청을 처리하는 라이브러리              |

---
## 14. 자주 쓰는 기본 Hook
Hook은 함수형 컴포넌트 안에서 상태 관리, 화면 갱신 후 작업, DOM 참조 같은 React 기능을 사용할 수 있게 해주는 도구다.

| Hook         | 용도                   | 사용 상황                             |
| ------------ | -------------------- | --------------------------------- |
| `useState`   | 상태 관리                | 입력값, 버튼 클릭 상태, 응답 데이터 저장          |
| `useEffect`  | 렌더링 이후 작업 실행         | API 호출, 타이머, 외부 시스템 연동            |
| `useRef`     | DOM 또는 렌더링과 무관한 값 참조 | input 포커스, 이전 값 저장, 타이머 ID 저장     |
| `useContext` | 전역에 가까운 값 공유         | 로그인 정보, 테마, 언어 설정                 |
| `useReducer` | 복잡한 상태 관리            | 여러 상태가 함께 바뀌는 form, todo, chat 상태 |


## 15. Axios GET 요청 예시

```jsx
import { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:8000/models";

function UseEffectRender() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get(URL);
        setModels(response.data.models || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchModels();
  }, []);

  return (
    <main>
      <h1>모델 목록</h1>

      {models.map((model) => (
        <p key={model}>{model}</p>
      ))}
    </main>
  );
}

export default UseEffectRender;
```

---

## 16. Axios POST 요청 예시

```jsx
const response = await axios.post("http://localhost:8000/chat", {
  message: message,
  model: "llama3.2:3b",
  system_prompt: "너는 초보자를 돕는 AI 강사다.",
  temperature: 0.7,
  top_p: 0.9,
  num_predict: 256,
});

const data = response.data;
```

---

## 17. 자주 발생하는 오류

### Axios import 오류

오류 예시:

```text
Failed to resolve import "axios"
```

해결 방법:

```bash
npm install axios
npm run dev
```

설치 후에도 오류가 남아 있으면 개발 서버를 재시작한다.

```bash
Ctrl + C
npm run dev
```

---

### node_modules 문제

패키지 설치가 꼬인 경우 다음 명령으로 초기화한다.

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

### WSL에서 Windows Node.js가 잡히는 문제

다음 명령으로 확인한다.

```bash
which node
which npm
node -p "process.platform"
```

정상 결과는 다음과 같다.

```text
linux
```

만약 `win32`가 나오면 Windows Node.js가 실행 중인 상태이다.
이 경우 nvm Node.js를 다시 적용한다.

```bash
source ~/.bashrc
nvm use --lts
hash -r
```

---

## 18. Git 기본 설정

Git 저장소를 초기화한다.

```bash
git init
```

변경 파일을 스테이징한다.

```bash
git add .
```

커밋한다.

```bash
git commit -m "init react basic project"
```

현재 상태를 확인한다.

```bash
git status
```

마지막 커밋을 취소하되 코드 변경은 유지하려면 다음 명령을 사용한다.

```bash
git reset HEAD~1
```

---

## 19. `.gitignore` 기본 예시

React 프로젝트에서는 다음 항목을 Git에 올리지 않는다.

```gitignore
node_modules
dist
.env
.env.local
.DS_Store
```

`node_modules`는 용량이 크고, `package.json`과 `package-lock.json`만 있으면 다시 설치할 수 있으므로 Git에 포함하지 않는다.

---

## 20. 실행 명령 요약

```bash
cd react_basic
npm install
npm run dev
```

브라우저 접속 주소:

```text
http://localhost:5173
```
## 21. React 학습 필수 개념 정리
React를 학습할 때 꼭 알아야 하는 것은 크게 문법, 컴포넌트 구조, 상태 관리, 화면 렌더링 패턴, API 연동으로 나눌 수 있다.
| 구분 | 꼭 알아야 하는 것      | 설명                                                     |
| -- | --------------------- | ------------------------------------------------------ |
| 1  | JSX                   | JavaScript 안에서 HTML과 비슷한 문법으로 화면을 작성하는 방식이다.     |
| 2  | Component             | 화면을 작은 UI 단위로 나누어 재사용하는 구조이다.                      |
| 3  | Props                 | 부모 컴포넌트가 자식 컴포넌트에 값을 전달하는 방식이다.                 |
| 4  | State                 | 컴포넌트 안에서 변하는 데이터를 관리하는 개념이다.                     |
| 5  | Event Handling        | 버튼 클릭, 입력 변경 등 사용자 동작을 처리하는 방식이다.                 |
| 6  | Conditional Rendering | 조건에 따라 다른 화면을 보여주는 방식이다.                               |
| 7  | List Rendering        | 배열 데이터를 `map()`으로 반복 출력하는 방식이다.                        |
| 8  | Form 처리               | `input`, `textarea`, `select`의 값을 React 상태와 연결하는 방식이다. |
| 9  | useEffect             | 컴포넌트가 렌더링된 뒤 API 호출 같은 작업을 실행하는 Hook이다.            |
| 10 | API 연동                | Axios 또는 fetch로 백엔드 서버와 데이터를 주고받는 방식이다.             |

