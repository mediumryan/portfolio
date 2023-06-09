import React from "react";

export default function ProjectCards({ item }) {
  return (
    <div className="card">
      <img className="work-img" alt={item.title} src={item.image_path} />
      <a href="/" target="_blank">
        <div className="work-content">{item.title}</div>
      </a>
    </div>
  );
}
