import React, { useEffect } from 'react'
import KQKDTable from './KQKDTable';
import CDKTTable from './CDKTTable';
import CSTCTable from './CSTCTable';

type Props = {

}

export default function BCTCTomTat(props: Props) {

    const { } = props

    return (
        <>
            <div className='mb-10'>
                <KQKDTable />
            </div>
            <div className='mb-10'>
                <CDKTTable />
            </div>
            <div className='mb-10'>
                <CSTCTable />
            </div>
        </>
    )
}