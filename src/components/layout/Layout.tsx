import Header from './Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='layout '>
      <Header />
      {children}
    </main>
  );
}
