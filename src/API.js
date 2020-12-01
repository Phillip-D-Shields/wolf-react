export async function fetchResponse(input) {
  var myHeaders = new Headers();

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

 await fetch(
    `http://api.wolframalpha.com/v1/result?appid=7TX64H-P32AW25LLY&i=${input}`, requestOptions
  )
    .then((response) => response.text())
    .then((data) => data)
    .catch((error) => console.log("error", error));
}
