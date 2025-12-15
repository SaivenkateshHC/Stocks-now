import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='auth-layout'>
            <section className='auth-left-section scrollbar-hide-default'>
                <Link href='/' className='auth-logo'>
                    <Image src='/assets/icons/logo.svg' alt='Signalist' width={140} height={32} className='cursor-pointer h-8 w-auto' />
                </Link>
                <div className='pb-6 lg:pb-8 flex-1'>{children}</div>
            </section>
            <section className='auth-right-section'>
                <div className='z-10 relative lg:mt-4 lg:mb-16'>
                    <blockquote className='mb-3'> Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more confident making moves in the market.</blockquote>
                    <div className='flex items-center justify-between'>
                        <div>
                            <cite className='auth-testimonial-author'>- John Doe</cite>
                            <p className='max-md:text-xs text-gray-600'>Stock Market Investor</p>
                        </div>
                        <div className='flex items-start gap-0.5'>
                            {
                                [1, 2, 3, 4, 5].map((item) => (<Image key={item} src='/assets/icons/star.svg' alt='Star' width={16} height={16} />))
                            }
                        </div>
                    </div>
                </div>
                <div className='flex-1 relative'>
                    <Image src='/assets/images/dashboard.png' alt='Auth Right Section' width={1440} height={1550} className='auth-dashboard-preview absolute top-0' />
                </div>
            </section>
        </main>
    )
}

export default layout
