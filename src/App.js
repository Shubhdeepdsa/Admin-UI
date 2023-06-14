import { useState, useEffect } from "react";
import React from "react";
import SearchBar from "./Components/SearchBar";
import Pagination from "./Components/Pagination";
import "./App.css";
function App() {
  const URL =
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  const [data, setData] = useState([]);
  const [fullDataSet, setFullDataSet] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [keyWord, setKeyword] = useState("");
  const [editing, setEditing] = useState(false);
  //Api request will Run only once
  useEffect(() => {
    fetchData();
  }, []);
  //Will run when any change in Search Bar
  useEffect(() => {
    searchData(keyWord);
  }, [keyWord]);
  //Will run when any change in Page number
  useEffect(() => {
    pageNumHandler();
  }, [pageNum]);

  function pageNumHandler() {
    return (
      <Pagination
        data={data}
        setData={setData}
        pageNum={pageNum}
        setPageNum={setPageNum}
        setEditing={setEditing}
        editing={editing}
      />
    );
  }
  //Api Fetch request
  async function fetchData() {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Network response was not Ok");
      }

      const responseJson = await response.json();
      responseJson.map((ele) => {
        ele.check = 0;
      });
      setData(responseJson);
      setFullDataSet(responseJson);
      console.log(data);
    } catch (error) {}
  }
  //Updates the Search State
  function updateDataSearch(newValue) {
    setKeyword(newValue);
  }
  //Filters the data according to the Searched Keyword
  function searchData(value) {
    let filteredData = fullDataSet.filter((items) => {
      return (
        items.name.toLowerCase().includes(value) ||
        items.email.toLowerCase().includes(value) ||
        items.role.toLowerCase().includes(value)
      );
    });
    console.log("This is filtered", filteredData);
    setData(filteredData);
  }
  return (
    <div className="App">
      <SearchBar updateSearch={updateDataSearch} />
      {pageNumHandler()}
    </div>
  );
}

export default App;
