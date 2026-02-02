import Image from "next/image";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
}

export function BrowserFrame({ src, alt, url }: BrowserFrameProps) {
  return (
    <div className="bg-[#e8e8e8] dark:bg-slate-700 rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
      {/* Browser header */}
      <div className="bg-[#e0e0e0] dark:bg-slate-600 px-4 py-3 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27ca40]" />
        </div>

        {/* URL bar */}
        {url && (
          <div className="flex-1 max-w-md">
            <div className="bg-white dark:bg-slate-800 rounded-md px-3 py-1.5 text-xs text-gray-500 dark:text-gray-400 truncate">
              {url}
            </div>
          </div>
        )}
      </div>

      {/* Screenshot */}
      <div className="relative aspect-[16/10] bg-white dark:bg-slate-800">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
