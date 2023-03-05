import React, { Component } from "react";
import Slider, { Range } from 'rc-slider';

export default class ImageSlideShow extends Component {
  render() {
    return (
        <div>
      <div className="imageSlide">
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={10000}>
              <img
                src="https://th.bing.com/th/id/OIP.cOdW-jX0H5mEfxt6-ZRObgHaJc?pid=ImgDet&w=800&h=1021&rs=1"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img
                src="https://media.indiatimes.in/media/content/itimes/photo/2015/Jan/3/1420280413-amisha-patel-hot-saree-pics-amisha-patel-hot-photos-in-saree-54a7c24cceb95.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://th.bing.com/th/id/R.fa444ada3518090691356140cfc37816?rik=FtLI8XVP2G%2beZA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-B9g_4bLyXOo%2fTaMD1iW4zaI%2fAAAAAAAAGZc%2fDPyBoFWXYwc%2fs1600%2fAmisha-Patel-159.jpg&ehk=hM42LmgJlQSbKvDasx1gW1UL9tX%2bvLax9UVgnFWYoyY%3d&risl=&pid=ImgRaw&r=0"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
    );
  }
}
