import styled from "@emotion/styled"
import { graphql } from "gatsby"
import { Gallery } from "gatsby-theme-gallery"
import React from "react"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import SEO from "../components/seo"

const NewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-auto-rows: 16rem;
  grid-gap: 0.5rem;
  @media (min-width: 1280px) {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-auto-rows: 16rem
  }
`;


const BlogIndex = ({ data, location }) => {
  return (
    <>
      <Nav />
      <Layout location={location} >
        <SEO title="Photography" />


        <Gallery basePath={false} />



      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
