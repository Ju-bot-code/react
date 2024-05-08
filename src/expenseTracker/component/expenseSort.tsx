import { useForm } from "react-hook-form";

interface Props {
  categories: string[];
  handleSort: (data) => void;
}

export default function ExpenseSort({ categories, handleSort }: Props) {
  let { register, handleSubmit } = useForm();

  return (
    <>
      <h3>Filter expense</h3>
      <div className="pb-3">
        <form onChange={handleSubmit(handleSort)}>
          <select
            {...register("category")}
            className="border-2 w-full capitalize my-1 rounded border-black  p-1"
          >
            <option value="">All</option>
            {categories.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}
