export const httpRequest = async (url, method, body) => {
  let data;

  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) options.body = JSON.stringify(body);

    const response = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}${url}`,
      options
    );

    data = await response.json();

    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    return data;
  } catch (err) {
    console.log(err, "something went wrong! 💥");
  }
};
