'use client'
import { AreaChart, Area, XAxis, ReferenceLine, ResponsiveContainer } from 'recharts'

interface SparklineProps {
    data: DataPoint[]
    selectedTimestamp: string
    keyName: string
    label: string
}

const Sparkline: React.FC<SparklineProps> = ({ data, selectedTimestamp, keyName, label }) => {
    const selectedData = data.find((data: DataPoint) => data.timestamp === selectedTimestamp)
    return (
        <div className="flex flex-row items-center">
            <div className="px-4 text-center font-bold w-3/12 sm:w-2/12 lg:w-1/12">
                <h2>{label}</h2>
            </div>
            <div className="w-9/12 sm:w-10/12 lg:w-11/12 pr-4">
                <ResponsiveContainer width="100%" height="100%" minHeight={50}>
                    <AreaChart data={data}>
                        <XAxis dataKey="timestamp" hide={true} />
                        if(selectedData) {<ReferenceLine x={selectedData?.timestamp} stroke="blue" />}
                        <Area type="monotone" dataKey={keyName} stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Sparkline
