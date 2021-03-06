import { SearchIcon } from "@heroicons/react/outline"
import { TwitterTimelineEmbed } from "react-twitter-embed"

const Widgets = () => {
    return (
        <div className="border-l border-zinc-700 space-y-5 py-5 px-6 hidden lg:inline col-span-2 overflow-auto">

            <div className="flex items-center rounded-full space-x-2 px-4 py-2 bg-zinc-800 text-gray-400">
                <SearchIcon className="h-5 w-5" />
                <input
                    type="search"
                    placeholder="Search Twitme"
                    className="flex-1 outline-none bg-transparent placeholder:text-gray-400"
                />
            </div>

            <TwitterTimelineEmbed
                noHeader
                transparent
                theme="dark"
                sourceType="likes"
                screenName="elonmusk"
            />

        </div>
    );
}

export default Widgets;