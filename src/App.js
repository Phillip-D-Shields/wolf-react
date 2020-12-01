import React, { useState } from "react";

function App() {
  // states
  // nav state
  // const [isOpen, setIsOpen] = useState(false);

  // loading
  const [loading, setIsLoading] = useState(false);

  // response
  const [response, setResponse] = useState("");

  // query
  const [query, setQuery] = useState("");

  // handle change
  const handleChange = (e) => setQuery(e.target.value);

  // fetch response
  async function fetchResponse(input) {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      `http://api.wolframalpha.com/v1/result?appid=7TX64H-P32AW25LLY&i=${input}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => setResponse(data))
      .catch((error) => console.log("error", error));
  }

  // handleClick
  async function submit() {
    setIsLoading(true);

    await fetchResponse(query);

    setIsLoading(false);
  }

  return (
    <div className="App">
      <h1>a wee morrigan knowledge box, version 1.0</h1>
      <h3>type in a word or two</h3>
      <input type="text" onChange={handleChange} />
      <button onClick={submit}>submit</button>

      {/* conditionally render loading */}
      {loading && <h2>thinking...</h2>}

      {/* conditionally render api request below */}
      {response && <h3>{response}</h3>}
    </div>
  );
}

export default App;
