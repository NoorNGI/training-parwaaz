export const makeHttpRequest = async (id, method = "GET", body, headers) => {
  try {
    let data;

    if (!id && method === "GET" && !body) {
      const response = await fetch(`http://localhost:3000/todos`);
      data = await response.json();
      data.reverse();
    } else {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      data = await response.json();
    }

    return data;
  } catch (err) {
    console.log(err, "something went wrong! 💥");
  }
};
