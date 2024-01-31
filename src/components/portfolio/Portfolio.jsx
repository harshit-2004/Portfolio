import "./portfolio.css";

import IMG1 from "../../assets/CodeforcesEmail.png";
import IMG2 from "../../assets/marsrover.png";
import IMG3 from "../../assets/dogimages.png";
import IMG4 from "../../assets/tictactoe.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "CodeforcesEmail",
      img: IMG1,
      description:
        "The Automated Contest Reminder System is a user-friendly solution designed to fetch and display all upcoming contest lists and allow users to set personalized email notification times for contests.",
      technologies: "Passport | MongoDB | JavaScript | Styled Component",
      link: "https://github.com/harshit-2004/CodeforcesEmail",
    },
    {
      id: 2,
      title: "Tic Tac Toe game",
      img: IMG4,
      description:
        "Experience the joy of playing the classic Tic Tac Toe game with two players.",
      technologies: "React | Vercel ",
      link: "https://tic-tac-dmy7bkehy-harshits-projects-135ce08c.vercel.app/",
    },
    {
      id: 3,
      title: "DOG BREED IMAGES",
      img: IMG3,
      description:
        "Unleash a gallery of adorable dogs showcasing various breeds. Wagging tails and furry faces await your admiration!",
      technologies: "API | jQuery",
      link: "https://harshit-2004.github.io/dog-Images-from-api/",
    },
    {
      id: 4,
      title: "MARS ROVER",
      img: IMG2,
      description:
        "Fetching NASA images of Mars through Mars Rover.",
      technologies: "API | jQuery",
      link: "https://harshit-2004.github.io/mars-rover/",
    },
    // {
    //   id: 3,
    //   title: "DOG BREED IMAGES",
    //   img: IMG3,
    //   description:
    //     "Unleash a gallery of adorable dogs showcasing various breeds. Wagging tails and furry faces await your admiration!",
    //   technologies: "API | jQuery",
    //   link: "https://www.mobinspire.com/",
    // },
    // {
    //   id: 4,
    //   title: "MARS ROVER",
    //   img: IMG2,
    //   description:
    //     "Fetching NASA images of Mars through Mars Rover.",
    //   technologies: "API | jQuery",
    //   link: "https://www.raise.africa/",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
