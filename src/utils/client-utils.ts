import 'client-only';
// 在 server component 使用 client only function 時，會顯示 error
export const clientSideFunction = () => {
  console.log('use window object, use localStorage');
  return 'client result';
};
