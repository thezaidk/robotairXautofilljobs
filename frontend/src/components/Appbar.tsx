import { Github } from "lucide-react";

export default function () {
    return (
        <header className="flex justify-center center items-center z-[999] relative mt-24 sm:mt-36">
            <div className="fixed flex justify-center sm:justify-between items-center top-0 h-[4rem] w-full rounded-none border border-white border-opacity-40 bg-zinc-900 bg-opacity-60 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full px-5">
                <div>
                    <h1 className="font-mono font-bold sm:text-lg text-blue-300">Robotair X AutofillJobs</h1>
                </div>
                <a href="https://github.com/thezaidk">
                    <div className="hidden sm:flex items-center gap-2">
                        <h2 className="text-xs font-medium text-blue-50">Developed by Zaid Karigar</h2>
                        
                            <Github size={20} />
                    </div>
                </a>
            </div>
        </header>
    )
}