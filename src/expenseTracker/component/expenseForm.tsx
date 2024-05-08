import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

let schema = z.object({
  description: z.string().min(3, { message: "Please enter a valid input" }),
  category: z.string().min(3, { message: "Please enter a valid input" }),
  price: z.number({ invalid_type_error: "Please enter a valid number" }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  formSubmit: (FieldValues) => void;
  categories: string[];
  editItem: FormData;
}

export default function expenseForm({
  formSubmit,
  categories,
  editItem,
}: Props) {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <h3>Add expense</h3>
      {editItem.description}
      <form
        onSubmit={handleSubmit((data) => {
          formSubmit(data);
          reset();
        })}
        className="py-4"
        action=""
      >
        <div className="flex flex-col">
          <label htmlFor="">Description</label>
          <input
            {...register("description")}
            className="border-2 my-1 rounded border-black  p-1"
            type="text"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Category</label>
          <select
            {...register("category")}
            className="border-2 capitalize my-1 rounded border-black  p-1"
          >
            <option selected value=""></option>
            {categories.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500">{errors.category.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">price</label>
          <input
            {...register("price", { valueAsNumber: true })}
            className="border-2 my-1 rounded border-black  p-1"
            type="number"
          />
          {errors.price && (
            <p className="text-red-500">{errors.price.message}</p>
          )}
        </div>
        <button
          className="border-2 mt-4 rounded border-black  px-3 py-1"
          type="submit"
        >
          submit
        </button>
      </form>
    </>
  );
}
