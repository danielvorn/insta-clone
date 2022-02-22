import React, {FunctionComponent} from 'react';
import Image from "next/image"
import {
    HeartIcon,
    HomeIcon,
    MenuIcon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    SearchIcon,
    UserGroupIcon,
} from "@heroicons/react/solid";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {
    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 mx-auto">
                {/*Left*/}
                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image
                        src='https://static.wikia.nocookie.net/wii/images/8/89/Pikachu.jpg/revision/latest?cb=20140209205851'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image
                        src='https://static.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png/revision/latest/scale-to-width-down/700?cb=20200620223744'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                {/*Middle*/}
                <div className='relative mt-1 p-3 rounded-md'>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className='h-5 w-5 text-gray-500'/>
                    </div>
                    <input
                        className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black'
                        type='text'
                        placeholder='Search'/>
                </div>
                {/*Right*/}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden cursor-pointer"/>
                    <PaperAirplaneIcon className="navBtn"/>
                    <PlusCircleIcon className="navBtn"/>
                    <UserGroupIcon className="navBtn"/>
                    <HeartIcon className="navBtn"/>
                    <img src='https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/269724207_627299961652748_3811184752512407725_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=k3fUSVXoEEIAX_Dj9dF&_nc_ht=scontent-lga3-1.xx&oh=00_AT9XehmiY3YNrxOSnhdFJtDA8Zb3O9jrghhoU2XmsYPcvA&oe=6218F80C' alt='profile pic'
                         className='h-10 rounded-full cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};

export default Header;
