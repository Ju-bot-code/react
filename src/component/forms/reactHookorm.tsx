import { FieldValues, useForm } from "react-hook-form";

export default function ReactHookorm() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let submitForm = (data: FieldValues) => {};

  let handleErrors = (data: string) => {
    let required = `is required`;
    let minLength = `Min length is not met`;
    let maxLength = `Max length is not met `;

    if (data && errors[`${data.toLocaleLowerCase()}`]?.type === "required") {
      return (
        <div className="text-red-500 text-sm">
          {data} {required}
        </div>
      );
    }
    if (data && errors[`${data.toLocaleLowerCase()}`]?.type === "minLength") {
      return <div className="text-red-500 text-sm">{minLength}</div>;
    }
    if (data && errors[`${data.toLocaleLowerCase()}`]?.type === "maxLength") {
      return <div className="text-red-500 text-sm">{maxLength}</div>;
    }
  };
  return (
    <>
      <div className="border-b-4 mb-3 pb-4">
        <form onSubmit={handleSubmit(submitForm)}>
          <h1>React hook form</h1>
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="border-2 my-1 rounded border-black  p-1"
              type="text"
              id="name"
              {...register("name", { required: true, minLength: 8 })}
            />
            {handleErrors("Name")}
          </div>
          <div className="flex flex-col">
            <label htmlFor="age">Age</label>
            <input
              className="border-2 my-1 rounded border-black  p-1"
              type="text"
              id="age"
              {...register("age", {
                required: true,
                minLength: 1,
                maxLength: 2,
              })}
            />
            {handleErrors("Age")}
          </div>
          <button
            className="bg-gray-600 text-white p-2 m-2 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
