import axios from "axios";
import loader from "../assets/loader.svg";
import tick from "../assets/tick.svg";
import copy from "../assets/copy.svg";
import React, { useState } from "react";
const Demo = () => {
  const [result, setResult] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    if (url) {
      e.preventDefault();

      setLoading(true);
      const options = {
        method: "GET",
        url: "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
        params: {
          url: url,
          length: "3",
        },
        headers: {
          "X-RapidAPI-Key":
            "547bb45ad7mshefecdc2fda1d11ap1702b5jsn1bf486724fed",
          "X-RapidAPI-Host": "article-extractor-and-summarizer.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setResult(response.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    } else {
      alert("Please put some words");
    }
    setUrl("");
  };
  return (
    <>
      <div className="mt-10 flex flex-col gap-10 items-center">
        <form className="flex flex-col items-center gap-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            placeholder="Enter URL.."
            className="w-[200px]  md:w-[400px] outline-none "
          />

          <button
            onClick={handleSubmit}
            className="border px-8 py-1 ml-4 bg-green-500 text-white rounded-md hover:scale-110 transition-all"
          >
            {loading ? <img className="h-[30px]" src={loader} /> : "Go"}
          </button>
        </form>

        {result ? (
          <div className="w-[250px] md:w-[400px] p-2 border rounded-md shadow-md mb-10">
            <img
              onClick={() => {
                navigator.clipboard.writeText(result.summary);
                setCopied(true);
              }}
              className="h-[20px] cursor-pointer"
              src={copied ? tick : copy}
              alt=""
            />
            <p className=""> {result.summary}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Demo;
