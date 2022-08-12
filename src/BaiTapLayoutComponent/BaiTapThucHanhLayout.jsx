import React, { Component } from "react";
import Banner from "./Banner";
import Footer_Component from "./Footer_Component";
import Header from "./Header";
import Page_Content_Component from "./Page_Content_Component";
import "./BaiTapLayout.css";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Page_Content_Component />
        <Footer_Component />
      </div>
    );
  }
}
