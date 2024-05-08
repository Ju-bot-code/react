import React, { useRef, useState } from "react";

export default function forms() {
  let name = useRef<HTMLInputElement>(null);
  let age = useRef<HTMLInputElement>(null);
  let [person, setPerson] = useState({ name: "", age: "" });
  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPerson({
      name: name?.current?.value || "",
      age: age?.current?.value || "",
    });
  };
  return (
    <>
      <div className="border-b-2 pb-4">
        <form onSubmit={handleSubmit} action="" className="w-1/2">
          <h1>useref forms</h1>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              ref={name}
              id="name"
              className="border-2 my-1 rounded border-black  p-1"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age">Age</label>
            <input
              ref={age}
              id="age"
              className="border-2 my-1 rounded border-black  p-1"
              type="number"
            />
          </div>
          <button
            className="bg-gray-600 text-white p-2 m-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>

        {person.name.length > 0 && (
          <>
            name : {person?.name} <br /> age : {person?.age}
          </>
        )}
      </div>
    </>
  );
}
