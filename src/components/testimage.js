import React from "react"
// this is a tesing file
const TestImage = ({src, alt}) => {
    return (
        <figure>
              <img
              src={src}
              width="480"
              height="440"
              alt={alt}
              />
        </figure>

    )
    
}

export default TestImage 