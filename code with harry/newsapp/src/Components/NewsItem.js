import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;

    return (
      <div>
        <div className="card mb-3 text-light cards" style={{ width: "26rem"}}>
          <img 
            src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl}
            className="card-img"
            alt="Imahges"
          />
          <div className="card-img-overlay">
            <h3 className="card-title title">{title}</h3>
            <strong className="card-text heading">{description}</strong><br/>
            <a href={newsUrl} target="_blank" class="btn btn-sm my-2 mx-3 position-absolute bottom-0 end-0 button"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
