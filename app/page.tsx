import Image from "next/image";
import { assets } from "@/utils/assets-utils";

export default function Home() {
  return (
    <main>
      <Image
        alt="gradient"
        width={1200}
        height={1200}
        role="presentation"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}
      />
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />
    </main>
  );
}
