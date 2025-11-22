import Image from "next/image"
import Link from "next/link"

import Pokeball from "../../public/pokeball.svg"

export const HeaderMenu = () => {
  return (
    <div className="flex items-center p-4 gap-4 
    sticky top-0 bg-stone-950 text-stone-100
    border-b border-stone-800 shadow-md subpixel-antialiased">
      <Link href={"/"}>
        <Image src={Pokeball} width={50} height={50} alt="pokemon" />
      </Link>
      <Link href={"/"}>
        <h1 className="text-md font-bold tracking-widest">Home</h1>
      </Link>
      <Link href={"/generation"}>
        <h1 className="text-md font-bold tracking-widest">Generation</h1>
      </Link>
      <Link href={"/type"}>
        <h1 className="text-md font-bold tracking-widest">Type</h1>
      </Link>
    </div>
  )
}
