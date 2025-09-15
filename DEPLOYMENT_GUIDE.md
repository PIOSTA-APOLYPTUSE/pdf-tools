# 배포 및 AdSense 등록 가이드

## 1단계: Vercel에 배포하기

### 1-1. GitHub 레포지토리 생성
```bash
# Git 초기화 (아직 안했다면)
git init
git add .
git commit -m "Initial commit: PDF Tools MVP"

# GitHub에서 새 레포지토리 생성 후
git remote add origin https://github.com/당신의유저명/pdf-tools.git
git branch -M main
git push -u origin main
```

### 1-2. Vercel 배포
1. https://vercel.com 방문
2. GitHub 계정으로 로그인
3. "Add New Project" 클릭
4. GitHub 레포지토리 선택 (pdf-tools)
5. 환경변수 설정:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-project-name.vercel.app
   ```
6. "Deploy" 클릭

### 1-3. 커스텀 도메인 설정 (선택사항)
- Vercel 대시보드에서 도메인 구매 또는 연결
- 예: `pdftools.co.kr`, `pdf-editor.com` 등

---

## 2단계: Google Search Console 등록

### 2-1. Search Console 설정
1. https://search.google.com/search-console 방문
2. "속성 추가" 클릭
3. "URL 접두어" 선택
4. 배포된 사이트 URL 입력: `https://your-project.vercel.app`

### 2-2. 소유권 확인
1. "HTML 태그" 방법 선택
2. 메타 태그 코드 복사: `<meta name="google-site-verification" content="abc123..." />`
3. `.env.local` 파일 생성:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
   NEXT_PUBLIC_GOOGLE_VERIFICATION=abc123...
   ```
4. Vercel에서 환경변수 업데이트
5. "확인" 클릭

### 2-3. 사이트맵 제출
1. Search Console에서 "Sitemaps" 메뉴
2. `sitemap.xml` 입력 후 제출
3. `robots.txt`도 자동으로 인식됨

---

## 3단계: Google AdSense 신청

### 3-1. AdSense 계정 생성
1. https://www.google.com/adsense 방문
2. "시작하기" 클릭
3. 사이트 URL 입력: `https://your-project.vercel.app`
4. 국가 선택: 대한민국
5. 결제 정보 입력

### 3-2. AdSense 코드 추가
1. AdSense에서 "사이트에 연결" 메뉴
2. 자동 광고 코드 복사
3. 클라이언트 ID 확인: `ca-pub-1234567890123456`
4. `.env.local`에 추가:
   ```
   NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
   ```
5. Vercel 환경변수 업데이트

### 3-3. 심사 대기
- 보통 1-14일 소요
- 충분한 콘텐츠와 트래픽 필요
- 정책 준수 확인

---

## 4단계: SEO 최적화 (동시 진행)

### 4-1. 콘텐츠 추가
- [x] FAQ 섹션 (완료)
- [x] 사용법 가이드 (완료)
- [ ] 블로그 포스트 추가 고려

### 4-2. 검색 등록
- 네이버 웹마스터도구: https://searchadvisor.naver.com
- Bing 웹마스터: https://www.bing.com/webmasters

---

## 5단계: 트래픽 증대

### 5-1. 마케팅 전략
- SNS 홍보 (트위터, 페이스북, 카카오톡)
- 온라인 커뮤니티 공유 (클리앙, 디시인사이드 등)
- 지인들에게 공유

### 5-2. 콘텐츠 마케팅
- "PDF 합치는 방법" 블로그 포스트
- "무료 PDF 도구 비교" 콘텐츠
- 유튜브 사용법 영상

---

## 환경변수 최종 설정

`.env.local` 파일 예시:
```env
NEXT_PUBLIC_SITE_URL=https://pdf-tools-app.vercel.app
NEXT_PUBLIC_GOOGLE_VERIFICATION=abc123def456ghi789
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=ca-pub-1234567890123456
```

---

## 체크리스트

### 배포 전
- [ ] GitHub 레포지토리 생성
- [ ] 코드 커밋 및 푸시

### 배포 후
- [ ] Vercel 배포 완료
- [ ] 사이트 정상 작동 확인
- [ ] 환경변수 설정

### SEO 등록
- [ ] Google Search Console 등록
- [ ] 소유권 확인 완료
- [ ] 사이트맵 제출
- [ ] 네이버 웹마스터 등록

### AdSense
- [ ] AdSense 계정 생성
- [ ] 사이트 추가
- [ ] 광고 코드 설치
- [ ] 심사 신청

### 마케팅
- [ ] SNS 계정 생성
- [ ] 초기 트래픽 확보
- [ ] 콘텐츠 업데이트