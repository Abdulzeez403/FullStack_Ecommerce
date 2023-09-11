import React from 'react'
import Image from "next/image"

interface IProps {
    imgUrl: string;
    alt: string;
    width?: number;
    height?: number;
    className?: any
}

const ApImage: React.FC<IProps> = ({ imgUrl, alt, width = 2000, height = 1500, className }) => {
    return (
        <div>

            <Image
                src={imgUrl}
                width={width}
                height={height}
                alt={alt}
                priority
                object-fit="contain"
                className={`bg-yellow-400 rounded-lg ${className}`}
            />
        </div>
    )
}

export default ApImage
