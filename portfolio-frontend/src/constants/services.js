import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: ".net",
    text: `C# is a simple, modern, object-oriented, and type-safe programming language.
    asp .net core, asp .net webform, MVC`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: " html-css-js",
    text: `HTML is for adding meaning to raw content by marking it up.
    CSS is for formatting that marked up content.
    JavaScript is for making that content and formatting interactive.`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "reactjs-gatsby-strapi",
    text: `Gatsby is a blazing-fast website framework for React. Strapi is an *open source Headless CMS Front-End Developers Love*.`,
  },
]
