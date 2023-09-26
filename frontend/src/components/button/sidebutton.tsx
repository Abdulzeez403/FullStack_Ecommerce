import React from 'react'
interface IProps {
    title: string,
    onclick?: () => void
}

const ApSideButton: React.FC<IProps> = ({ title, onclick }) => {

    return (
        <div className='border-b-2 border-spacing-3 border-slate-200 py-2'>
            <button onClick={onclick}>{title}</button>
        </div>
    )
}

export default ApSideButton
