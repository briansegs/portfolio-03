import Link from 'next/link'
import ButtonBase from './ButtonBase'
import SocialLinks from './SocialLinks'
import SideMenu from './nav/SideMenu'

import { navLinks } from '@/constants'

const Nav = () => {
  return (
    <header className="absolute z-10 w-full px-4 py-8 sm:px-8">
      <nav className="flex items-center justify-between">
        {/* Logo / Social links */}
        <div className={`flex h-[59px] items-center gap-4 rounded-lg bg-white px-4 py-2 shadow-sm`}>
          <Link href={'/'}>
            <div>
              <h3 className="font-primary text-4xl font-extrabold text-black">
                Brian <span className="text-red-300">.</span>
              </h3>
            </div>
          </Link>
          <div className="hidden items-center gap-4 sm:flex">
            <SocialLinks />
          </div>
        </div>

        {/* Navigation links */}
        <div className="hidden items-center justify-center gap-4 rounded-md bg-white px-4 py-2 shadow-sm lg:flex">
          <div className="flex gap-6 rounded-lg">
            {navLinks.map((link) => (
              <Link href={link.path} key={link.name}>
                <ButtonBase
                  title={link.name}
                  styles="px-[12px] py-[6px] tracking-[-0.4px] text-lg bg-transparent text-black hover:bg-blue-50 font-bold"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Side burger menu overlay  */}
        {<SideMenu />}
      </nav>
    </header>
  )
}

export default Nav
