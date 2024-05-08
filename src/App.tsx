import ListGroup from "./component/ListGroup/ListGroup";
import Alert from "./component/Alert";
import Button from "./component/button";
import { AlertDismiss } from "./component/AlertDismiss";
import Like from "./component/Like";
import Message from "./component/Message";
import Updateprice from "./component/Updateobject";
import UpdateArray from "./component/updateArray";
import Nav from "./component/stateManagement/nav";
import Cart from "./component/stateManagement/cart";
import Logo from "./component/svg/logo.svg";
import ExpandableText from "./component/ExpandableText";
import ZodValidation from "./component/forms/zodValidation";

// forms
// input binding
import UseRef from "./component/forms/useRef";
import OnChange from "./component/forms/onChange";
import ReactHookorm from "./component/forms/reactHookorm";
import { useState } from "react";

// useEffect
import UsEffect from './component/usEffect'

// mini project
import Expense from "./expenseTracker/component/expense";

function App() {
  let item = ["new york", "LA", "florida"];

  let [cartShow, setCartShow] = useState(false);

  let [product, setProduct] = useState([
    {
      id: 7,
      name: "shoes yellow",
      size: "41",
    },
    {
      id: 10,
      name: "pink top",
      size: "m",
    },
  ]);

  let navItems = [
    { key: "log", displayname: "LOGO", id: 4, comp: Logo },
    { key: "about us", displayname: "About us", id: 4 },
    {
      key: "product",
      displayname: "Product",
      id: 4,
      child: [
        { key: "men", displayName: "Men" },
        { key: "women", displayName: "Women" },
      ],
    },
    { key: "cart", displayname: "Cart", id: 4, item: product.length },
    { key: "sigin", displayname: "sigin", id: 4 },
  ];

  let [game, setGame] = useState({ id: 2, player: { name: "jade" } });
  let [pizza, setpizza] = useState({
    name: "spicy peperoni",
    toppings: ["basil"],
  });

  let [topping, setTopping] = useState("");
  let [count, setcount] = useState(4);
  let [showText, setShowText] = useState(true);

  return (
    <>
      <Nav
        showCart={() => {
          setCartShow(!cartShow);
        }}
        items={navItems}
      ></Nav>
      <div className="p-4">
        <UsEffect></UsEffect>
        <Expense></Expense>
        <ZodValidation></ZodValidation>
        <ReactHookorm></ReactHookorm>
        <OnChange></OnChange>
        <UseRef></UseRef>
        <h1>ExpandableText</h1>
        <ExpandableText
          showAll={() => setShowText(!showText)}
          count={showText ? count : 0}
        >
          <div className="flex flex-col">
            <label htmlFor="setcount">Set count</label>
            <input
              value={count}
              onChange={(e) => setcount(Number(e.target.value))}
              id="setcount"
              className="border-2 my-1 rounded border-black  p-1"
              type="number"
            />
          </div>
        </ExpandableText>
        <h1>Pizza topping</h1>
        {
          <div className="flex w-1/2 gap-2 flex-col">
            <div className="flex ">
              {pizza.name} - {pizza.toppings.join(",")}
            </div>
            <input
              className="border-2 "
              value={topping}
              onChange={(e) => setTopping(e.target.value)}
              type="text"
            />
            <button
              className="border-2 my-1 rounded border-black  p-1"
              onClick={() => {
                if (topping) {
                  setpizza({
                    ...pizza,
                    toppings: [...pizza.toppings, topping],
                  });
                }
                setTopping("");
              }}
            >
              Add ingredient
            </button>
          </div>
        }
        <div className="flex flex-col">
          {game.player.name}
          <button
            className="border-2 w-40 my-1 rounded border-black  p-1"
            onClick={() => {
              setGame({ ...game, player: { ...game.player, name: "bob" } });
            }}
          >
            change player
          </button>
        </div>
        {cartShow && (
          <Cart
            clearCart={() => {
              setProduct([]);
            }}
            product={product}
          ></Cart>
        )}
        <br />
        <br />
        <h1>To do List</h1>
        {/* updating Array */}
        <UpdateArray></UpdateArray>{" "}
        <div className="p-4">
          <strong>Updating object</strong>
          <Updateprice />
        </div>
        {/* state management
       passing props
       if condition in react
       foreach in react
       */}
        <ListGroup item={item} heading="Cities" />
        {/* passing children to components */}
        <br />
        <Alert>
          <b>Hello world this is how you pass child nodes to a complnent</b>
        </Alert>
        <br />
        <Button onclick={() => console.log("hello")}>
          <span>success button</span>
        </Button>
        <br />
        <AlertDismiss>
          <div>
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </div>
        </AlertDismiss>
        <Like></Like>
        <Message></Message>
        <Message></Message>
        <Message></Message>
        <br />
      </div>
    </>
  );
}
export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
