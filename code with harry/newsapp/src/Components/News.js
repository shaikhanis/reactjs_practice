import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-02-04&sortBy=publishedAt&apiKey=1c9b548db8764192be9a0cbe7e6b8186";

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>Todays - Top HeadLine</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 35) : "No Title here"}
                  description={
                    element.description
                      ? element.description.slice(0, 80)
                      : "Disc not available"
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}

          {/* <div className="col-md-4">
            <NewsItem title="myTilte" discription="myDiscription" imageUrl="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17TNci.img?w=1920&h=1080&q=60&m=2&f=jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTilte" discription="myDiscription" imageUrl="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17TNci.img?w=1920&h=1080&q=60&m=2&f=jpg"/>
          </div> */}
        </div>
      </div>
    );
  }
}
