import { plexMono } from "@/pages"


interface MainContainerProps {
  children: React.ReactNode
}
const MainContainer = ( {children}:MainContainerProps ) => (
  <main
        id='mainContent'
        className={`flex w-screen min-h-screen flex-col items-center justify-between md:justify-start ${plexMono.className}`}
  >
    {children}
  </main>
); 

export default MainContainer;