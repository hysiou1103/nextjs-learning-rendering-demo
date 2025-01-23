// About page 是 server component，可以從 build 出來的 about.rsc 中看到有 h1 tag 的結構，並且沒有額外的 js 檔案
export default function AboutPage() {
  console.log('about server component');
  return <h1>About Page {new Date().toLocaleTimeString()}</h1>;
}
