'use client'
import Sparkline from '@/components/common/Sparkline'

import { useAppSelector } from '@/lib/redux/hooks'

import { selectData, selectSelectedTimestamp } from '@/lib/redux/store'

const TrafficTimeseries: React.FC = () => {
    const selectedTimestamp = useAppSelector(selectSelectedTimestamp)
    const data = useAppSelector(selectData)

    const referenceTimestamps = [
        { timestamp: '2024-05-13T03:00:01Z', label: 'Back to school' },
        { timestamp: '2024-05-10T03:00:02Z', label: 'Public holiday' },
    ]
    return (
        <div className="p-2">
            <Sparkline
                data={data}
                selectedTimestamp={selectedTimestamp}
                keyName={'percentage'}
                label={'Traffic'}
                referenceTimestamps={referenceTimestamps}
            />
        </div>
    )
}

export default TrafficTimeseries
