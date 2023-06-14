import React, { useEffect, useState } from "react";
import TableDisp from "./TableDisp";
import Footer from "./Footer";
import PopUp from "./PopUp";

export default function Pagination(data) {
  // State variables
  const [currentPagedata, setCurrentPageData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [editItemId, setEditItemId] = useState(0);
  const [selectAllRows, setSelectAllRows] = useState(false);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const popUpInit = { name: "", email: "", role: "" };
  const [popUpData, setPopUpData] = useState(popUpInit);

  // Effect for updating the current page data when data or pageNum changes
  useEffect(() => {
    pageDataGenerator();
  }, [data.data, data.pageNum]);

  // Effect for handling selection changes
  useEffect(() => {
    selectionHandler();
  }, [selectAllRows]);

  // Handler for updating the selection status of all rows
  function selectionHandler() {
    const updatedData = currentPagedata.map((ele) => ({
      ...ele,
      check: selectAllRows ? 1 : 0,
    }));
    setCurrentPageData(updatedData);
  }

  // Renders the table component
  function tableDisplayer() {
    console.log(data.data);
    return (
      <TableDisp
        data={currentPagedata}
        setOverAllData={data.setData}
        overAllData={data.data}
        setCurrentPageData={setCurrentPageData}
        currentPagedata={currentPagedata}
        setEditing={data.setEditing}
        setEditItemId={setEditItemId}
        editItemId={editItemId}
        setPopUpData={setPopUpData}
        pageNum={data.pageNum}
        setSelectAllRows={setSelectAllRows}
      />
    );
  }

  // Generates the current page data based on the current pageNum
  function pageDataGenerator() {
    let totalPage = Math.floor(data.data.length / 10);
    setTotalPages(totalPage);

    let start = data.pageNum * 10;
    let end = (data.pageNum + 1) * 10;
    let pageData = [];

    if (end <= data.data.length) {
      pageData = [...data.data.slice(start, end)];
      setCurrentPageData(pageData);
    } else if (end > data.data.length) {
      pageData = [...data.data.slice(start)];
      setCurrentPageData(pageData);
    }
  }

  return (
    <>
      {/* Render the table */}
      {tableDisplayer()}

      {/* Render the footer */}
      <Footer
        totalPages={totalPages}
        currentPage={data.pageNum}
        setPageNum={data.setPageNum}
        currentPagedata={currentPagedata}
        setOverAllData={data.setData}
        data={data.data}
      />

      {/* Render the popup if editing is enabled */}
      {data.editing ? (
        <PopUp
          data={data.data}
          setEditing={data.setEditing}
          setData={data.setData}
          editItemId={editItemId}
          setPopUpData={setPopUpData}
          popUpData={popUpData}
        />
      ) : (
        <></>
      )}
    </>
  );
}
