'use client';

import Image from 'next/image';

export default function Home(){
    return(
        <div>
            <Image src="/landing.png" alt="Landing Image" width={1080} height={2000}/>
        </div>
    )
}
