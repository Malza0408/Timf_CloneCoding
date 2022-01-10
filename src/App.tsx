import React from "react";
import styled from "styled-components";
import BlankPage from "./pages/BlankPage";
import Carousel from "./pages/Carousel";
import Fluid from "./pages/Fluid";
import Navbar from "./pages/Navbar";
import Search from "./pages/Search";
import Route from "./Router/Route";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 6rem;
`;

function App() {
  return (
    <>
      <Route path="/">
        <Navbar />
        <Wrapper>
          <Carousel />
          <Fluid />
        </Wrapper>
      </Route>
      <Route path="/blank">
        <BlankPage />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </>
  );
}

export default App;
