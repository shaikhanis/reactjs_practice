import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, discription, imageUrl} = this.props;
    return (
      <div>
        <div className="card mb-3 text-light cards" style={{ width: "26rem"}}>
          <img 
            src={imageUrl}
            className="card-img"
            alt="Imahges"
          />
          <div className="card-img-overlay">
            <h3 className="card-title title">{title}...</h3>
            <strong className="card-text heading">{discription}...</strong><br/>
            <a to="/gotosome" class="btn btn-sm my-2 mx-3 position-absolute bottom-0 end-0 button"> Read More </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
