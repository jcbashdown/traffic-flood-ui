'use client'
import Sparkline from '@/components/common/Sparkline'

import { useAppSelector } from '@/lib/redux/hooks'

import { selectData, selectSelectedTimestamp } from '@/lib/redux/store'

const RainTimeseries: React.FC = () => {
    const selectedTimestamp = useAppSelector(selectSelectedTimestamp)
    const data = useAppSelector(selectData)
    return (
        <div className="p-2">
            <Sparkline data={data} selectedTimestamp={selectedTimestamp} keyName={'precipMM'} label={'Rainfall'} />
        </div>
    )
}

export default RainTimeseries
