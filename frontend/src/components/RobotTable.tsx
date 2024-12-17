import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

type Robot = {
"Robot ID": string,
"Online/Offline": boolean,
"Battery Percentage": number,
"CPU Usage": number,
"RAM Consumption": number,
"Last Updated": string,
"Location Coordinates": number[]
}
  
type ActiveRobotsProps = {
    Robots: Robot[];
}

export default function ({ Robots }: ActiveRobotsProps) {
    return (
        <div className="w-full">
            <Table>
                <TableCaption>A list of recent live robot.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[200px]">ID</TableHead>
                    <TableHead>Live Status</TableHead>
                    <TableHead>Battery</TableHead>
                    <TableHead>CPU Usage</TableHead>
                    <TableHead>RAM Consumption</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-right w-[200px]">Last Updated</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Robots.map(robot => (
                        <TableRow>
                            <TableCell className="font-medium">{robot["Robot ID"]}</TableCell>
                            <TableCell className={`${robot["Online/Offline"] ? "text-green-600" : "text-red-600"} font-bold`}>{robot["Online/Offline"] ? "Online" : "Offline"}</TableCell>
                            <TableCell>{robot["Battery Percentage"]}%</TableCell>
                            <TableCell>{robot["CPU Usage"]}</TableCell>
                            <TableCell>{robot["RAM Consumption"]}</TableCell>
                            <TableCell>{robot["Location Coordinates"][0]} - {robot["Location Coordinates"][1]}</TableCell>
                            <TableCell className="text-right">{robot["Last Updated"]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}