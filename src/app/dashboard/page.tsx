// Dashboard page 是 client component，build 出來的 dashboard.rsc 中看不到有 h1 tag 的結構，但可以找到額外的 js 檔案，並在該 js 檔案中找到 h1 tag 的結構

'use client';

import { useState } from 'react';
export default function DashboardPage() {
  // 從 "/" 透過 Link 導向 "/dashboard"，會在瀏覽器看見 console.log 的訊息兩次，這是因為 react strict mode 的關係，但在 ternimal 中不會看見 console.log 的訊息
  // 但如果在當頁面重新整理，會在瀏覽器看見 console.log 的訊息兩次，在 ternimal 中看見一次
  // 這是因為 client component 會在 server 先 pre-rendering，導頁不會造成伺服器端重新 pre-rendering，但重新整理會
  // react strict mode : 使元件的初始化邏輯執行兩次 (僅限開發環境)
  console.log('dashboard client component');
  const [name, setName] = useState('molly');
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>hello {name}</p>
    </div>
  );
}
