import "./App.css";
import Generator from "./Generator";

function App() {
  return (
    <>
      <div className="relative bg-gray-900 w-full h-screen py-5">
        <Generator />
        <div className="mx-auto top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 text-zinc-500 text-[42px] font-semibold italic">
          Password Generator
        </div>
      </div>
    </>
  );
}

export default App;
