import React, { Component } from 'react';
import List from "./List";
import { connect } from "react-redux";
import ActionButton from "./ActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div>
        <h2>Board #1</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <List 
		listID={list.id}
		key={list.id}
		title={list.title}
		cards={list.cards}
	    />
          ))}
	  <ActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
  }
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
