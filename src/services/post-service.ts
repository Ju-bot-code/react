import apiClient from "./api-client";

export interface post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

class postService {
  getAllPost() {
    let controller = new AbortController();

    let result = apiClient("/posts?userId=1", {
      signal: controller.signal,
    });

    return { result, cancel: () => controller.abort() };
  }
  createPost(title: string) {
    return apiClient.post("/posts", {
      // @ts-ignore: Object is possibly 'null'.
      title,
    });
  }
  updatePost(title: string, editID: number) {
    return apiClient.put(`/posts/${editID}`, {
      title,
      editID,
    });
  }
  deletePost(obj: post) {
    return apiClient.delete(`/posts/${obj.id}`);
  }
}

export default new postService();
