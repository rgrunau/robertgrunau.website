import Head from 'next/head';
interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
  <>
    <Head>
      <title>robertgrunau.website</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className='flex flex-col gap-8 bg-purple'>
      {children}
    </div>
  </>
);

export default Layout;