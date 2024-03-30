import Image from "next/image";

export default function RoundedIcon({src="/icon.png", width=32, alt="icon",}) {
  return (
    <Image className={`rounded-full h-[${width}px] w-[${width}px]`}
    src={src} alt={alt}
      width={width} height={width}/>
    )
}