import React, { Component } from "react";
import { ItemCard } from "./component/ItemCard";
import { Jumbtron } from "./component/Jumbtron";
import { AddItem } from "./component/AddItem";
import DateAndTimePickers from "./component/DateAndTimePickers";
//import { blue } from "@material-ui/core/colors";
class App extends Component {
  state = {
    name: "",
    tweet: "",
    items: [],
  };

  /**
   * Handle input changes in the AddItem component.
   * @param event
   */
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  /**
   * Add an item to state.
   * @param event
   */
  addItem = (event) => {
    event.preventDefault();
    const { name, tweet } = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? itemsInState[itemsArrayLength - 1].id + 1 : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign(
          {},
          {
            id,
            name,
            tweet,
          }
        ),
      ],
      name: "",
      tweet: "",
    });
  };

  /**
   * Toggle the isEditing property of an item when the Edit button
   * within ItemCard is clicked.
   * @param index
   */
  toggleItemEditing = (index) => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing,
          };
        }
        return item;
      }),
    });
  };

  /**
   * Update the Name and/or tweet.
   * @param event
   * @param index
   */
  handleItemUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      }),
    });
  };

  /**
   * Delete an item from state
   * @param index Index of the item to be deleted.
   */
  onDelete = (index) => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1),
      ],
    });
  };

  render() {
    const { name, tweet } = this.state;
    return (
      <div>
        <Jumbtron />

        <div className="container pt-4">
          <AddItem
            name={name}
            tweet={tweet}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
          />
          <DateAndTimePickers />

          <h1
            style={{
              color: "#0099ff",
              textAlign: "center",
              marginTop: "80px",
            }}
          >
            Trending
          </h1>

          <div className="row">
            {this.state.items.map((item, index) => (
              <ItemCard
                key={item.id}
                index={index}
                item={item}
                toggleEditing={() => this.toggleItemEditing(index)}
                onChange={this.handleItemUpdate}
                onDelete={() => this.onDelete(index)}
              />
            ))}
          </div>

          <hr />
        </div>
      </div>
    );
  }
}

export default App;
