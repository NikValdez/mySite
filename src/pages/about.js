import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Nav from "../components/Nav"
import SEO from "../components/seo"

const AboutStyles = styled.div`
margin-top: 5em;
ul {

    list-style-type: none;
    margin-bottom: 10em;
}
h2 {
    text-align: center;
}
a {
  text-decoration: underline solid var(--color-accent) 1px;
}
`


const BlogIndex = ({ data, location }) => {
  return (
    <>
      <Nav />
      <Layout location={location} >
        <SEO title="About" />

        <AboutStyles>

          <ul>
            <li>
              <h2>I share ideas I'm thinking about on this site.</h2>
            </li>
            <li>
              <h2>I do tech YouTube  <a href="https://www.youtube.com/darwin_tutorials" target='_blank'>here</a>.</h2>
            </li>
            <li>
              <h2>I do code stuff  <a href="https://github.com/NikValdez" target='_blank'>here</a>.</h2>
            </li>
            <li>
              <h2>I do nature/wildlife photography  <a href="https://www.instagram.com/nikcochran/" target='_blank'>here</a>.</h2>
            </li>
            <li>
              <h2>I don't do much of anything <a href="https://twitter.com/nikcochran" target='_blank'>here</a> or <a href="https://www.linkedin.com/in/nik-cochran-37422584/" target='_blank'>here</a>.</h2>
            </li>
          </ul>
        </AboutStyles>



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
