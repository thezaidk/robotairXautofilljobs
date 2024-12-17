import { useEffect, useState } from "react";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import RobotList from "./components/RobotList";
import TopActiveRobots from "./components/TopActiveRobots";
import LiveMap from "./components/LiveMap";

function App() {
  const [allActiveRobots, setAllActiveRobots] = useState([]);
  const [onlineRobots, setOnlineRobots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setAllActiveRobots(data.all);
      setOnlineRobots(data.online);
    }
    setLoading(false);

    socket.onerror = (error) => {
      console.error("WebSocket error:",error);
    };

    return () => socket.close();
  }, []);

  return (
    <div className="min-h-screen min-w-full bg-zinc-950 text-white overflow-hidden">
      <div className="bg-[#363259] absolute top-[-1rem] z-5 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <div className="flex flex-col justify-center items-center pb-2 px-5 sm:px-20">
        <div className="bg-[#3d32b4] absolute top-[60rem] z-5 right-[11rem] h-[10.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5e3c3d]"></div>
        <Appbar />
        {loading ? 
          <div>Loading...</div>
          :
          <main className="flex flex-1 flex-col w-full gap-10 md:gap-20">
            <LiveMap
              center={[20, 0]}
              zoom={2}
              locations={allActiveRobots.map(robot => ({
                lat: robot["Location Coordinates"][0],
                lng: robot["Location Coordinates"][1],
                popupText: `Robot ID: ${robot["Robot ID"]}`,
              }))}
            />
            <TopActiveRobots activeRobots={allActiveRobots} />
            <RobotList allActiveRobots={allActiveRobots} onlineRobots={onlineRobots} />
          </main>
        }
        <Footer />
      </div>
    </div>
  )
}

export default App
