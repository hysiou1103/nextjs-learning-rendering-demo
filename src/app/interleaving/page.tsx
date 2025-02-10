import ClientComponentOne from '@/components/client-component-one';
import ServerComponentOne from '@/components/server-component-one';
// 在 Client Component 中使用 Server Component，推薦的做法是 將 Server Component 作為 Prop 傳遞進去
export default function InterleavingPage() {
  return (
    <>
      <h1>Interleaving Page Heading</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
}
