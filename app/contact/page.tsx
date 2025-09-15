import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Mail, MessageSquare, Clock, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
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
                <p className="text-sm text-gray-600">문의하기</p>
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
        <div className="grid md:grid-cols-2 gap-8">
          {/* 연락처 정보 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageSquare className="h-6 w-6" />
                문의하기
              </CardTitle>
              <p className="text-gray-600">
                PDF Tools 사용 중 문제가 있거나 궁금한 점이 있으시면 언제든지 연락해 주세요.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-medium">이메일 문의</h3>
                    <p className="text-gray-600 text-sm">
                      서비스 관련 문의, 버그 신고, 기능 제안 등
                    </p>
                    <a
                      href="mailto:support@pdftools.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@pdftools.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-medium">응답 시간</h3>
                    <p className="text-gray-600 text-sm">
                      일반적으로 24-48시간 내에 답변드립니다.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-medium">개인정보 보호</h3>
                    <p className="text-gray-600 text-sm">
                      문의 내용은 안전하게 처리되며, 서비스 개선 목적으로만 사용됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 자주 묻는 질문 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">자주 묻는 질문</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-medium mb-1">PDF 파일이 업로드되지 않아요</h3>
                  <p className="text-gray-600 text-sm">
                    브라우저에서 JavaScript가 활성화되어 있는지 확인하세요.
                    파일 크기가 너무 큰 경우 브라우저가 느려질 수 있습니다.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-medium mb-1">내 파일이 안전한가요?</h3>
                  <p className="text-gray-600 text-sm">
                    모든 작업은 브라우저에서 처리되며 파일이 서버로 전송되지 않습니다.
                    브라우저를 닫으면 모든 데이터가 자동으로 삭제됩니다.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-medium mb-1">모바일에서도 사용할 수 있나요?</h3>
                  <p className="text-gray-600 text-sm">
                    네, 모든 모던 브라우저에서 사용 가능합니다.
                    다만 대용량 파일의 경우 PC 환경을 권장합니다.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-medium mb-1">파일 크기 제한이 있나요?</h3>
                  <p className="text-gray-600 text-sm">
                    별도의 크기 제한은 없지만, 브라우저 메모리에 따라
                    처리 가능한 파일 크기가 달라질 수 있습니다.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-medium mb-1">새로운 기능을 추가해주세요</h3>
                  <p className="text-gray-600 text-sm">
                    기능 제안은 이메일로 보내주시면 검토 후 업데이트에 반영하겠습니다.
                    사용자 피드백을 소중히 생각합니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 추가 정보 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl">서비스 소개</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                PDF Tools는 사용자의 개인정보 보호와 편의성을 최우선으로 생각하는 무료 PDF 편집 서비스입니다.
                복잡한 설치나 회원가입 없이 웹 브라우저에서 바로 PDF 파일을 편집할 수 있도록 설계되었습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                저희 서비스의 가장 큰 특징은 모든 작업이 클라이언트 측에서 처리된다는 점입니다.
                이는 사용자의 민감한 문서가 외부 서버로 전송되지 않음을 의미하며,
                따라서 기업 문서나 개인정보가 포함된 파일도 안심하고 편집할 수 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                앞으로도 사용자 친화적인 기능을 지속적으로 추가하여
                더욱 편리하고 안전한 PDF 편집 환경을 제공하겠습니다.
                여러분의 소중한 의견과 제안을 기다리고 있습니다.
              </p>
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