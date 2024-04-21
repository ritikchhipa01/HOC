"use client"

import { useSelector } from 'react-redux';

const page = () => {
    const communitydata = useSelector((store) => store.data);
    // console.log(communitydata[0]);

    return (
        <div className=' h-screen my-10'>
            {communitydata[0] &&
                communitydata[0].map((user, index) => {
                    return (<div key={index} className='mb-4 text-white text-4xl flex justify-center gap-2'>
                        <p>{user.CommunityName}</p>
                        <p>{user.description}</p>
                        <p>{user.builder}</p>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default page
