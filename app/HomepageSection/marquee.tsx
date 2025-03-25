import React from "react";
import MyComponent from "../../components/marqueeContent1";
import Marquee from "react-fast-marquee";

const App = () => (
  <Marquee speed={30}>
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Marquee>
);

export default App;
