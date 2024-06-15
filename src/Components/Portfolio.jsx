/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolioImg.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Random Password Generator",
    description:
      "Created a web-app to solve the password creation problem. This web app is capable of producing a password of your choice such as what should be the length of your password? You want characters, numbers inlcuded in your password or not etc.",
    url: "https://github.com/wasiqAfnan/JavaScriptMastery/tree/main/JavaScript%20-%20Projects/03_randomPasswordGenerator",
  },
  {
    title: "Weather-App",
    description:
      "Want the summary of weather in your city. Just type the name of your city and this web-app will give you all the info of the weather in your city.",
    url: "https://github.com/wasiqAfnan/JavaScriptMastery/tree/main/JavaScript%20-%20Projects/04_weatherApp",
  },
  {
    title: "My Resume Site",
    description:
      "Created using HTML, CSS, Bootstrap and JS. A portfolio site of mine which includes all my social handles and the skill sets I have.",
    url: "https://wasiqafnan.github.io/wasiqportfolio/",
  },
  {
    title: "Resturant Bill Generation System",
    description:
      "In this project I have used java language to solve a classical problem of every small business to automate the bill generation process by giving minimal input. This is a CLI project with overall bill design.",
    url: "https://github.com/wasiqAfnan/JavaMastery/tree/main/Projects",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
