'use client';
// 在 clinet component 中引入 server-only 的程式碼，會於編譯時產生錯誤
// import { serverSideFunction } from '@/utils/server-utils';
import { useTheme } from '@/components/theme-provider';

export default function ClientRoutePage() {
  console.log('Client route rendered');
  const theme = useTheme();
  // const result = serverSideFunction();
  return (
    <>
      <h1 style={{ color: theme.colors.secondary }}>ClientRoutePage</h1>
      {/* <p>{result}</p> */}
    </>
  );
}
