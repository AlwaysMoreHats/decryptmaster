import WordContextProvider from "@/components/WordContextProvider";
import Keyboard from "@/components/Keyboard";
import Character from "@/components/Character";


export default function Home() {
  return (
    <main className="flex gap-8 flex-col items-center justify-center w-screen h-screen">
      <WordContextProvider>
        <Keyboard />
        <div className="grid grid-cols-2 2xl:grid-cols-4 gap-8w">
          <Character name="joro" />
          <Character name="syn" />
          <Character name="maz" />
          <Character name="nix" />
        </div>
      </WordContextProvider>
    </main>
  );
}
