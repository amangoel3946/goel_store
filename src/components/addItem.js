import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  state = {};
  render() {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addProduct(
            this.state.productName,
            this.state.productPrice
          );
        }}
      >
        <div className="row mb-5">
          <div className="mb-3 col-5">
            <label htmlFor="name" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              name="productName"
              onChange={(e) => {
                this.setState({ productName: e.currentTarget.value });
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-5">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="itemPrice"
              name="productPrice"
              onChange={(e) => {
                this.setState({ productPrice: e.currentTarget.value });
              }}
              value={this.state.productPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary col-2 mt-3 mb-3">
            Add
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
