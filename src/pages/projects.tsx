import { plexMono } from ".";
import { FaSpaceShuttle } from "react-icons/fa";

const Projects = () => (
  <main
  id='mainContent'
  className={`flex w-screen min-h-screen flex-col items-center justify-center md:justify-start gap-8 p-10 ${plexMono.className}`}
    >
      <div className="flex flex-col p-2 text-center">
        <h2 className="text-2xl text-white">{"Oh No! Looks Like I haven't put any content here yet"}</h2>
      </div>
      <div className="flex flex-col justify-center">
        <FaSpaceShuttle className="text-4xl text-slate-200 animate-spin" />
      </div>
      <div>
        <h3 className="text-2xl text-white">{'Check back soon!'}</h3>
      </div>
  </main>
)


export default Projects;