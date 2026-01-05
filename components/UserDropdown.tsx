import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation'
import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import NavItems from './NavItems';

const UserDropdown = () => {

    const router = useRouter();

    const handleSignOut = async () => {
        return router.push('/sign-in')
    }

    const user = {
        name: 'Sai',
        email: 'sai@test.com'
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'ghost'} className='flex items-center gap-4 text-gray-400 hover:text-yellow-500'>
                    <Avatar className='h-8 w-8'>
                        {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                        <AvatarFallback className='bg-yellow-500 text-yellow-900'>{user.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    <div className='hidden md:flex flex-col items-start'>
                        <span className='text-base font-medium text-gray-400'>
                            {user.name}
                        </span>
                    </div>

                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='text-gray-400'>
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className='h-8 w-8'>
                            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                            <AvatarFallback className='bg-yellow-500 text-yellow-900'>{user.name.slice(0, 1)}</AvatarFallback>
                        </Avatar>
                        <div className='flex flex-col'>
                            <span className='text-base font-medium text-gray-400'>
                                {user.name}
                            </span>
                            <span className='text-sm text-gray-500'>{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className='bg-gray-600' />
                <DropdownMenuItem onClick={handleSignOut}
                    className='cursor-pointer text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors' >
                    <LogOut className='h-4 w-4 mr-2 hidden sm:block' />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className='hidden sm:block bg-gray-600' />
                <nav className="sm:hidden">
                    <NavItems />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown