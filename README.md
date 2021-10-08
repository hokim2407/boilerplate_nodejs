# Node.js Boilter-Plate 
Node.js를 간편하게 시작할 수 있는 BoilterPlate 프로젝트입니다.

# 실행 방법
1. 현재 저장소 클론
```
git clone https://github.com/hokim2407/boilerplate_nodejs.git
```

2. `.env.sample`을 참고해 `.env` 파일 만들기

3. 패키지 설치
```
npm install
```

3. 실행
```
npm start
```

# 기능
-`npm start` 실행시 **nodemon**으로 실행됩니다.

## 1. mysql DB
- **mysql** 데이터베이스가 연동되어 있습니다.
- `.env` 파일 안에 `DATABASE`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_DIALECT` 를 채웁니다.
- `/model` 폴더 안에 모델을 작성합니다.(User 모델이 예시로 작성되어 있습니다.)
- 서버를 시작하면 데이터베이스에 모델이 자동으로 생성됩니다.

## 2. swagger
- **swagger** 문서가 연동되어 있습니다.
- `/api-docs`로 접속하면 확인할 수 있습니다.
- `/swagger` 안에 필요한 정보를 작성합니다. (User API가 예시로 작성되어 있습니다.)

## 3. winston
- 로그를 작성하는 **winston**이 연동되어 있습니다.
- `.env` 파일 안에 `NODE_ENV`를 development로 두면 파일이 아니라 콘솔에 로그가 나타납니다.
- `/logs`에 로그가 저장됩니다.

## 4. mocha
- API를 테스트하는 **mocha**가 연동되어 있습니다.
- `/test` 밑에 예시 파일이 있습니다.
- `npm run mochaClient`를 통해 테스트를 실행시킬 수 있습니다.

## 5. ejs
- 뷰 엔진으로 **ejs**가 사용되었습니다.
- `/view` 폴더 밑에서 레이아웃과 `/` 페이지에서 나타나는 메인 페이지를 확인 할 수 있습니다.
