import Layout from '@/components/layout/Layout';
import Seo from '@/components/layout/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <div className='layout bg-yellow-200'>
        <h1>Hello World</h1>
      </div>
    </Layout>
  );
}
