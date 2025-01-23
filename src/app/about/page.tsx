import { cookies } from 'next/headers';

// 在我們使用 cookies 之前，About page 是 Static Rendering 的 server component，可以從 build 出來的 about.rsc 中看到有 h1 tag 的結構，並且沒有額外的 js 檔案
// 在使用 cookies 後，About page 是使用 Dynamic Rendering 的 server component，在 .next/server/app 中不會找到 about.html
export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme');
  console.log('theme', theme);
  console.log('about server component');
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
