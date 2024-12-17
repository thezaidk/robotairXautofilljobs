import { Github, Mail } from "lucide-react";

export default function () {
    return (
        <footer className="flex justify-center w-full bg-white text-zinc-950 rounded-lg mt-10 p-5">
            <div className="flex items-center gap-5">
                <a href="mailto:zkarigar1@gmail.com">
                    <Mail size={20} />
                </a>
                <h4 className="text-sm font-medium">Developed by Zaid Karigar</h4>
                <a href="https://github.com/thezaidk">
                    <Github size={20} />
                </a>
            </div>
        </footer>
    )
}