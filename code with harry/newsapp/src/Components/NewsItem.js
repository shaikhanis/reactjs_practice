import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      
      <div>
            <span className="badge rounded-pill bg-danger"> {source} </span> 
        <div className="card mb-3 text-light cards" style={{ width: "26rem"}}>
        <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" :        imageUrl} className="card-img-top" alt="..." />
          <div className="card-img-overlay">
          <h5 className="card-title">{title}  </h5>
          <p className="card-text">{description}</p>

          <p className="card-text">
            <small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small>
            </p>
            <a href={newsUrl} target="_blank" class="btn btn-sm my-2 mx-3 position-absolute bottom-0 end-0 button"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
