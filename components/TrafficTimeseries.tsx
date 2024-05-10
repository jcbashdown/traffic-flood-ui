'use client'
import Sparkline from '@/components/common/Sparkline'

import { useAppSelector } from '@/lib/redux/hooks'

import { selectData, selectSelectedTimestamp } from '@/lib/redux/store'

const TrafficTimeseries: React.FC = () => {
    const selectedTimestamp = useAppSelector(selectSelectedTimestamp)
    const data = useAppSelector(selectData)
    return <Sparkline data={data} selectedTimestamp={selectedTimestamp} keyName={'percentage'} label={'Traffic'} />
}

export default TrafficTimeseries
