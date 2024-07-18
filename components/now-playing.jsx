import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
export function NowPlaying() {
  return (
    <div className="bg-black p-6">
      <div className="flex items-center">
        <Avatar className="h-14 w-14 shrink-0">
          <AvatarFallback className="bg-gradient-to-br from-violet-800 to-teal-500 rounded-sm"></AvatarFallback>
        </Avatar>
        <h3 className="ml-4 text-xl font-semibold text-white group-hover:text-white">
          Timothy Luca
        </h3>
        <Icons.chevronRight className="inset-0 m-auto h-4 w-4 mr-2 text-white rotate-90" />
      </div>
      <ul className="mt-9 space-y-4">
        <p2 className="mr-2 mt-6 text-xl font-semibold text-white group-hover:text-white">
          Recently Played
          <span className="ml-12 text-xs tracking-widest text-stone-400">
            See All
          </span>
        </p2>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Avatar className="h-10 w-10 shrink-5 bg-gradient-to-br from-pink-500 to-blue-500 rounded-sm"></Avatar>
          <p className="ml-3 text-lg font-extralight text-white">
            Shape of You
          </p>
          <span className="ml-auto text-xs tracking-widest text-stone-400">
            4 min ago
          </span>
        </li>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Avatar className="h-10 w-10 shrink-5 bg-gradient-to-br from-violet-200 to-teal-800 rounded-sm"></Avatar>
          <p className="ml-4 text-lg font-extralight text-white group-hover:text-white">
            Land of sun
          </p>
          <span className="ml-auto text-xs tracking-widest text-stone-400">
            2 hr ago
          </span>
        </li>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Avatar className="h-10 w-10 shrink-5 bg-gradient-to-br from-violet-700 to-teal-200 rounded-sm"></Avatar>
          <p className="ml-4 text-lg font-extralight  text-white group-hover:text-white">
            Can't look back
          </p>
          <span className="ml-auto text-xs tracking-widest text-stone-400">
            5 hr ago
          </span>
        </li>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Avatar className="h-10 w-10 shrink-5 bg-gradient-to-br from-violet-500 to-teal-700 rounded-sm"></Avatar>
          <p className="ml-4 text-lg font-extralight text-white group-hover:text-white">
            underated
          </p>
          <span className="ml-auto text-xs tracking-widest text-stone-400">
            1 hr ago
          </span>
        </li>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Avatar className="h-10 w-10 shrink-5 bg-gradient-to-br from-violet-200 to-teal-600 rounded-sm"></Avatar>
          <p className="ml-4 text-lg font-extralight text-white group-hover:text-white">
            Excuses
          </p>
          <span className="ml-auto text-xs tracking-widest text-stone-400">
            2 hr ago
          </span>
        </li>
      </ul>
      <p className="mr-3 mt-8 text-xl font-semibold text-white group-hover:text-white">
        My playlists
        <span className="ml-20 text-xs tracking-widest text-stone-400">
          See All
        </span>
      </p>
      <ul className="mt-6 space-y-4">
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Avatar className="h-10 w-10 shrink-5 bg-gradient-to-br from-red-500 to-green-400 rounded-sm"></Avatar>
          <p className="ml-4 text-lg font-extralight text-white group-hover:text-white">
            Land of sun
          </p>
          <span className="ml-auto text-xs tracking-widest text-stone-400">
            2 hr ago
          </span>
        </li>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Avatar className="h-10 w-10 shrink-5 bg-gradient-to-br from-purple-500 to-blue-300 rounded-sm"></Avatar>
          <p className="ml-4 text-lg font-extralight text-white group-hover:text-white">
            Land of sun
          </p>
          <span className="ml-auto text-xs tracking-widest text-stone-400">
            2 hr ago
          </span>
        </li>
      </ul>
      <Button
        variant="contained"
        class="bg-slate-300 text-black font-bold py-3 px-14 mt-9 rounded-xl"
      >
        Create A Playlist
      </Button>
    </div>
  );
}
