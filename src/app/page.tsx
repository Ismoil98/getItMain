import "./globals.css";
import Hiro from "@/components/hiro";
import Create from "@/components/create"
import Maping from "@/components/maping"


export default function Home() {
  return (
  <main>
    <h1 className="">
      <Hiro />
      <Maping />
      <Create />
    </h1>
  </main>
  );
}
