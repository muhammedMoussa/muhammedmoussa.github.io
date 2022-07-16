import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Image = ({ ...rest }) => {
  let href = rest.src
    // const image = getImage(rest.src)
    // console.log(rest.src);
    // console.log(image);
  return (
    <>
      {/* <StaticImage src="../../src/images/paymob.jpeg" /> */}
      {/* <StaticImage src={`../../${rest.src}`} /> */}
      <img {...rest} />
      {/* <StaticImage {...rest} /> */}
      {/* {rest.src} */}
    </>
  )
}
export default Image
