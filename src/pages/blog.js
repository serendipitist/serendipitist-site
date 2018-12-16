import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import Img from "gatsby-image"
// import { graphql } from "gatsby"

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <div>{data.site.siteMetadata.title}</div>}
    />
  )
}

const blog = () => {
  return (
    <div>
      <h2>Patnem Chai Shop</h2>
      <p>
        A small tiny tea shop run by brothers in Patnem, Goa. It is not fancy, ambience looks small, simple shop with customers who are local, national and international.
        Tea shop makes it special by serving affordable breakfast to localities for 50 years long beforetourist.
        <div>
          <p>Tea shop is not a business but it is a service.Simple breakfast like banana bread,samosa,buns and masala chi are authentic and fresh.
          If you are visiting South Goa take a tea break at Patnem chai shop.
        </p>
        </div>
      </p>
    </div>
  )
}

export default blog