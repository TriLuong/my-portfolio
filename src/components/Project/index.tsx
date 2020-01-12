import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";

interface ProjectProps {
  photos: [];
  title: string;
  content: string;
  features?: [];
  demos?: [];
  technologies?: [];
}

class Project extends Component<ProjectProps> {
  render() {
    const {
      photos,
      title,
      content,
      features,
      demos,
      technologies
    } = this.props;
    return (
      <div className="containerProject mb-3">
        <div className="mb-3 d-flex">
          <div>
            <div className="mr-3">
              <Carousel
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                stopOnHover={false}
                emulateTouch={true}
                width="550px"
                className="containerCarousel"
              >
                {photos.map(photo => {
                  return (
                    <img
                      src={photo}
                      alt="ProjectOfImage"
                      className="projectImage"
                    />
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div>
            <h2>{title}</h2>
            <p>{content}</p>
            {demos && demos.length > 0 && (
              <p className="font-weight-bold">Demo</p>
            )}
            {demos && demos.length > 0 && (
              <ul>
                {demos.map((demo: any) => {
                  return (
                    <li>
                      <a
                        href={demo.src}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {demo.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <div className="mr-5">
            {features && features.length > 0 && (
              <p className="font-weight-bold">Features</p>
            )}
            {features && features.length > 0 && (
              <ul>
                {features.map((feature: any) => {
                  return <li>{feature}</li>;
                })}
              </ul>
            )}
          </div>
          <div>
            {technologies && technologies.length > 0 && (
              <p className="font-weight-bold">Technologies</p>
            )}
            {technologies && technologies.length > 0 && (
              <ul>
                {technologies.map((technologie: any) => {
                  return <li>{technologie}</li>;
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
