'use client';
// 因為引入 server-only 的程式碼，所以會於編譯時產生錯誤
import { serverSideFunction } from '@/utils/server-utils';

export default function ClientRoutePage() {
  console.log('Client route rendered');
  const result = serverSideFunction();
  return (
    <>
      <h1>ClientRoutePage</h1>;<p>{result}</p>
    </>
  );
}
