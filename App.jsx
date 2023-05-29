import { useState, useEffect } from "react";
import "./app.css";
const App = () => {
  const [inputFld1, setInputFld1] = useState("");
  const [inputFld2, setInputFld2] = useState("");
  const [opration, setOpration] = useState("+");
  const [resultFld, setResultFld] = useState("");

  const handleSubmitBtn = () => {
    if (opration === "+") {
      setResultFld(+inputFld1 + +inputFld2);
    }
    if (opration === "-") {
      setResultFld(inputFld1 - inputFld2);
    }
    if (opration === "*") {
      setResultFld(inputFld1 * inputFld2);
    }
    if (opration === "/") {
      setResultFld(inputFld1 / inputFld2);
    }
  };

  // useEffect(() => {
  //   localStorage.setItem(resultFld, JSON.stringify(resultFld));
  // }, []);

  return (
    <div>
      <header className="App">
        <main className="calculateMn">
          <h2> My mini calculator</h2>
          <input
            type="text"
            className="inputBox"
            value={inputFld1}
            onChange={(e) => setInputFld1(e.target.value)}
          />
          <div>
            <h1 id="oprClue">{opration}</h1>
          </div>
          <input
            type="text"
            className="inputBox"
            value={inputFld2}
            onChange={(e) => setInputFld2(e.target.value)}
          />
          <br /> <br />
          <div>
            <button
              type="button"
              className="opsBtn"
              onClick={() => setOpration("+")}
            >
              {" "}
              +{" "}
            </button>
            <button
              type="button"
              className="opsBtn"
              onClick={() => setOpration("-")}
            >
              {" "}
              -{" "}
            </button>
            <button
              type="button"
              className="opsBtn"
              onClick={() => setOpration("*")}
            >
              {" "}
              *{" "}
            </button>
            <button
              type="button"
              className="opsBtn"
              onClick={() => setOpration("/")}
            >
              {" "}
              /{" "}
            </button>

            <br />
            <br />
            <div>
              <button id="subBtn" onClick={handleSubmitBtn}>
                ={" "}
              </button>
            </div>

            <div>
              <h3>
                {" "}
                Result :{" "}
                {
                  <input
                    type="text"
                    className="inputBox"
                    placeholder="Result"
                    value={resultFld}
                  />
                }{" "}
              </h3>
            </div>
          </div>
        </main>
      </header>
    </div>
  );
};
export default App;
