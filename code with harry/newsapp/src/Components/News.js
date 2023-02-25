import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
    constructor(){
        super();
        this.state = {

        }
    }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkt - Top HeadLine</h1>
        this ids a news Component
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTilte" discription="myDiscription" imageUrl="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17TNci.img?w=1920&h=1080&q=60&m=2&f=jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTilte" discription="myDiscription" imageUrl="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17TNci.img?w=1920&h=1080&q=60&m=2&f=jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTilte" discription="myDiscription" imageUrl="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17TNci.img?w=1920&h=1080&q=60&m=2&f=jpg"/>
          </div>
        </div>
      </div>
    );
  }
}
