import React, {FunctionComponent} from 'react';
import Image from "next/image"
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";

interface OwnProps {
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = (props) => {

    return (
        <div>
            <div className="flex justify-between max-w-6xl">
                {/*Left*/}
                <div className='relative hidden lg:inline-grid h-24 w-24 cursor-pointer'>
                    <Image
                        src='https://static.wikia.nocookie.net/wii/images/8/89/Pikachu.jpg/revision/latest?cb=20140209205851'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className='relative h-24 w-24 lg:hidden flex-shrink-0 cursor-pointer'>
                    <Image
                        src='https://static.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png/revision/latest/scale-to-width-down/700?cb=20200620223744'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                {/*Middle*/}
                <div className='relative mt-1 p-3 rounded-md'>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className='h-5 w-5 text-grey-500'/>
                    </div>
                    <input type="text" placeholder="Search"/>
                </div>
                {/*Right*/}
            </div>
        </div>
    );
};

export default Header;
