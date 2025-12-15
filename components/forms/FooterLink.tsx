import Link from 'next/link'
import React from 'react'

const FooterLink = ({ text, linkText, href }: FooterLinkProps) => {
    return (
        <div className='text-center pt-4'>

            <p className='text-sm text-gray-500 hover:text-gray-400 transition'>
                {text}
                <Link href={href} className='text-yellow-500 ml-1'>{linkText}</Link>
            </p>
        </div>
    )
}

export default FooterLink