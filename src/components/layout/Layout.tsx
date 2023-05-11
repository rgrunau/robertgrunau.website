
interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => (
  <div className='flex flex-col gap-8 bg-purple'>
    {children}
  </div>
);

export default Layout;