import { useState } from "react";

export default function OnChange() {
  let [person, setPerson] = useState({ name: "", age: "" });
  let handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="border-b-4 mb-3 pb-4">
      <form onSubmit={handleSubmit}>
        <h1>OnChange</h1>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setPerson({ ...person, name: e.target.value })}
            value={person.name}
            className="border-2 my-1 rounded border-black  p-1"
            id="name"
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="age">Age</label>
          <input
            onChange={(e) => setPerson({ ...person, age: e.target.value })}
            className="border-2 my-1 rounded border-black  p-1"
            id="age"
            value={person.age}
            name="age"
            type="number"
          />
        </div>
        <button className="bg-gray-600 text-white p-2 m-2 rounded">
          submit
        </button>
      </form>
    </div>
  );
}
