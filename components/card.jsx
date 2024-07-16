import {
  ContextMenu,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Icons } from "@/components/icons";
import { ResponsiveImage } from "@/components/responsive-image";

export function Card({ id, image, title, text }) {
  const first_item_id = "s01_c01";

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="group py-4 px-4 bg-[#181818] rounded-md hover:bg-[#282828] transition-colors cursor-pointer">
            <div className="relative w-full bg-gradient-to-br from-violet-800 to-teal-500/80 rounded-md">
              <ResponsiveImage
                ratio={1 / 1}
                src={image.src}
                alt={image.alt}
                sizes="(max-width: 910px) 50vw,
              (max-width: 1115px) 33vw,
              (max-width: 1320px) 25vw,
              (max-width: 1522px) 20vw,
              16vw"
              />
              {id === first_item_id && (
                <span className="absolute flex h-5 w-5 animate-bounce items-center justify-center inset-0 m-auto z-10">
                </span>
              )}

              <div className="opacity-0 transition-opacity group-hover:opacity-100 absolute bottom-3 right-3 h-14 w-14 rounded-full bg-green-500 z-10 shadow-md flex items-center justify-center">
                <Icons.play className="h-5 w-5 text-black" />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <p className="font-semibold text-white truncate" title={title}>
                {title}
              </p>
              <p className="font-semibold text-stone-400 text-sm line-clamp-2">
                {text}
              </p>
            </div>
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
    </>
  );
}
