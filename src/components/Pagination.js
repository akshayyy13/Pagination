import React, { useEffect, useState } from "react";
import Table from "./Table";
import dataa from "../info.json";
const Pagination = () => {
  const [value, setValue] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [content, setContent] = useState(5);
  let lastIndex = currentPage * content;
  let firstIndex = lastIndex - content;
  let records = dataa.slice(firstIndex, lastIndex);
  const [arr, setArr] = useState([]);
  let btnArr = [];
  useEffect(() => {
    
    if (value == 15) setContent(5);
    else if (value == 10) setContent(10);
    else setContent(15);

  }, [value]);
  useEffect(()=>{
    btnArr = [];
    for (let i = 1; i <= Math.ceil(dataa.length/content); i++) {
      btnArr.push(i);
    }
    setArr(btnArr);
  },[content])
  function pageHandler(e) {
    setCurrentPage(e);
    firstIndex = (currentPage * (e - 1)) + 1;
    lastIndex = (firstIndex) + (content) - 1;
  }
  return (
    <>
      <div className="card flex justify-content-center align-items-center px-50 py-40 my-20 input-div">
        <form onSubmit={(e) => e.preventDefault()}>
          <select data-testid="selectInput" onChange={(e) => setValue(e.target.value)}>
            <option value="15">5</option>
            <option value="10">10</option>
            <option value="5">15</option>
          </select>
        </form>

        <div className="button-div" data-testid="buttonDiv">
          {arr.map((i) => (
            <button key={i} onClick={(e) => pageHandler(e.target.innerText)}>
              {i}
            </button>
          ))}
        </div>
      </div>

      <Table records={records} />
    </>
  );
};

export default Pagination;
