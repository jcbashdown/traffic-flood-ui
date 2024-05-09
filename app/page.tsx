import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/Map'), {
    loading: () => <p>loading...</p>,
    ssr: false,
})
const RainTimeseries = dynamic(() => import('@/components/RainTimeseries'), {
    loading: () => <p>loading...</p>,
    ssr: false,
})

const TrafficTimeseries = dynamic(() => import('@/components/TrafficTimeseries'), {
    loading: () => <p>loading...</p>,
    ssr: false,
})

const RainfallChart = dynamic(() => import('@/components/RainfallChart'), {
    loading: () => <p>loading...</p>,
    ssr: false,
})

const SparklineWithSlider = dynamic(() => import('@/components/SparklineWithSlider'), {
    loading: () => <p>loading...</p>,
    ssr: false,
})

import StoreProvider from '@/app/StoreProvider'

import combinedData from '@/fixtures/combined_data.json'

const Home = () => {
    return (
        <StoreProvider weather_and_traffic_data={combinedData}>
            <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
                <div className="w-4/5 h-2/4">
                    <SparklineWithSlider />
                </div>
                <div className="w-4/5 h-2/4">
                    <Map />
                </div>
            </div>
        </StoreProvider>
    )
}

export default Home
