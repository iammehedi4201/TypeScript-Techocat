{
  //?------------------------------------------------
  //*-----------Asynchronous typescript----------

  //*Create a promise
  //   let promise = new Promise((resolve, reject) => {
  //some asynchronous operation
  //     setTimeout(() => {
  //       resolve("Promise resolved");
  //       reject("Promise rejected");
  //     }, 1000);
  //   });

  //   promise.then(
  //     (successMessage) => {
  //       console.log("Success" + successMessage);
  //     },
  //     (errorMessage) => {
  //       console.log("Error:", errorMessage);
  //     }
  //   );

  //   console.log(promise);

  //*Create Promise with function

  type something = { something: string };

  const createPromise = (): Promise<something> => {
    return new Promise<something>((resolve, reject) => {
      const data: something = { something: "Hello there" };
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  //calling create promise
  const showData = async (): Promise<something> => {
    const data: something = await createPromise();
    return data;
  };
  const result: Promise<something> = showData();

  console.log("The result is :-", result);

  //*Get Data from Api

  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const getPost = async (): Promise<Post> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post: Post = await response.json();
    return post;
  };
  const posts: Promise<Post> = getPost();

  console.log("The post is :-", posts);

  //?------------------------------------------------
}
