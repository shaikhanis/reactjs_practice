import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://th.bing.com/th/id/OIP.0Tv0eZ2ayv6GEZMeyuF7cgHaDt?pid=ImgDet&rs=1"
              : imageUrl
          }
          className="card-img"
          alt="Image"
        />
        <div className="card-img-overlay">
          <h5 className="card-title title">{title} </h5>
          <p className="card-text heading">{description}</p>
          <p className="card-text my-3">
            <small className="text-light my-3">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn-outline-info btn-sm my-1 mx-2 position-absolute bottom-0 end-0 button"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
