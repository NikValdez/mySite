import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const NavStyles = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr 1.5fr 1fr;
  margin-right: 100px;
  margin-left: 100px;
  h1 {
    font-family: "Cormorant", serif;
    font-weight: bold;
    margin-left: 20px;
  }
  border-bottom: 1px solid lightgray;
  h4 {
    font-family: "Montserrat-SemiBold", serif;
    margin-top: 40px;
  }
`

function Nav() {
  return (
    <NavStyles>
      <h1><Link to="/">NC</Link></h1>

      <h4><Link to="/essays">Essays</Link></h4>
      <h4><Link to="/photography">Photography</Link></h4>
      <h4><Link to="/about">About</Link></h4>
    </NavStyles>
  )
}
export default Nav
