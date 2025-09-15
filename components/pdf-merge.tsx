'use client';

import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { FileText, Download, Trash2, Upload } from 'lucide-react';
import { mergePDFs, downloadPDF } from '@/lib/pdf-utils';
import { toast } from 'sonner';

export function PDFMerge() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
    },
    onDrop: (acceptedFiles) => {
      setFiles((prev) => [...prev, ...acceptedFiles]);
      toast.success(`${acceptedFiles.length} PDF 파일이 추가되었습니다.`);
    },
  });

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
    toast.success('파일이 제거되었습니다.');
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      toast.error('최소 2개의 PDF 파일이 필요합니다.');
      return;
    }

    setIsProcessing(true);
    setProgress(0);

    try {
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90));
      }, 100);

      const mergedPDF = await mergePDFs(files);

      clearInterval(progressInterval);
      setProgress(100);

      downloadPDF(mergedPDF, 'merged-document.pdf');
      toast.success('PDF 파일이 성공적으로 합쳐졌습니다!');

      setTimeout(() => {
        setProgress(0);
        setFiles([]);
      }, 1000);
    } catch (error) {
      console.error('PDF 합치기 오류:', error);
      toast.error('PDF 합치기 중 오류가 발생했습니다.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-6 w-6" />
          PDF 합치기
        </CardTitle>
        <CardDescription>
          여러 PDF 파일을 하나로 합칩니다. 파일을 드래그하거나 클릭하여 업로드하세요.
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
              <p className="text-sm text-gray-500">PDF 파일만 지원됩니다</p>
            </div>
          )}
        </div>

        {/* 업로드된 파일 목록 */}
        {files.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium">업로드된 파일 ({files.length}개)</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <FileText className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span className="text-sm truncate">{file.name}</span>
                    <span className="text-xs text-gray-500 flex-shrink-0">
                      ({(file.size / 1024 / 1024).toFixed(1)} MB)
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 진행률 표시 */}
        {isProcessing && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>처리 중...</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        )}

        {/* 합치기 버튼 */}
        <Button
          onClick={handleMerge}
          disabled={files.length < 2 || isProcessing}
          className="w-full"
          size="lg"
        >
          {isProcessing ? (
            '처리 중...'
          ) : (
            <>
              <Download className="h-4 w-4 mr-2" />
              PDF 합치기 ({files.length}개 파일)
            </>
          )}
        </Button>

        {files.length === 1 && (
          <p className="text-sm text-gray-500 text-center">
            최소 2개의 PDF 파일이 필요합니다
          </p>
        )}
      </CardContent>
    </Card>
  );
}