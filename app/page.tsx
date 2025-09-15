'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scissors} from 'lucide-react';
import { PDFMerge } from '@/components/pdf-merge';
import { PDFSplit } from '@/components/pdf-split';

type Tool = 'merge' | 'split';

export default function Home() {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);

  const tools = [
    {
      id: 'merge' as Tool,
      title: 'PDF 합치기',
      description: '여러 PDF 파일을 하나로 합칩니다',
      icon: FileText,
      color: 'text-blue-600',
    },
    {
      id: 'split' as Tool,
      title: 'PDF 분할',
      description: 'PDF 파일을 페이지별로 분할합니다',
      icon: Scissors,
      color: 'text-green-600',
    },
  ];

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
                <p className="text-sm text-gray-600">무료 PDF 편집 도구</p>
              </div>
            </div>
            {activeTool && (
              <Button
                variant="outline"
                onClick={() => setActiveTool(null)}
              >
                ← 도구 선택으로 돌아가기
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!activeTool ? (
          <div className="space-y-8">
            {/* 히어로 섹션 */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                간편한 PDF 편집 도구
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                PDF 파일을 빠르고 안전하게 합치거나 분할하세요
              </p>
              <p className="text-base text-gray-500 max-w-3xl mx-auto mb-8">
                완전 무료 온라인 PDF 편집 도구로 회원가입 없이 바로 사용 가능합니다.
                모든 작업은 브라우저에서 처리되어 파일이 서버로 전송되지 않으므로 100% 안전합니다.
                업무용 문서 정리, 학습 자료 편집, 계약서 관리 등 다양한 용도로 활용하세요.
                PC와 모바일 모든 기기에서 호환되며, 파일 크기 제한 없이 무제한 이용 가능합니다.
              </p>
            </div>

            {/* 도구 선택 */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {tools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Card
                    key={tool.id}
                    className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 border-2 hover:border-blue-300"
                    onClick={() => setActiveTool(tool.id)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className={`mx-auto mb-4 p-4 rounded-full bg-gray-50`}>
                        <Icon className={`h-12 w-12 ${tool.color}`} />
                      </div>
                      <CardTitle className="text-2xl">{tool.title}</CardTitle>
                      <CardDescription className="text-base">
                        {tool.description}
                      </CardDescription>
                      {tool.id === 'merge' && (
                        <div className="text-sm text-gray-600 mt-2 text-left">
                          <p>PDF 합치기 도구를 사용하면 여러 개의 PDF 문서를 손쉽게 하나의 파일로 결합할 수 있습니다.
                          회사 문서, 계약서, 보고서 등을 정리할 때 매우 유용합니다. 파일은 브라우저에서 직접 처리되므로
                          업로드 속도가 빠르며 개인정보가 외부로 유출될 걱정이 없습니다. 드래그 앤 드롭으로 간편하게
                          파일을 추가하고 원하는 순서로 정렬한 후 합치기 버튼을 클릭하면 즉시 다운로드됩니다.</p>
                        </div>
                      )}
                      {tool.id === 'split' && (
                        <div className="text-sm text-gray-600 mt-2 text-left">
                          <p>PDF 분할 도구는 큰 PDF 파일을 원하는 페이지 범위별로 나누어 여러 개의 작은 파일로
                          만들어주는 기능입니다. 예를 들어 100페이지짜리 매뉴얼에서 특정 챕터만 추출하거나,
                          계약서에서 필요한 부분만 따로 저장할 때 활용할 수 있습니다. 각 분할 범위마다 원하는
                          파일명을 지정할 수 있으며, 한 번에 여러 구간을 설정하여 동시에 분할 처리가 가능합니다.
                          모든 작업은 로컬에서 처리되어 안전하고 빠릅니다.</p>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button className="w-full" size="lg">
                        시작하기
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* 특징 */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                왜 PDF Tools를 선택해야 할까요?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="bg-green-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">빠른 처리</h4>
                  <p className="text-gray-600">브라우저에서 바로 처리되어 빠르고 안전합니다.
                  서버 업로드 없이 로컬에서 즉시 처리되므로 대용량 파일도 신속하게 편집할 수 있습니다.</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">완전 무료</h4>
                  <p className="text-gray-600">회원가입 없이 완전 무료로 사용하세요.
                  숨겨진 비용이나 제한 없이 무제한으로 PDF 편집 기능을 이용할 수 있습니다.</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">개인정보 보호</h4>
                  <p className="text-gray-600">파일이 서버에 전송되지 않아 100% 안전합니다.
                  민감한 문서도 안심하고 편집할 수 있으며, 작업 완료 후 브라우저에서 자동 삭제됩니다.</p>
                </div>
              </div>
            </div>

            {/* FAQ 섹션 */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                자주 묻는 질문 (FAQ)
              </h3>
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    PDF 파일을 합치는 방법이 궁금해요
                  </h4>
                  <p className="text-gray-600">
                    PDF 합치기 도구를 선택한 후, 합치고 싶은 PDF 파일들을 드래그 앤 드롭하거나 클릭하여 업로드하세요.
                    파일 순서를 확인한 후 &apos;합치기&apos; 버튼을 클릭하면 하나의 PDF 파일로 다운로드됩니다.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    PDF 분할은 어떻게 하나요?
                  </h4>
                  <p className="text-gray-600">
                    PDF 분할 도구에서 분할하고 싶은 PDF 파일을 업로드하세요.
                    페이지 범위를 설정하고 각 파일의 이름을 정한 후 &apos;분할&apos; 버튼을 클릭하면 여러 개의 PDF 파일로 나누어집니다.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    파일 크기 제한이 있나요?
                  </h4>
                  <p className="text-gray-600">
                    별도의 파일 크기 제한은 없습니다. 다만 브라우저 메모리에 따라 처리 가능한 크기가 달라질 수 있으며,
                    대용량 파일의 경우 처리 시간이 더 걸릴 수 있습니다.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    내 파일이 안전한가요?
                  </h4>
                  <p className="text-gray-600">
                    모든 PDF 편집 작업은 브라우저에서 처리되며, 파일이 외부 서버로 전송되지 않습니다.
                    개인정보와 문서 내용이 100% 보호되며, 브라우저를 닫으면 모든 데이터가 자동 삭제됩니다.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    모바일에서도 사용할 수 있나요?
                  </h4>
                  <p className="text-gray-600">
                    네, 스마트폰과 태블릿을 포함한 모든 모던 브라우저에서 사용 가능합니다.
                    반응형 디자인으로 제작되어 어떤 기기에서든 편리하게 PDF를 편집할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

          </div>
        ) : activeTool === 'merge' ? (
          <PDFMerge />
        ) : (
          <PDFSplit />
        )}
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 PDF Tools. 모든 권리 보유.</p>
            <p className="text-sm mt-2">
              이 도구는 브라우저에서 작동하며 파일이 외부로 전송되지 않습니다.
            </p>
            <div className="mt-4 space-x-4">
              <a href="/privacy" className="text-blue-600 hover:underline text-sm">
                개인정보 처리방침
              </a>
              <a href="/contact" className="text-blue-600 hover:underline text-sm">
                문의하기
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
