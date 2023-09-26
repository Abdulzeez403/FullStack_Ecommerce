import ApSideButton from '@/components/button/sidebutton'
import { useProductContext } from '@/modules/Dashboard/Product/context';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const ApSideMenu = () => {
    const { GetProducts } = useProductContext()
    const [filter, setFilter] = useState();


    useEffect(() => {
        GetProducts(filter)
    }, [filter])

    const handleButtonInput = (value: any) => {
        setFilter(value);
    }




    return (
        <div>
            <div className="inline  ">
                <Link href="" className="font-bold">
                    <ApSideButton title="All categories"
                        onclick={() => handleButtonInput("")} />
                </Link>

                <Link href={`?categories=${filter}`} className="font-bold">
                    <ApSideButton title="Phones"
                        onclick={() => handleButtonInput("Phones")} />
                </Link>

                <Link href={`?categories=${filter}`} className="font-bold">

                    <ApSideButton title="T-Shirt"
                        onclick={() => handleButtonInput("T-Shirt")} />
                </Link>

                <Link href={`?categories=${filter}`} className="font-bold">

                    <ApSideButton title="ELectronic"
                        onclick={() => handleButtonInput("ELectronic")} />
                </Link>

            </div>
        </div>
    )
}

export default ApSideMenu
