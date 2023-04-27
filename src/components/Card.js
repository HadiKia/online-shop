import React, { Component } from "react";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className="bg-white text-[#2c454d] rounded-xl shadow-lg px-4 flex flex-col justify-between gap-y-4">
        <div className="pt-4 pb-2 w-full flex items-center justify-center"><img src={image} alt="product" className="w-44"/></div>
        <h3 className="text-left font-bold text-lg">{name}</h3>
        <div className="flex flex-col items-start gap-y-2 pb-4">
          {/* cost */}
          <div className="flex items-center justify-between gap-x-3 w-full ">
            <p className="text-lg font-bold text-left">{cost}{" "}{counter ? `× ${counter} = ${counter * Number(cost.split(" ")[0])} $` : ""}</p>
            <button className="px-4 py-2 bg-[#ff735e] text-white font-bold rounded-lg active:scale-90 duration-700">Add</button>
         </div>
         {/* number */}
         <div className="flex items-center gap-x-2">
          <span className={`${!counter && "opacity-40"}`} onClick={this.downHandler}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg></span>
          <span className="text-lg">{counter}</span>
          <span onClick={this.upHandler}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg></span>
         </div>
        </div>
      </div>
    );
  }
}

export default Card;
