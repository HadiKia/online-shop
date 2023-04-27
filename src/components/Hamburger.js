import React, { Component } from "react";
import Navbar from "./Navbar";

const burgerBoxStyle = "z-30 fixed top-4 left-4 flex flex-col gap-y-2 p-3 rounded-xl shadow-md duration-500 md:hidden"
const burgerStyle = "h-1 rounded-lg duration-500" 

class Hamburger extends Component {
    constructor() {
    super();
    this.state = {
      open: false,
    };
  }
  clickHandler = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    return (
      <header className="sticky top-0 bg-[#f4f4f4] shadow-md z-10">
        <div onClick={this.clickHandler} className={`${burgerBoxStyle} ${this.state.open ? "translate-x-36 shadow-[#203238]" : "bg-white"}`}>
            <div className={`${burgerStyle} w-8 ${this.state.open ? "rotate-45 translate-y-3 bg-[#f4f4f4]" : "bg-[#2c454d]"}`}></div>
            <div className={`${burgerStyle} w-6 ${this.state.open ? "-translate-x-7 opacity-0" : "bg-[#2c454d]"}`}></div>
            <div className={`${burgerStyle} w-8 ${this.state.open ? "-rotate-45 -translate-y-3 bg-[#f4f4f4]" : "bg-[#2c454d]"}`}></div>
        </div>
        <Navbar open={this.state.open} clickHandler={this.clickHandler}/>
      </header>
    );
  }
}

export default Hamburger;
