import { Icons } from "@/components/icons";

export function Sidebar() {
  return (
    <div className="bg-black p-6">
      <span className="text-3xl font-semibold text-white">
        Music Player
      </span>
      <ul className="mt-9 space-y-4">
        <p className="mr-2 mt-6 text-sm font-semibold text-slate-400 group-hover:text-white">
          Features
        </p>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Icons.home className="inline h-6 w-6 text-white" />
          <p className="ml-4 text-sm font-semibold text-white">Home</p>
        </li>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Icons.search className="inline h-6 w-6 text-stone-400" />
          <p className="ml-4 text-sm font-semibold text-stone-300 group-hover:text-white">
            Discover
          </p>
        </li>
        <li className="group flex flex-row items-center justify-start cursor-pointer">
          <Icons.library className="inline h-6 w-6 text-stone-400" />
          <p className="ml-4 text-sm font-semibold text-stone-300 group-hover:text-white">
            Collections
          </p>
        </li>
      </ul>
      <p className="mr-2 mt-6 text-sm font-semibold text-slate-400 group-hover:text-white">
        Library
      </p>
      <ul className="mt-6 space-y-4">
        <li className="group flex flex-row items-center justify-start transition-colors cursor-pointer">
          <div className="relative h-6 w-6 bg-stone-300 group-hover:bg-white rounded-sm">
            <Icons.plus className="m-auto inline absolute inset-0 h-3 w-3 text-stone-600 group-hover:text-black" />
          </div>
          <p className="ml-4 text-sm font-semibold text-stone-300 group-hover:text-white">
            Download
          </p>
        </li>
        <li className="group flex flex-row items-center justify-start transition-colors cursor-pointer">
          <div className="relative h-6 w-6 bg-gradient-to-br from-violet-800 group-hover:from-violet-600 to-teal-500 group-hover:to-teal-300 rounded-sm">
            <Icons.heart className="m-auto inline absolute inset-0 h-3 w-3 text-stone-300 group-hover:text-white" />
          </div>
          <p className="ml-4 text-sm font-semibold text-stone-300 group-hover:text-white">
            Favourites
          </p>
        </li>
      </ul>
      <hr className="mt-4 border-stone-500" />
    </div>
  );
}
