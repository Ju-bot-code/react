let count = 0;
const Message = () => {

  count++;
  return (
    <>
      <div className="px-4">Hello , the count is {count}</div>
    </>
  );
};

export default Message;
