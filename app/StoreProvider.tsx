'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/lib/redux/store'
import { WeatherAndTrafficDataType, weatherAndTrafficSlice } from '@/lib/redux/store'

export default function StoreProvider({
    children,
    weather_and_traffic_data,
}: {
    children: React.ReactNode
    weather_and_traffic_data: WeatherAndTrafficDataType[]
}) {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
        storeRef.current.dispatch(weatherAndTrafficSlice.actions.setData(weather_and_traffic_data))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}
