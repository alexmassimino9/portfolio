import React from "react";
import style from "./Tech.module.css";

const Tech = () => {
  const tech = [
    {
      title: "Javascript",
      img: "./js.png",
    },
    {
      title: "TypeScript",
      img: "./js.png",
    },
    {
      title: "Javascript",
      img: "./js.png",
    },
    {
      title: "Javascript",
      img: "./js.png",
    },
    {
      title: "Javascript",
      img: "./js.png",
    },
    {
      title: "Javascript",
      img: "./js.png",
    },
    {
      title: "TypeScript",
      img: "./js.png",
    },
    {
      title: "Javascript",
      img: "./js.png",
    },
    {
      title: "Javascript",
      img: "./js.png",
    },
  ];
  return (
    <div className={style.container}>
      <h3 className={style.title}>Tech Used</h3>
      <ul>
        {tech.map((tech, index) => {
          return (
            <li key={index} className={style.listItem}>
              {tech.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tech;
