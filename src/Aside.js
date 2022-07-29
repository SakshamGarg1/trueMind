import React from "react";
import data from "../../ture-mind/src/data.json";
import Products from "../../ture-mind/src/Products";
class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      order: "select",
      
    };
  }
  
  handleClick = (size) => {
    if (this.state.sizes.includes(size)) {
      this.setState((prevState) => ({
        sizes: prevState.sizes.filter((s) => s !== size),
      }));
    } else {
      this.setState((prevState) => ({
        sizes: prevState.sizes.concat(size),
      }));
    }
  };
  handleOrder = (order, sizes, products) => {
    let sortedProducts = [...products];
    if (sizes.length > 0) {
      sortedProducts = sortedProducts.filter((p) => {
        for (let size of sizes) {
          if (p.availableSizes.includes(size)) {
            return true;
          }
        }
      });
    }

    if (order === "heighest") {
      sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
    }
    if (order === "lowest") {
      sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
    }
    return sortedProducts;
  };
  handleChange = (event) => {
    this.setState({ order: event.target.value });
  };
  render() {
    let { order } = this.state;
    const products = this.handleOrder(order, this.state.sizes, data.products);
    let sizes = data.products.reduce((acc, cv) => {
      acc = acc.concat(cv.availableSizes);
      return acc;
    }, []);

    const unique = [...new Set(sizes)];

    return (
      <>
        <div className="flex evenly">
          <h3>{products.length} Products found</h3>
          <form>
            <label htmlFor="order">Order By: </label>
            <select onChange={this.handleChange}>
              <option value="select">Select</option>
              <option value="lowest">Lowest to Highest</option>
              <option value="highest">Highest to Lowest</option>
            </select>
          </form>
        </div>
        <div className="flex">
          <aside className="flex-30">
            <div className="grid">
              {unique.map((size, i) => (
                <p
                  key={i}
                  className={
                    this.state.sizes.includes(size) ? "circle active" : "circle"
                  }
                  onClick={() => this.handleClick(size)}
                >
                  {size}
                </p>
              ))}
            </div>
          </aside>

          <Products item={products} />
        </div>
      </>
    );
  }
}
export default Aside;