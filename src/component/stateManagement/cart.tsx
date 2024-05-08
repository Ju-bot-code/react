interface Props {
  product: any[];
  clearCart: () => void;
}
const cart = ({ product, clearCart }: Props) => {
  return (
    <>
      <div className="p-3 m-1 bg-gray-200 w-[50vw] ">
        {product.map((ele) => (
          <section className="flex justify-between ">
            <div>{ele.name} </div>
            <div>size: {ele.size}</div>
          </section>
        ))}
        <button className="border-2 my-1 rounded border-black  p-1 " onClick={clearCart}>
          Empty cart
        </button>
      </div>
    </>
  );
};

export default cart;
