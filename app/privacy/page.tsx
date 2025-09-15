import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">PDF Tools</h1>
                <p className="text-sm text-gray-600">개인정보 처리방침</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">개인정보 처리방침</CardTitle>
            <p className="text-gray-600">최종 업데이트: 2025년 1월 16일</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. 개인정보 수집 및 이용 목적</h2>
                <p className="text-gray-700 leading-relaxed">
                  PDF Tools는 사용자의 개인정보를 소중히 여기며, 개인정보보호법을 준수합니다.
                  본 서비스는 PDF 파일 처리 도구를 제공하는 웹사이트로서, 다음과 같은 목적으로 개인정보를 처리합니다:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>서비스 이용 통계 분석</li>
                  <li>서비스 개선 및 최적화</li>
                  <li>광고 서비스 제공 (Google AdSense)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. 수집하는 개인정보의 항목</h2>
                <h3 className="text-lg font-medium mb-2">자동으로 수집되는 정보:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP 주소</li>
                  <li>브라우저 종류 및 버전</li>
                  <li>운영체제 정보</li>
                  <li>방문 페이지 및 이용 시간</li>
                  <li>쿠키 및 세션 정보</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. PDF 파일 처리 관련 개인정보 보호</h2>
                <p className="text-gray-700 leading-relaxed">
                  PDF Tools는 클라이언트 측(브라우저)에서 PDF 파일을 처리합니다:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>업로드된 PDF 파일은 서버로 전송되지 않습니다</li>
                  <li>모든 PDF 처리 작업은 사용자의 브라우저에서만 수행됩니다</li>
                  <li>파일 내용은 외부로 유출되지 않으며, 브라우저 세션 종료 시 자동 삭제됩니다</li>
                  <li>제3자가 사용자의 PDF 파일에 접근할 수 없습니다</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. 쿠키 사용 및 Google AdSense</h2>
                <p className="text-gray-700 leading-relaxed">
                  본 웹사이트는 Google AdSense를 통해 광고를 게재하며, 다음과 같은 쿠키를 사용합니다:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Google AdSense 쿠키: 맞춤형 광고 제공을 위해 사용됩니다</li>
                  <li>분석 쿠키: 웹사이트 이용 현황 분석을 위해 사용됩니다</li>
                  <li>기능 쿠키: 사용자 경험 향상을 위해 사용됩니다</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-2">
                  사용자는 브라우저 설정을 통해 쿠키를 관리할 수 있으며,
                  <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    Google 광고 설정 페이지
                  </a>에서 맞춤형 광고를 끌 수 있습니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. 개인정보의 보유 및 이용기간</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>웹사이트 방문 기록: 최대 2년</li>
                  <li>쿠키 정보: 쿠키별 설정 기간에 따름 (일반적으로 1-2년)</li>
                  <li>PDF 파일: 브라우저 세션 중에만 임시 저장, 세션 종료 시 즉시 삭제</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. 개인정보의 제3자 제공</h2>
                <p className="text-gray-700 leading-relaxed">
                  PDF Tools는 사용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
                  다만, 다음의 경우에는 예외로 합니다:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>사용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>Google AdSense 서비스 제공을 위한 Google과의 정보 공유</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. 사용자의 권리</h2>
                <p className="text-gray-700 leading-relaxed">
                  사용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>개인정보 처리 현황에 대한 열람 요구</li>
                  <li>오류 등이 있을 경우 정정·삭제 요구</li>
                  <li>처리정지 요구</li>
                  <li>브라우저 설정을 통한 쿠키 관리</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. 개인정보보호책임자</h2>
                <p className="text-gray-700 leading-relaxed">
                  PDF Tools는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한
                  정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-2">
                  <p><strong>개인정보보호책임자:</strong> PDF Tools 운영팀</p>
                  <p><strong>연락처:</strong> 문의하기 페이지를 통해 연락 가능</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. 개인정보 처리방침 변경</h2>
                <p className="text-gray-700 leading-relaxed">
                  이 개인정보 처리방침은 2025년 1월 16일부터 적용되며, 법령 및 방침에 따른 변경내용의
                  추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. 기타</h2>
                <p className="text-gray-700 leading-relaxed">
                  본 서비스를 이용하는 사용자는 본 개인정보 처리방침에 동의하는 것으로 간주됩니다.
                  개인정보와 관련한 문의사항은 문의하기 페이지를 통해 연락 주시기 바랍니다.
                </p>
              </section>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 PDF Tools. 모든 권리 보유.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-blue-600 hover:underline">
                개인정보 처리방침
              </Link>
              <Link href="/contact" className="text-blue-600 hover:underline">
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}