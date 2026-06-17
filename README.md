# local_llm_app_ex
### **가상환경 생성 및 사용**

```bash
# 홈 디렉토리로 이동
cd ~

# 프로젝트 디렉토리 생성
mkdir local_llm_app
cd local_llm_app

# uv 버전 확인
uv --version

# 가상환경 생성
uv venv .venv --python 3.12 --prompt local_llm

# 가상환경 활성화
source .venv/bin/activate
```

**활성화 확인:**

- 프롬프트 앞에 `(local_llm)` 표시됨

```bash
(local_llm) aiuser@hostname:~/local_llm_app$
```

---

### **가상환경 내에서 패키지 설치**

```bash
# uv pip install 패키지명
uv pip install langchain ollama fastapi
```

**파일로 설치하기:**

```bash
uv pip install -r requirements.txt
```

**가상환경 비활성화:**

```bash
deactivate
```

→ `(local_llm)` 표시 사라짐

---

### **💡 실습 체크리스트**

학습자들이 다음을 직접 해보도록 지도:

```bash
# 1. 홈 디렉토리 확인
cd ~
pwd

# 2. 프로젝트 디렉토리 생성
mkdir -p llm_test/data
cd llm_test

# 3. 파일 생성 및 확인
echo "Hello Linux" > test.txt
cat test.txt
ls -l

# 4. 가상환경 활성화
source .venv/bin/activate
uv pip list
deactivate
```

---