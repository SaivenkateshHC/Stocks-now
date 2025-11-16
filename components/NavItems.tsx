import React from 'react'
import Link from 'next/link'
import { NAV_ITEMS } from '@/lib/constant'
import { usePathname } from 'next/navigation'

const NavItems = () => {

    const pathname = usePathname();
    const isActive = (href:string)=>{
        if( href === '/') return pathname === '/';

        return pathname.startsWith(href)
    }

  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
       {NAV_ITEMS.map(({href, title})=>{
            return <li key={href}>
                <Link href={href} title={title} 
                className={`hover:text-yellow-500 transition-colors ${isActive(href) ? 'text-gray-100': ''} cursor-pointer'`}>
                    {title}
                </Link>
            </li>
       })}
    </ul>
  )
}

interface NavItemsInterface {
    href: string,
    title: string
}

export default NavItems