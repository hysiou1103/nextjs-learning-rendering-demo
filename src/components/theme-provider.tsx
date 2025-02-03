// React Context 無法在 server component 中使用，因此最好將邏輯抽離，單獨包裝成 client component

'use client';
import { createContext, useContext } from 'react';

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
  },
};

//  定義 Context 並設定一個預設值，這個值只有在沒有 Provider 包裹時才會生效。
const ThemeContent = createContext<Theme>(defaultTheme);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // 在應用中提供 Context，確保所有子組件都能取得正確的值。
  return <ThemeContent value={defaultTheme}>{children}</ThemeContent>;
}

export const useTheme = () => useContext(ThemeContent);
