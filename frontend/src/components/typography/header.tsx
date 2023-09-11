import React from 'react'

interface IProps {
    title: string;
}

const ApTextHeader: React.FC<IProps> = ({ title }) => {
    return (
        <h4 className="text-slate-600 font-semibold text-[1.6rem]">{title}</h4>
    )
}

export default ApTextHeader;
