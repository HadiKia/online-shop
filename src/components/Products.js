import React, { Component } from "react";
import axios from "axios";

import Card from "./Card";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) =>
      this.setState({
        products: response.data,
      })
    )
    document.title = "Products"; 
  }

  render() {
    const {products} = this.state
    return (
      <div className='container max-w-screen-2xl mx-auto flex flex-col gap-y-12 px-5 mb-10 md:grid md:grid-cols-3 md:gap-x-10 md:gap-y-14 lg:grid-cols-4 xl:grid-cols-5'>
        {
          products.length ? products.map(product => <Card key={product.id} image={product.image} name={product.title} cost={`${product.price} $`} />) : <h1 className="text-3xl font-bold text-[#2c454d] min-h-[calc(100vh_-_240px)] md:min-h-[calc(100vh_-_260px)]">Loading...</h1>
        }
      </div>
    );
  }
}

export default Products;
