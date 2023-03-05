
import { useState } from "react";
import { useEffect } from "react";


const InputStuff = () => {
  const [quoteContent, setquoteContent] = useState("");
  const [quoteContentMimic, setquoteContentMimic] = useState("");

  useEffect(() => {
    setquoteContentMimic(quoteContent);

    if (quoteContent.length === 0) {
      let someMessage = `nothing has been typed yet`;
      setquoteContentMimic(someMessage);
    }
  }, [quoteContent, quoteContentMimic]);

  function clearEverything() {
    setquoteContent(``);
  }
  const stuff = (
    <div className="text-center mx-3 my-3">
      <div className="container-fluid text-center">
        <div>
          <div>
            <p>Type something in the input box. </p>
            <input
              type="text"
              className="form-control"
              placeholder="enter anything you want"
              onChange={(e) => setquoteContent(e.target.value)}
              value={quoteContent}
            />
            <p>You are typing : {quoteContentMimic}</p>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-sm btn-success"
              onClick={clearEverything}
            >
              clear input
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return stuff;
};

export default InputStuff;
