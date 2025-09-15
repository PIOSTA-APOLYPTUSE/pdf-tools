'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { FileText, Download, Upload, Scissors, Plus, Trash2 } from 'lucide-react';
import { splitPDF, downloadPDF } from '@/lib/pdf-utils';
import { toast } from 'sonner';

interface SplitRange {
  start: number;
  end: number;
  name: string;
}

export function PDFSplit() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [ranges, setRanges] = useState<SplitRange[]>([{ start: 1, end: 1, name: '문서1' }]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
    },
    multiple: false,
    onDrop: async (acceptedFiles) => {
      const pdfFile = acceptedFiles[0];
      if (pdfFile) {
        setFile(pdfFile);

        // PDF 페이지 수 확인
        try {
          const { PDFDocument } = await import('pdf-lib');
          const arrayBuffer = await pdfFile.arrayBuffer();
          const pdf = await PDFDocument.load(arrayBuffer);
          const pages = pdf.getPageCount();
          setPageCount(pages);
          setRanges([{ start: 1, end: pages, name: '전체문서' }]);
          toast.success(`PDF 파일이 업로드되었습니다. (총 ${pages}페이지)`);
        } catch (error) {
          console.error('PDF 파일 읽기 오류:', error);
          toast.error('PDF 파일을 읽을 수 없습니다.');
          setFile(null);
        }
      }
    },
  });

  const addRange = () => {
    setRanges((prev) => [
      ...prev,
      { start: 1, end: pageCount, name: `문서${prev.length + 1}` }
    ]);
  };

  const updateRange = (index: number, field: keyof SplitRange, value: string | number) => {
    setRanges((prev) =>
      prev.map((range, i) =>
        i === index ? { ...range, [field]: value } : range
      )
    );
  };

  const removeRange = (index: number) => {
    if (ranges.length > 1) {
      setRanges((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSplit = async () => {
    if (!file) {
      toast.error('PDF 파일을 선택해주세요.');
      return;
    }

    if (ranges.length === 0) {
      toast.error('최소 하나의 분할 범위를 설정해주세요.');
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    try {
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90));
      }, 100);

      const splitPDFs = await splitPDF(file, ranges);

      clearInterval(progressInterval);
      setProgress(100);

      // 각 분할된 PDF를 다운로드
      splitPDFs.forEach((pdfBytes, index) => {
        setTimeout(() => {
          downloadPDF(pdfBytes, `${ranges[index].name}.pdf`);
        }, index * 500); // 500ms 간격으로 다운로드
      });

      toast.success(`${splitPDFs.length}개의 PDF 파일이 생성되었습니다!`);

      setTimeout(() => {
        setProgress(0);
      }, 2000);
    } catch (error) {
      console.error('PDF 분할 오류:', error);
      toast.error('PDF 분할 중 오류가 발생했습니다.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Scissors className="h-6 w-6" />
          PDF 분할
        </CardTitle>
        <CardDescription>
          PDF 파일을 페이지 범위별로 분할합니다. 파일을 업로드하고 분할 범위를 설정하세요.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 파일 업로드 영역 */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive
              ? 'border-primary bg-primary/5'
              : 'border-gray-300 hover:border-primary/50'
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          {isDragActive ? (
            <p className="text-primary font-medium">파일을 놓아주세요...</p>
          ) : (
            <div>
              <p className="font-medium mb-2">PDF 파일을 드래그하거나 클릭하여 업로드</p>
              <p className="text-sm text-gray-500">하나의 PDF 파일만 선택할 수 있습니다</p>
            </div>
          )}
        </div>

        {/* 업로드된 파일 정보 */}
        {file && (
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-red-500" />
              <span className="font-medium">{file.name}</span>
              <span className="text-sm text-gray-500">
                ({pageCount}페이지, {(file.size / 1024 / 1024).toFixed(1)} MB)
              </span>
            </div>
          </div>
        )}

        {/* 분할 범위 설정 */}
        {file && pageCount > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">분할 범위 설정</h3>
              <Button
                onClick={addRange}
                variant="outline"
                size="sm"
                className="h-8"
              >
                <Plus className="h-4 w-4 mr-1" />
                범위 추가
              </Button>
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              {ranges.map((range, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                  <input
                    type="text"
                    placeholder="파일명"
                    value={range.name}
                    onChange={(e) => updateRange(index, 'name', e.target.value)}
                    className="flex-1 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <input
                    type="number"
                    placeholder="시작"
                    min="1"
                    max={pageCount}
                    value={range.start}
                    onChange={(e) => updateRange(index, 'start', parseInt(e.target.value) || 1)}
                    className="w-16 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <span className="text-sm text-gray-500">~</span>
                  <input
                    type="number"
                    placeholder="끝"
                    min="1"
                    max={pageCount}
                    value={range.end}
                    onChange={(e) => updateRange(index, 'end', parseInt(e.target.value) || pageCount)}
                    className="w-16 px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {ranges.length > 1 && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeRange(index)}
                      className="h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 진행률 표시 */}
        {isProcessing && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>분할 중...</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        )}

        {/* 분할 버튼 */}
        <Button
          onClick={handleSplit}
          disabled={!file || ranges.length === 0 || isProcessing}
          className="w-full"
          size="lg"
        >
          {isProcessing ? (
            '분할 중...'
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              PDF 분할하기 ({ranges.length}개 파일 생성)
            </>
          )}
        </Button>

        {!file && (
          <p className="text-sm text-gray-500 text-center">
            PDF 파일을 업로드해주세요
          </p>
        )}
      </CardContent>
    </Card>
  );
}