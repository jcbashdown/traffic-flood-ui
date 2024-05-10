'use client'
import { AreaChart, Area, XAxis, ReferenceLine, ResponsiveContainer } from 'recharts'

interface SparklineProps {
    data: DataPoint[]
    selectedTimestamp: string
    keyName: string
}

const Sparkline: React.FC<SparklineProps> = ({ data, selectedTimestamp, keyName }) => {
    const selectedData = data.find((data: DataPoint) => data.timestamp === selectedTimestamp)
    return (
        <ResponsiveContainer width="100%" height={100} minHeight={50}>
            <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 0,
                    left: 0,
                    bottom: 10,
                }}
            >
                <XAxis dataKey="timestamp" className="hidden" />
                if(selectedData) {<ReferenceLine x={selectedData?.timestamp} stroke="blue" />}
                <Area type="monotone" dataKey={keyName} stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Sparkline
