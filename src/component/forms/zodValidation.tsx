import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

let schema = z.object({
  name: z.string().min(3, { Message: "Please enter atleast 5 characters" }),
  age: z.number({ invalid_type_error: "Age is a Required field" }).min(2),
});

type FormData = z.infer<typeof schema>;

export default function zodValidation() {
  let {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  let submitForm = (data: FieldValues) => {
    console.log(data, "datafgbgfb");
  };

  return (
    <div className="border-b-4 mb-3 pb-4">
      <h1>zodValidation</h1>

      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col">
          <label htmlFor="name">name</label>
          <input
            className="border-2 my-1 rounded border-black  p-1"
            type="text"
            {...register("name")}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="age">age</label>
          <input
            className="border-2 my-1 rounded border-black  p-1"
            {...register("age", { valueAsNumber: true })}
            type="number"
          />
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>
        <button
          disabled={!isValid}
          className="bg-gray-600 disabled:bg-gray-300 text-white p-2 m-2 rounded"
          type="submit"
        >
          submit
        </button>
      </form>
    </div>
  );
}
