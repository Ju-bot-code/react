import { useRef, useEffect } from "react";
export default function UsEffect() {
  let ref = useRef(null);

  //   excutes after render
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });

  useEffect(()=>{
    document.title='my app'
  })

  return (
    <>
      <input className="border" ref={ref} type="text" />
    </>
  );
}
