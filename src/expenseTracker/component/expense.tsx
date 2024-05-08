import ExpenseList from "./expenseList";
import ExpenseForm from "./expenseForm";
import ExpenseSort from "./expenseSort.tsx";
import { useState } from "react";

interface items {
  Description: string;
  Category: string;
  price: number;
  action: string;
}

export default function expense() {
  let header = ["Description", "Price", "Category", ""];
  let categories = ["groceries", "utilites", "entertainment"];
  let [selectedCategory, setSelectedCategory] = useState("");

  let [items, setItems] = useState<items[]>([
    {
      id: 1,
      description: "milk",
      category: "groceries",
      price: 4,
      action: "delete",
    },
    {
      id: 2,
      description: "party",
      category: "entertainment",
      price: 4,
      action: "delete",
    },
    {
      id: 3,
      description: "current bill",
      category: "utilites",
      price: 4,
      action: "delete",
    },
  ]);
  let [editItem, seteditItem] = useState<items[]>({});

  let filtersItems = selectedCategory
    ? items.filter((e) => e.category === selectedCategory)
    : items;

  let formSubmit = (data) => {
    setItems([...items, { ...data, action: "delete", id: items.length + 1 }]);
  };

  let action = (actionType, id) => {
    if (actionType === "delete") {
      setItems(items.filter((e) => e.id !== id));
    }
    if (actionType === "edit") {
      seteditItem(items.find((e) => e.id !== id));
    }
  };

  let handleSort = (data) => {
    setSelectedCategory(data.category);
  };

  return (
    <>
      <h1 className="pb-3">Expense tracker project</h1>
      <div className="pb-10 space-y-3 border-b-4 mb-3">
        <ExpenseForm
          editItem={editItem}
          categories={categories}
          formSubmit={formSubmit}
        ></ExpenseForm>
        <ExpenseSort
          handleSort={handleSort}
          categories={categories}
        ></ExpenseSort>
        <ExpenseList
          items={filtersItems}
          action={action}
          header={header}
        ></ExpenseList>
      </div>
    </>
  );
}
