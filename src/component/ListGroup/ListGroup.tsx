import { useState } from "react";
import  styles from './ListGroup.module.css'

// passing props
interface prop {
  item: string[];
  heading: string;
}

function ListGroup({ item, heading }: prop) {
  // state management
  let [selected, setSelected] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group container">
        {/* if condition in react */}
        {item.length === 0 && <>no data found</>}

        {/* foreach in react */}
        {item.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelected(index)}
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <ul className={[styles['list-stuff'],styles['list-container']].join(' ') }>
        {/* if condition in react */}
        {item.length === 0 && <>no data found</>}

        {/* foreach in react */}
        {item.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelected(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
