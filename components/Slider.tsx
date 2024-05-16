'use client'
import Slider, { SliderProps } from 'rc-slider'
import 'rc-slider/assets/index.css'
import moment from 'moment'

import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks'

import { setSelectedTimestamp } from '@/lib/redux/store'
import { selectData, selectSelectedTimestamp } from '@/lib/redux/store'

const SparklineWithSlider: React.FC = () => {
    const selectedTimestamp = useAppSelector(selectSelectedTimestamp)
    const data = useAppSelector(selectData)

    const dispatch = useAppDispatch()

    function getHumanReadableLocalTime(selectedTimestamp: string): string {
        return moment(selectedTimestamp).format('dddd - Do MMMM YYYY - h:mm A')
    }

    const handleSliderChange: SliderProps['onChange'] = (value: number | number[]) => {
        if (typeof value === 'number') {
            dispatch(setSelectedTimestamp(data[value].timestamp))
        }
    }

    return (
        <>
            <div className="flex flex-row-reverse pt-2 px-2">
                <div className="w-9/12 sm:w-10/12 lg:w-11/12 pr-4">
                    <Slider min={0} max={data.length - 1} step={1} onChange={handleSliderChange} />
                </div>
            </div>
            <div className="flex flex-row portrait:pt-2">
                <div className="w-full">
                    <h2 className="text-center p-2 font-bold text-l">
                        <span className="sm:inline block">{getHumanReadableLocalTime(selectedTimestamp)} </span>
                        <span className="invisible sm:visible"> - Local Time</span>
                    </h2>
                </div>
            </div>
        </>
    )
}

export default SparklineWithSlider
