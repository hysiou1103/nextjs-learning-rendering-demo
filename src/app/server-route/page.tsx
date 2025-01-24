import { serverSideFunction } from '@/utils/server-utils';
import { ImageSlider } from '@/components/imageSlider';
export default function ServerRoutePage() {
  console.log('Server route rendered');

  const result = serverSideFunction();

  return (
    <>
      <h1>ServerRoutePage</h1>
      <p>{result}</p>
      {/* 將 react-slick 包裹成獨立的 client component
      並在需要使用的地方引入，既能保留 server component
      的優勢，也能利用第三方套件提供的 client 端功能。 */}
      <ImageSlider />
    </>
  );
}
