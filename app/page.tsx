import dynamic from 'next/dynamic'
const Map = dynamic(() => import("@/components/Map"), {
    loading: () => <p>loading...</p>,
    ssr: false
})

const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Map />
    </div>
  );
};

export default Home;
