import axios from "../axios";

class PostService {
  getPost = async () => {
    const promise = new Promise((resolve, reject) => {
      axios
        .get("posts")

        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };



  getComment= async(postId)=>{
    const promise = new Promise((resolve, reject) => {
      axios
        .get("comments?postId="+postId)

        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return resolve(err);
        });
    });
    return await promise;
  };
}
export default new PostService();
