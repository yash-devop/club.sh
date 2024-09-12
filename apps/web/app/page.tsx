import Image from "next/image";
import {Input} from "@club/ui";

export default function Home() {
  return (
      <>
        <h1 className="bg-red-400 underline">HELLO WORLD</h1>
        <Input placeholder="FINALLY" type="email" />
      </>
  );
}
