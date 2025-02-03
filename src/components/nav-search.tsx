// Client Components 應盡量放在最底層 (Leaf Component)，避免不必要的 Client 端渲染。
// 如果在元件樹的上層加入 "use client"，其所有子元件都會變成 Client Components，可能影響效能。

'use client';

import { useState } from 'react';

export const NavSearch = () => {
  const [search, setSearch] = useState('');

  console.log(`NavSearch rendered`);
  return <div>Nav search input</div>;
};
