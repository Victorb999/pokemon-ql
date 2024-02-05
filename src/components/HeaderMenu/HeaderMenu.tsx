import Link from "next/link";

export const HeaderMenu = () => {
  return (
    <div className="flex items-center p-2 gap-2">
      <Link href={"/"}>
        <h1 className="text-md font-bold">Home</h1>
      </Link>
      <Link href={"/generation"}>
        <h1 className="text-md font-bold">Generation</h1>
      </Link>
    </div>
  );
};
