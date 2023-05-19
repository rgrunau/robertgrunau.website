import Link from 'next/link'
const navLinks = [
  { route: '/about', title: 'about' },
  { route: '/projects', title: 'projects' },
  { route: '/blog', title: 'blog' },
]

const Navigation = () => (
  <div className='flex items-center justify-center sm:justify-end px-4 mt-4 w-full'>
    <nav className='flex justify-center sm:justify-end items-center'>
      <ul className='flex justify-center items-center'>
        {navLinks.map(({ route, title }) => (
          <li key={title} className='text-white text-xl md:text-2xl mx-2'>
          <Link href={route}>
            {title}
          </Link>
        </li>
        ))}
      </ul>
    </nav>
  </div>
)

export default Navigation