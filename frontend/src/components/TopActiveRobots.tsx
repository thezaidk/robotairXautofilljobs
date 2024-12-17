import RobotCard from "./RobotCard";

type Robot = {
  "Robot ID": string,
  "Online/Offline": boolean,
  "Battery Percentage": number,
  "CPU Usage": number,
  "RAM Consumption": number,
  "Last Updated": string,
  "Location Coordinates": number[]
}

type TopActiveRobotsProps = {
  activeRobots: Robot[];
}

export default function ({ activeRobots }: TopActiveRobotsProps) {
    return (
        <div className="flex flex-col gap-5 pt-10 border-t">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Top Active Robots</h1>
          <div className="flex flex-wrap justify-center gap-5">
            {activeRobots.slice(0, 8).map((robot) => (
              <RobotCard key={robot["Robot ID"]} Robot={robot} />
            ))}
          </div>
        </div>
    )
}