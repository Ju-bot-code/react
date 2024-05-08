import { useState } from "react";
import { onMounted } from "vue";

const Updateprice = () => {
  const [drink, setDrink] = useState({
    name: "coffee",
    price: 10,
  });

  const [obj,setObj]=useState({
    name:'judith',
    age:25,
    height:5.2,
    address:{
      place:'kushalnagar',
      zip:3343
    }
  })

  const [list,setList]=useState([]);

  const handleclick = () => {
    setDrink({ ...drink, name: "beer" });
    setObj({...obj,address:{...obj.address,zip:571234}})
  };

  onMounted

  return (
    <>
      <button onClick={handleclick} className="border p-2 m-4">
        click{" "}
      </button>
      <div className="p-3">  {drink.name}</div>
      <div className="p-3">  {obj.address.zip}</div>
      <div>{Object.entries(obj).map((e,i)=>` ${e[i]} `)}</div>
    </>
  );
};

export default Updateprice;
