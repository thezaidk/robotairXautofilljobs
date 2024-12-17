
type Robot = {
    "Robot ID": string,
    "Online/Offline": boolean,
    "Battery Percentage": number,
    "CPU Usage": number,
    "RAM Consumption": number,
    "Last Updated": string,
    "Location Coordinates": number[]
}

export default function({ Robot }: { Robot: Robot}) {

    return (
        <div className="flex flex-col gap-4 max-w-[19rem] border border-zinc-500 rounded-lg shadow-xs shadow-white p-5">
            <div>
                <h3 className="text-xs font-semibold">Robot ID: {Robot["Robot ID"]}</h3>
            </div>
            <div className="space-y-5">
                <div className="flex flex-col gap-1 items-center">
                    <div className="flex">
                        <p className="p-1 font-bold">{Robot["Online/Offline"] ? "Online" : "Offline"}</p>
                        <span className="relative flex h-3 w-3">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${Robot["Online/Offline"] ? "bg-sky-400" : "bg-red-500"} opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-3 w-3 ${Robot["Online/Offline"] ? "bg-sky-400" : "bg-red-500"}`}></span>
                        </span>
                    </div>
                    <p className="text-lg">Battery: <span className={`font-bold ${Robot["Online/Offline"] ? "text-green-500" : "text-red-500"}`}>{Robot["Battery Percentage"]}%</span></p>
                </div>
                <div className="grid grid-cols-2 text-xs">
                    <p>CPU Usage: <span className="font-bold">{Robot["CPU Usage"]}</span></p>
                    <p>RAM Consumption: <span className="font-bold">{Robot["RAM Consumption"]}</span></p>
                </div>
                <div>
                    <p className="text-sm text-center">Location Coordinates: <span className="font-bold">{Robot["Location Coordinates"][0]} - {Robot["Location Coordinates"][1]}</span></p>
                </div>
            </div>
            <div className="flex justify-center">
                <p className="text-xs text-zinc-400">Last Updated: {Robot["Last Updated"]}</p>
            </div>
        </div>
    )
}