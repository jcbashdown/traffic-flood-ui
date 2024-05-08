'use client'
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ReferenceLine, TooltipProps } from 'recharts'
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
        <LineChart width={500} height={200} data={data}>
            <XAxis dataKey="timestamp" />
            <YAxis />
            if(selectedData) {<ReferenceLine x={selectedData?.timestamp} stroke="green" label="Min PAGE" />}
            <Line type="monotone" dataKey="precipMM" stroke="#8884d8" />
        </LineChart>
    )
}

interface CustomTooltipProps extends TooltipProps<number, string> {
    selectedTimestamp: string
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

    return (
        <div>
            <Sparkline data={data} selectedTimestamp={selectedTimestamp} />
            <TimeseriesSlider data={data} onTimestampChange={handleTimestampChange} />
        </div>
    )
}

export default SparklineWithSlider
