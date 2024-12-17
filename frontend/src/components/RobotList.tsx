import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs";
import RobotTable from "./RobotTable";

type Robot = {
    "Robot ID": string,
    "Online/Offline": boolean,
    "Battery Percentage": number,
    "CPU Usage": number,
    "RAM Consumption": number,
    "Last Updated": string,
    "Location Coordinates": number[]
  }
  
type RobotsProps = {
    allActiveRobots: Robot[];
    onlineRobots: Robot[];
}

export default function ({ allActiveRobots, onlineRobots }: RobotsProps) {

    return (
        <div className="flex flex-col gap-5">
            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">All Robots</h1>
            </div>
            <div>
                <Tabs defaultValue="all" className="w-full overflow-scroll">
                    <TabsList>
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="online">Online</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <RobotTable Robots={allActiveRobots} />
                    </TabsContent>
                    <TabsContent value="online">
                        <RobotTable Robots={onlineRobots} />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}