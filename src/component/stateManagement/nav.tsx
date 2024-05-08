interface Props {
  items: any[];
  showCart: () => void;
}
export const nav = ({ items, showCart }: Props) => {
  return (
    <>
      <div
        onClick={showCart}
        className="w-full bg-gray-700 py-1 px-3 text-white font-semibold "
      >
        <ul className="flex justify-between  gap-4">
          {items.map((ele) => (
            <li className="mt-2">
              {ele.displayname}
              {ele.item && <> ({ele.item}) </>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default nav;
