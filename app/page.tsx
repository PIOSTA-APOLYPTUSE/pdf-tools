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
              <p className="text-xl text-gray-600 mb-8">
                PDF 파일을 빠르고 안전하게 합치거나 분할하세요
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
                  <p className="text-gray-600">브라우저에서 바로 처리되어 빠르고 안전합니다</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">완전 무료</h4>
                  <p className="text-gray-600">회원가입 없이 완전 무료로 사용하세요</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">개인정보 보호</h4>
                  <p className="text-gray-600">파일이 서버에 전송되지 않아 100% 안전합니다</p>
                </div>
              </div>
            </div>

            {/* 광고 영역 (placeholder) */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <p className="text-gray-500 font-medium mb-2">광고 영역</p>
                <p className="text-sm text-gray-400">
                  이 서비스는 광고를 통해 운영됩니다
                </p>
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
            <p>&copy; 2024 PDF Tools. 모든 권리 보유.</p>
            <p className="text-sm mt-2">
              이 도구는 브라우저에서 작동하며 파일이 외부로 전송되지 않습니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
