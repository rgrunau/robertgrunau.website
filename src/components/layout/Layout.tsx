import Head from 'next/head';
interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
  <>
    <div className='flex flex-col gap-8 bg-purple'>
      <Head>
        <title>robertgrunau.website</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  </>
);

export default Layout;