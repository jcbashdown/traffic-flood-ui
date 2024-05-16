'use client'
import { AreaChart, Area, XAxis, ReferenceLine, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'

type ReferenceTimestamp = {
    timestamp: string
    label: string
}

interface SparklineProps {
    data: DataPoint[]
    selectedTimestamp: string
    keyName: string
    label: string
    referenceTimestamps: ReferenceTimestamp[]
}
const CustomLabel = ({ value }) => {
    return <text className="text-sm text-blue-600">{value}</text>
}

const Sparkline: React.FC<SparklineProps> = ({ data, selectedTimestamp, keyName, label, referenceTimestamps = [] }) => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => setScreenHeight(window.innerHeight)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const selectedData = data.find((data: DataPoint) => data.timestamp === selectedTimestamp)
    const minHeight = screenHeight * 0.08 // Example: 20% of the screen height
    return (
        <div className="flex flex-row items-center">
            <div className="px-4 text-center font-bold w-3/12 sm:w-2/12 lg:w-1/12">
                <h2>{label}</h2>
            </div>
            <div className="w-9/12 sm:w-10/12 lg:w-11/12 pr-4">
                <ResponsiveContainer width="100%" height="100%" minHeight={minHeight}>
                    <AreaChart data={data}>
                        <XAxis dataKey="timestamp" hide={true} />
                        {selectedData && (
                            <ReferenceLine
                                x={selectedData.timestamp}
                                stroke="black"
                                strokeDasharray="2 2"
                                strokeWidth="1"
                                isFront={true}
                            />
                        )}
                        {referenceTimestamps.map((referenceTimestamp: ReferenceTimestamp, i: number) => (
                            <ReferenceLine
                                key={referenceTimestamp.timestamp + i}
                                x={referenceTimestamp.timestamp}
                                label={{ value: referenceTimestamp.label, position: 'insideTopLeft' }}
                                stroke="grey"
                                strokeWidth="1"
                                isFront={true}
                            />
                        ))}
                        <Area type="monotone" dataKey={keyName} stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Sparkline
