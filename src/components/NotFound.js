import React, { Component } from "react";

class NotFound extends Component {
  render() {
    return (
      <div className="container max-w-screen-2xl mx-auto mb-20 min-h-screen px-5 text-center">
        <p className="text-[#f4715b] font-bold text-9xl mb-4">404</p>
        <h1 className="text-3xl text-[#2c454d] mb-10">Page not found :(</h1>
        <button className="bg-[#f4715b] text-white px-5 py-3 rounded-lg font-bold">Back Home</button>
      </div>
    );
  }
}

export default NotFound;
