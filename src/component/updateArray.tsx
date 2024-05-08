import { useState, useRef } from "react";

function updateArray() {
  let [buttonText, setButtonText] = useState("Add");
  let [List, setList] = useState([]);
  let [item, setItem] = useState("");
  let [error, setError] = useState("");
  const nameRef = useRef(null);

  const handelAdd = (e: any) => {
    if (item) setList([...List, item]);
    setItem("");
    nameRef.current?.focus();
    setButtonText("Add");
    setError("sdsd");
  };

  const handleDelete = (ele: string) => {
    setList(List.filter((e) => e !== ele));
  };

  const handleEdit = (ele: string) => {
    setItem(ele);
    handleDelete(ele);
    setButtonText("Edit");
  };

  const Error = (item: any) => {
    if (item == '') {
      return <p className="text-red-500  px-3 py-1">Invalid item</p>;
    }
  };

  return (
    <>
      <div className="pb-40">
        <input
          ref={nameRef}
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="bg-gray-600 text-white p-2 m-2 rounded"
          type="text"
        />
        <Error item={item}></Error>
        <button
          onClick={(e) => handelAdd(e)}
          className="bg-gray-600 text-white p-2 m-2 rounded"
        >
          {buttonText}
        </button>

        {List.map((ele) => (
          <div className="flex">
            <div className="px-4 py-1">{ele}</div>{" "}
            <button onClick={() => handleEdit(ele)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-green-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
            <button onClick={() => handleDelete(ele)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default updateArray;
