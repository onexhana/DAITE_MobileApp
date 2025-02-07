# DAITE 💖  
**DAITE**는 연인들을 위한 **맞춤형 데이트 코스 추천 앱**입니다. 간단한 정보를 입력하면 **AI가 최적의 데이트 코스**를 자동으로 추천해주어, 데이트 계획에 드는 고민과 시간을 줄여줍니다.

---

## 🔍 프로젝트 개요

- **목표**: 연인들이 원하는 분위기와 장소에 맞는 **데이트 코스**를 손쉽게 추천
- **주요 기능**:
  - 원하는 **장소**, **분위기**, **시간**을 입력하면 AI가 맞춤 코스를 추천
  - **간편한 UI**로 직관적인 입력 및 결과 확인
  - **이색 데이트**부터 **로맨틱 코스**까지 다양한 추천 제공
- **기대 효과**:
  - **데이트 고민 해소**: 빠르고 쉽게 데이트 코스 결정
  - **시간 절약**: AI 기반 자동 추천으로 계획 시간 단축

---

## 🛠️ 사용된 기술 스택

- **프론트엔드**: React Native
- **API**: OpenAI API를 활용한 자연어 처리 기반 추천 시스템
- **상태 관리**: React Hooks (`useState`)
- **스타일링**: `TouchableOpacity`로 모바일 최적화된 UI 구현
- **시각화**: 사용자 입력에 따른 동적 추천 결과 출력

---

## ⚙️ 주요 기능

1. **사용자 입력 기반 맞춤 추천**  
   사용자는 **데이트 상대**, **원하는 분위기**, **만나는 시간** 등 기본 정보를 입력합니다.

<img width="244" alt="image" src="https://github.com/user-attachments/assets/966c7090-a726-4078-8026-237c6e041579" />

2. **AI 기반 데이트 코스 추천**  
   입력된 정보를 바탕으로 OpenAI API를 활용하여 **최적의 데이트 코스**를 추천합니다.

<img width="290" alt="image" src="https://github.com/user-attachments/assets/7d908abb-a289-433b-8789-47f94ddda022" />

3. **사용자 경험을 고려한 UI/UX**  
   `TouchableOpacity`를 활용한 **모바일 친화적인 버튼 디자인**과 **반응형 레이아웃** 적용

---

## 🧑‍💻 코드 설명

1. **OpenAI API 활용**  
   사용자가 입력한 정보를 기반으로 AI가 자연어 처리로 데이트 코스를 추천합니다.

   ```javascript
   const generateDate = () => {
     const prompt = `당신은 매우 훌륭한 데이트 코스 추천 전문가입니다. 아래 조건에 따라 최적의 데이트 코스를 추천해주세요.
     - 데이트 상대: ${subject}
     - 원하는 분위기: ${style}
     - 만나는 시간: ${meet}
     - 헤어지는 시간: ${bye}
     - 만나는 장소: ${meetplace}
     - 이동 수단: ${move}`;
     
     chat(prompt, (apiResult) => {
       setResult(apiResult);
     });
   };
   ```

2. **입력 필드 및 버튼 디자인**  
   직관적인 입력 필드와 버튼으로 **사용자 편의성**을 강화했습니다.

   ```javascript
   <TextInput style={{ borderColor: 'red', borderWidth: 2 }} onChangeText={text => setSubject(text)} value={subject} placeholder="데이트 상대" />
   <TouchableOpacity style={{ backgroundColor: 'hotpink', padding: 15 }} onPress={generateDate}>
     <Text style={{ color: 'white' }}>데이트 코스 추천</Text>
   </TouchableOpacity>
   ```

---

## 📊 결과 및 활용 예시

- **예시 입력**:
  - **데이트 상대**: 강남역
  - **원하는 분위기**: 로맨틱
  - **만나는 시간**: 오후 2시
  - **헤어지는 시간**: 오후 10시
  - **이동 수단**: 버스

- **추천 결과**:
  ```
  결과: 오후 2시에 강남역에서 만나는 로맨틱한 데이트 코스를 추천해드립니다!
  1. '카페 노티드'에서 디저트와 커피를 즐기며 시작
  2. '한강 공원'으로 이동해 산책과 대화
  3. 저녁엔 '강남 마이시티'에서 스테이크와 와인
  4. 마지막으로 '강남 CGV'에서 영화 감상
  ```

---

## 🚀 실행 방법

1. **필수 라이브러리 설치**:
   ```bash
   npm install react-native openai
   ```

2. **프로젝트 실행**:
   ```bash
   npm start
   ```

3. **결과 확인**:
   - 앱 실행 후 간단한 정보를 입력하면 AI가 데이트 코스를 추천해줍니다.


---
![슬라이드1](https://github.com/user-attachments/assets/2edceb9f-ed79-49ce-8382-8aa1e7cc5c98)
![슬라이드2](https://github.com/user-attachments/assets/4b78cd2c-59a4-4857-b4a1-e24626a469d4)
![슬라이드3](https://github.com/user-attachments/assets/a15304a0-a748-4828-9d75-817436433d82)
![슬라이드4](https://github.com/user-attachments/assets/3b0b92df-5cd3-48f3-b152-6fe7de6d51c1)
![슬라이드5](https://github.com/user-attachments/assets/e437f3d6-7d33-44bf-99a7-f1c0ef8219bb)
![슬라이드6](https://github.com/user-attachments/assets/769b120a-306c-4ba3-be76-ba1f63e2f20c)
![슬라이드7](https://github.com/user-attachments/assets/d947c703-5538-4e4d-960d-6cfe896ba96d)
![슬라이드8](https://github.com/user-attachments/assets/de27b4e5-5d06-4acb-bbc2-8308ba7f1201)
![슬라이드9](https://github.com/user-attachments/assets/a9feb7e4-5502-44b4-9189-6071522e585a)
![슬라이드10](https://github.com/user-attachments/assets/27d5e815-499f-4fdc-abf1-d9f95146f02d)
![슬라이드11](https://github.com/user-attachments/assets/953597b9-f4b9-4736-8599-903dbb86432f)
