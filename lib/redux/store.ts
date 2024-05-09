import { createSlice, combineSlices, type PayloadAction, configureStore } from '@reduxjs/toolkit'

export type WeatherAndTrafficDataType = {
    timestamp: string
    filename: string
    percentage: number
    precipMM: number
}

export type WeatherAndTrafficState = {
    data: WeatherAndTrafficDataType[]
    ui: {
        selectedTimestamp: string
    }
}

import combinedData from '@/fixtures/combined_data.json'

const initialState: WeatherAndTrafficState = {
    data: combinedData,
    ui: {
        selectedTimestamp: combinedData[0].timestamp,
    },
}

const findDatumByTimestamp = (state: WeatherAndTrafficState) => {
    return state.data.find((data: WeatherAndTrafficDataType) => data.timestamp === state.ui.selectedTimestamp)
}

export const weatherAndTrafficSlice = createSlice({
    name: 'weatherAndTrafficSlice',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<WeatherAndTrafficDataType[]>) => {
            state.data = action.payload
            state.ui.selectedTimestamp = action.payload[0].timestamp
        },
        setSelectedTimestamp: (state, action: PayloadAction<string>) => {
            state.ui.selectedTimestamp = action.payload
        },
    },
    selectors: {
        selectDatum: function (state: WeatherAndTrafficState) {
            return findDatumByTimestamp(state)
        },
        selectSelectedTimestamp: (state: WeatherAndTrafficState) => state.ui.selectedTimestamp,
        selectData: (state: WeatherAndTrafficState) => state.data,
        selectTrafficMap: (state: WeatherAndTrafficState) => {
            const datum = findDatumByTimestamp(state) || state.data[0]
            return datum?.filename
        },
    },
})

export const { setData, setSelectedTimestamp } = weatherAndTrafficSlice.actions
export const { selectDatum, selectSelectedTimestamp, selectData, selectTrafficMap } = weatherAndTrafficSlice.selectors

//not yet needed
const rootReducer = combineSlices(weatherAndTrafficSlice)

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
