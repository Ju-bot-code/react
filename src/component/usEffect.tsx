import { useRef, useEffect } from "react";
export default function UsEffect() {
  let ref = useRef(null);

  //   excutes after render
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(() => {
    document.title = "my app";
  });

  return (
    <>
      <div className="border-b-4 mb-3 pb-4">
        <h1>useEffect()</h1>
        <input className="border" ref={ref} type="text" />
      </div>
    </>
  );
}
