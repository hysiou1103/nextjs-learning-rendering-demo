import 'server-only';
// 在 clinet component 中引入 server-only 的程式碼，會於編譯時產生錯誤，避免 server-only code 被意外引入至客戶端
export const serverSideFunction = () => {
  console.log(
    'use multiple libraries, use environment variables, interact with a database, process confidential information'
  );
  return 'server result';
};
