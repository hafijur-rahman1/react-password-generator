import "./App.css";

function App() {
  return (
    <>
      <div className="relative bg-gray-900 w-full h-screen">
        <div className="flex justify-center items-center  p-5 bg-zinc-400">
          <div className="">
            <input type="text" />
            <button>Copy</button>
          </div>
        </div>
        <div className="absolute text-[44px] text-zinc-400  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          Password Generator
        </div>
      </div>
    </>
  );
}

export default App;
