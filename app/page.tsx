import dynamic from 'next/dynamic'
const Map = dynamic(() => import('@/components/Map'), {
    loading: () => <p className="text-center font-semibold justify-center">Loading...</p>,
    ssr: false,
})
const RainTimeseries = dynamic(() => import('@/components/RainTimeseries'), {
    ssr: false,
})

const TrafficTimeseries = dynamic(() => import('@/components/TrafficTimeseries'), {
    loading: () => <p className="text-center font-semibold justify-center">Loading...</p>,
    ssr: false,
})

const Slider = dynamic(() => import('@/components/Slider'), {
    ssr: false,
})

import StoreProvider from '@/app/StoreProvider'

import combinedData from '@/fixtures/combined_data.json'

const Home = () => {
    return (
        <StoreProvider weather_and_traffic_data={combinedData}>
            <div className="h-screen flex flex-col items-center space-y-4 py-6 bg-grey">
                <div className="w-full max-w-5xl p-2 bg-white shadow-lg rounded-lg">
                    <TrafficTimeseries />
                    <RainTimeseries />
                    <Slider />
                </div>
                <div className="w-full max-w-5xl h-full p-4 lg:p-8 bg-white shadow-lg rounded-lg">
                    <Map />
                </div>
            </div>
        </StoreProvider>
    )
}

export default Home
