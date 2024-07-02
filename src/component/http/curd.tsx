import { useEffect, useState, useRef } from "react";
import { CanceledError, AxiosError } from "../../services/api-client";
import postService, { post } from "../../services/post-service";

export default function Curd() {
  let [list, setList] = useState<post[]>([]);
  let [error, setError] = useState("");
  let [isLoading, setisLoading] = useState(false);
  let [editID, setEditID] = useState(0);
  let title = useRef<HTMLInputElement>(null);

  let handleGetData = async (result: any) => {
    setisLoading(true);
    try {
      let data = await result;

      setList(data.data);
      setisLoading(false);
      // console.log(data, "list");
      //   type annotiation is not allowed in the catch block
    } catch (err) {
      setisLoading(false);
      if (err instanceof CanceledError) return;
      setError((err as AxiosError).message);
      console.log(err, "err");
    }
  };

  useEffect(() => {
    let { result, cancel } = postService.getAllPost();

    handleGetData(result);
    return () => cancel();
  }, []);

  // PESIMISTIC APPROCH
  // let handleDelete = async (id: num) => {
  //   try {
  //     let res = await axios.delete(
  //       `https://jsonplaceholder.typicode.com/posts/${id}`
  //     );
  //     if (res.status === 200) {
  //       setList(list.filter((ele) => id !== ele.id));
  //     }
  //   } catch (error) {
  //     if (error instanceof CanceledError) return;
  //     setError((error as AxiosError).message);
  //   }
  // };

  // OPTIMISTIC APPROCH
  let handleDelete = async (obj: post) => {
    setError("");
    const originalPostList = [...list];
    setList(list.filter((ele) => ele.id !== obj.id));
    try {
      let res = await postService.deletePost(obj);
    } catch (error) {
      setError((error as AxiosError).message);
      setList(originalPostList);
    }
  };

  let handleCreate = async () => {
    const originalPostList = [...list];
    setError("");

    if (editID) {
      // UPDATE
      setList(
        list.map((ele: any) => {
          if (ele.id === editID) {
            return {
              title: title?.current?.value,
              id: editID ? editID : 0,
            };
          }
          return ele;
        })
      );

      try {
        let { data: updatedPost } = await postService.updatePost(
          // @ts-ignore: Object is possibly 'null'.
          title?.current?.value,
          editID
        );
        setList(
          list.map((ele) => {
            if (ele.id === editID) {
              return updatedPost;
            }
            return ele;
          })
        );

        // console.log(updatedPost,'updatedPost')
      } catch (error) {
        setError((error as AxiosError).message);
        setList(originalPostList);
      } finally {
        title.current.value = "";
        setEditID(0);
      }
    } else {
      // ADD
      setList([
        {
          title: title?.current?.value,
          id: editID ? editID : 0,
        },
        ...list,
      ]);
      try {
        let { data: savedData } = await postService.createPost(
          // @ts-ignore: Object is possibly 'null'.
          title?.current?.value
        );
        if (savedData) {
          setList([savedData, ...list]);
        }
      } catch (error) {
        setError((error as AxiosError).message);
        setList(originalPostList);
      } finally {
        // @ts-ignore: Object is possibly 'null'.
        title.current.value = "";
      }
    }
  };

  let handleUpdate = async (e: post) => {
    title.current.value = e.title;
    setEditID(e.id);
  };

  return (
    <>
      <div className="border-b-4 mb-3 pb-4">
        <h1>http get</h1>
        <div className="my-2 space-y-2">
          <div className="flex  space-x-2">
            <label>Title</label>
            <input
              ref={title}
              className="border px-2 border-gray-400 rounded-md"
              type="text"
            />
          </div>
          <button
            type="submit"
            onClick={handleCreate}
            className="border bg-green-600 hover:bg-green-600/80 text-white    p-1 rounded-md"
          >
            Add user
          </button>
        </div>

        {isLoading && <>Loading ...</>}
        {error && <p className="text-red-500">{error}</p>}
        <table className="w-full border-collapse border border-pink-500 table-fixed">
          {list?.length > 0 &&
            list?.map((e) => (
              <tr
                key={e.id}
                className="  border capitalize border-pink-500  text-sm "
              >
                <td className="p-2 flex justify-between ">
                  {e.title}
                  <div className="space-x-2">
                    <button
                      onClick={() => handleUpdate(e)}
                      className="border bg-slate-500 hover:bg-slate-500/80 text-white   p-1 rounded-md"
                    >
                      update
                    </button>
                    <button
                      onClick={() => handleDelete(e)}
                      className="border bg-red-500 hover:bg-red-500/80 text-white   p-1 rounded-md"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </>
  );
}
