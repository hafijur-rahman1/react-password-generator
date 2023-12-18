import { useCallback, useEffect, useRef } from "react";
import { useState } from "react";

const Generator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [cahrAllowed, setCahrAllowed] = useState(false);

  //password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumberAllowed) str += "0123456789";
    if (cahrAllowed) str += "!@#$%^&*~`-_+={}[]";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumberAllowed, cahrAllowed, setPassword]);
  //use referance
  const passwordRef = useRef(null);
  //copy password
  const handleCopyPassword = () => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 4);

    window.navigator.clipboard.writeText(password);
  };
  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, cahrAllowed, passwordGenerator]);
  return (
    <div className="w-full max-w-md mx-auto rounded-lg text-zinc-300   p-5 bg-zinc-800">
      <div className="flex overflow-hidden shadow-2xl rounded-lg p-3 mb-2">
        <input
          className="outline-none rounded-md w-full py-2 px-4"
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-orange-800 text-white px-4 py-2  shrink-0 mx-1 rounded-md text-center"
          onClick={handleCopyPassword}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-3 px-4">
        <div className="flex items-center gap-x-1">
          <input
            className="carsor-pointer"
            type="range"
            min={6}
            max={99}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={isNumberAllowed}
            id="numberInput"
            onChange={() => setIsNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name=""
            id="characterInput"
            onChange={() => setCahrAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Generator;
