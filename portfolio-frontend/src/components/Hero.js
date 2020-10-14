import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  // console.log(data)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1>I'm Rami</h1>
            <div className="underline"></div>
            <h4>
              Student på Systemutvecklare .Net på{" "}
              <a
                className="mylink"
                href="https://www.tucsweden.se/"
                target="_blank"
                style={{ color: "red" }}
              >
                TUC
              </a>
            </h4>
            <br />- 🌱Frontend:
            <a
              className="mylink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://reactjs.org/docs/getting-started.html"
            >
              React
            </a>
            ,
            <a
              className="mylink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://strapi.io/documentation/v3.x/getting-started/introduction.html"
            >
              Strapi
            </a>
            ,{" "}
            <a
              className="mylink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.gatsbyjs.org/docs/"
            >
              Gatsby
            </a>
            ,
            <a
              className="mylink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://styled-components.com/docs"
            >
              Styled Components
            </a>
            <br />- 🤔 Backend:
            <a
              className="mylink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.microsoft.com/en-us/dotnet/csharp/"
            >
              C#
            </a>
            ,{" "}
            <a
              className="mylink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1"
            >
              ASP.NET CORE
            </a>{" "}
            :)
            <br />- 🔭 Database:{" "}
            <a
              className="mylink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
            >
              SQL
            </a>
            ,
            <a
              className="mylink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mongodb.com/"
            >
              MongoDb
            </a>
            <br />
            - 💬 Citat: Att känna dig själv är början på all visdom.
            <br />
            - 😄 Personlighet: Nyfiken,tålmodig, ansvarsfull.. <br />
            - 💜 Jag tycker om träna, läsa
            <br />
            - 📫 Kontakta mig via länken nedan:)
            <br />
            <Link to="/contact" className="btn">
              kontakta mig
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}
export default Hero
