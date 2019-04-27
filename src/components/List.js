import React from "react";
import Item from "./Item";

const List = ({title}) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      <Item />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8
  }
};

export default List;
