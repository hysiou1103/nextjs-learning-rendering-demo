import 'server-only';
// 在開發過程中提供編譯時錯誤，避免 server-only code 被意外引入至客戶端
export const serverSideFunction = () => {
  console.log(
    'use multiple libraries, use environment variables, interact with a database, process confidential information'
  );
  return 'server result';
};
