import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/card";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { mainViewData } from "@/data/main-view";
import { siteConfig } from "@/config/site";

export function MainView() {
  const [open, setOpen] = useState(false);

  return (
    <ScrollArea className="relative bg-[#121212]">
      <div className="pb-4">
        <header className="sticky top-0 h-16 bg-black/80 flex flex-row items-center justify-between px-8 z-10">
          <div className="space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="inline-block relative h-8 w-8 p-3 right-3 rounded-full bg-black/80 hover:bg-black/80">
                    <Icons.chevronLeft className="absolute inset-0 m-auto h-4 w-4 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Go back</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="inline-block relative h-8 w-8 p-3 right-3 rounded-full bg-black/80 hover:bg-black/80">
                    <Icons.chevronRight className="absolute inset-0 m-auto h-4 w-4 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Go forward</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="mr-auto flex flex-row items-center relative">
            <label
              htmlFor="search-input"
              className="text-black w-12 h-10 flex items-center justify-center absolute top-1 left-0"
            >
              <Icons.search className="inline h-6 w-6 text-stone-900" />
            </label>
            <input
              autoFocus={true}
              type="text"
              id="search-input"
              className="h-12 pl-12 outline-none text-black font-medium bg-white rounded-3xl text-lg placeholder-black/50 max-w-full w-[50rem]"
              placeholder="Search for songs, artists or Albums"
            />
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="rounded-full">
              <div className="relative transition-all flex flex-row items-center justify-center gap-x-2 bg-black p-[2px] rounded-full hover:bg-stone-700/70">
                <Avatar className="h-7 w-7 shrink-0">
                  <AvatarImage src={`${siteConfig.links.github.url}.png`} />
                  <AvatarFallback>EA</AvatarFallback>
                </Avatar>
                <span className="hidden lg:block font-semibold text-white leading-none">
                  {siteConfig.username}
                </span>
                <span className="hidden lg:block">
                  {open ? (
                    <Icons.caretUp className="h-4 w-4 text-white mr-1" />
                  ) : (
                    <Icons.caretDown className="h-4 w-4 text-white mr-1" />
                  )}
                </span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              className="w-48 shadow-[rgba(0,_0,_0,_0.3)_0px_16px_24px_0px,_rgba(0,_0,_0,_0.2)_0px_6px_8px_0px]"
            >
              <DropdownMenuItem className="p-0">
                <a
                  href={siteConfig.links.github.url}
                  className="flex flex-row items-center w-full justify-between py-2.5 px-3"
                  target="_blank"
                  rel="noopener"
                >
                  <span>Account</span>
                  <Icons.externalLink className="h-4 w-4" />
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="flex align-center justify-center mr-8 mt-5 mb-6">
          <div className="bg-fuchsia-500 h-[400px] min-w-full rounded-3xl p-7 relative">
            <p className="ml-2 mt-9  text-white">New Album</p>
            <span className="text-6xl flex mt-2 font-bold text-white">
              The Second Step: <br></br>Chapter One
            </span>
            <p className="ml-2 mt-6 text-xl font-bold text-black">TREASURE</p>
            <Button className="mx-2 p-1 mt-4 bg-blue-600 text-white py-3 px-10 rounded-xl">
              Create a playlist
            </Button>
            <img
              className="w-[380px] h-[380px] -right-0 bottom-0 absolute rounded-3xl shadow-2xl"
              src="https://t.scdn.co/images/0a74d96e091a495bb09c0d83210910c3"
            />
          </div>
        </div>
        <div className="mt-8 mb-8 px-8">
          {mainViewData.map((data) => (
            <section key={data.section.id} className="mt-9 first:mt-0">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-stone-100 font-bold text-2xl">
                  {data.section.title}
                </h2>
                <Button variant="link" className="font-semibold">
                  Show all
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(180px,_1fr))] overflow-hidden grid-rows-[1fr_0_0_0_0_0] items-stretch justify-start gap-x-6">
                {data.section.content.map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
