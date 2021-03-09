import React, { useState, useEffect } from "react";
import apiService from "../ApiService";
import List from "./List";

function MyList() {
  const [mylist, setMyList] = useState([]);

  useEffect(() => {
    const getMyList = async () => {
      const info = await apiService.getMyList();
      if (info) setMyList(info);
      console.log(mylist);
    };
    getMyList();
  }, []);

  return (
    <div className="mylist">
      <List artsys={mylist} />
    </div>
  );
}

export default MyList;
