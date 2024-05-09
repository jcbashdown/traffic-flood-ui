'use client'
import React, { useState } from 'react'
import { AreaChart, Area, XAxis, ReferenceLine, ResponsiveContainer } from 'recharts'
import Slider, { SliderProps } from 'rc-slider'
import 'rc-slider/assets/index.css'

interface DataPoint {
    timestamp: string
    precipMM: number
}

interface SparklineProps {
    data: DataPoint[]
    selectedTimestamp: string
}

const Sparkline: React.FC<SparklineProps> = ({ data, selectedTimestamp }) => {
    const selectedData = data.find((data: DataPoint) => data.timestamp === selectedTimestamp)
    return (
        <ResponsiveContainer width="100%" height={300} minHeight={200}>
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
                <Area type="monotone" dataKey="precipMM" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

interface TimeseriesSliderProps {
    data: DataPoint[]
    onTimestampChange: (timestamp: string) => void
}

const TimeseriesSlider: React.FC<TimeseriesSliderProps> = ({ data, onTimestampChange }) => {
    const handleSliderChange: SliderProps['onChange'] = (value: number | number[]) => {
        if (typeof value === 'number') {
            onTimestampChange(data[value].timestamp)
        }
    }

    return <Slider min={0} max={data.length - 1} step={1} onChange={handleSliderChange} />
}

interface SparklineWithSliderProps {
    data: DataPoint[]
}

const SparklineWithSlider: React.FC<SparklineWithSliderProps> = ({ data }) => {
    const [selectedTimestamp, setSelectedTimestamp] = useState<string>(data[0].timestamp)

    const handleTimestampChange = (timestamp: string) => {
        setSelectedTimestamp(timestamp)
    }

    const getHumanReadableLocalTime = (selectedTimestamp: string) => {
        const localTime = new Date(selectedTimestamp).toLocaleString()
        return localTime
    }
    const localTime = new Date(selectedTimestamp).toLocaleString()
    return (
        <>
            <Sparkline data={data} selectedTimestamp={selectedTimestamp} />
            <TimeseriesSlider data={data} onTimestampChange={handleTimestampChange} />
            <h2 className="text-center mb-4">{getHumanReadableLocalTime(selectedTimestamp)}</h2>
        </>
    )
}

export default SparklineWithSlider
