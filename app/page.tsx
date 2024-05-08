import dynamic from 'next/dynamic'
const Map = dynamic(() => import("@/components/Map"), {
    loading: () => <p>loading...</p>,
    ssr: false
})
const RainTimeseries = dynamic(() => import('@/components/RainTimeseries'), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

const TrafficTimeseries = dynamic(() => import('@/components/TrafficTimeseries'), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

const RainfallChart = dynamic(() => import('@/components/RainfallChart'), {
  loading: () => <p>loading...</p>,
  ssr: false,
});

import rainfallData from '@/fixtures/hourly_precip_mm.json'
import trafficData from '@/fixtures/traffic_history.json'

const Home = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center space-y-4">
      <div className="w-4/5 h-1/4">
        <TrafficTimeseries data={trafficData} />
      </div>
      <div className="w-4/5 h-1/4">
        <RainfallChart data={rainfallData} />
      </div>
      <div className="w-4/5 h-2/4">
      </div>
    </div>
  );
};

export default Home;
