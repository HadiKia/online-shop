import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="container max-w-screen-2xl mx-auto min-h-[calc(100vh_-_200px)] md:min-h-[calc(100vh_-_220px)] px-5 text-[#2c454d]">
        <h1 className="text-2xl font-bold mb-4">About Project</h1>
        <div className="text-lg leading-8">
          <p>Hello, I'm Hadi Kia and I'm a FrontEnd developer.</p>
          <p>This website has been developed using <span className="text-[#ff735e]">React js</span> and <span className="text-[#ff735e]">Tailwind CSS</span>, and uses <span className="text-[#ff735e]">SPA</span> to provide a better userexperience. It also uses <span className="text-[#ff735e]">API</span>s to get products.</p>
        </div>
      </div>
    );
  }
}

export default About;
