interface items {
  id: number;
  description: string;
  category: string;
  price: number;
  action: string;
}

interface Props {
  items: items[];
  header: string[];
  action: (data) => void;
}
export default function ExpenseList({ items, header, action }: Props) {
  return (
    <>
     <h3>List expense</h3>
      <table className="w-full border-collapse border border-pink-500 table-fixed">
        <tr>
          {header.map((th) => (
            <td className="  border border-pink-500 uppercase text-sm font-black p-2 ">
              {th}
            </td>
          ))}
        </tr>
        {items.map((item) => (
          <tr>
            <td className="  border border-pink-500 p-2 ">
              {item.description}
            </td>
            <td className="  border border-pink-500 p-2 ">{item.price} $</td>
            <td className="  border border-pink-500 p-2 ">{item.category}</td>
            <td className="  border border-pink-500 p-2 ">
              {item.action === "delete" && (
                <button
                  onClick={() => action("delete", item.id)}
                  className="border rounded p-2 border-red-600"
                >
                  delete
                </button>
              )}
              {(
                <button
                  onClick={() => action("edit", item.id)}
                  className="border rounded p-2 border-red-600"
                >
                  Edit
                </button>
              )}
            </td>
          </tr>
        ))}
        <tr>
          <td className="  border border-pink-500 uppercase text-sm font-black p-2">
            Total
          </td>
          <td className="  border border-pink-500 p-2 ">
            {items.reduce((acc, item) => acc + item.price, 0)}$
          </td>
          <td className="  border border-pink-500 p-2 "></td>
          <td className="  border border-pink-500 p-2 "></td>
        </tr>
      </table>
    </>
  );
}
