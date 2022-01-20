import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const FeaturesPage = () => {
  const classnames = ({ isActive }) => isActive ? "nav_item active" : "nav_item";
  return (
    <section className="main">
      <div className="main-box">
        <div className="info-box">
          <h1>Web Software Developer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            et voluptas nihil minima hic quod distinctio, rem delectus nemo itaque,
            alias perspiciatis voluptatibus reiciendis accusantium quam.
            Ratione veritatis molestias labore?</p>
          <div className="about-me">
            <NavLink className={classnames} to="/about">About me</NavLink>
          </div>
        </div>
        <div className="img-box">
          <img
            className="img-fluid"
            src="https://miindmapnettwork.com/assets/img/webdevelopment.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesPage;