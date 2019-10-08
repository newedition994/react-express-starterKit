import React, { Component } from "react";
import "./customers.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch("/api/customers")
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () =>
          console.log("Customers fetched..", customers)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
      </div>
    );
  }
}
export default Customers;
