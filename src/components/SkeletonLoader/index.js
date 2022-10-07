import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={480}
    viewBox="0 0 400 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="226" y="177" rx="0" ry="0" width="1" height="0" /> 
    <rect x="151" y="77" rx="0" ry="0" width="0" height="1" /> 
    <rect x="90" y="180" rx="0" ry="0" width="8" height="5" /> 
    <rect x="6" y="1" rx="0" ry="0" width="554" height="322" /> 
    <rect x="156" y="337" rx="0" ry="0" width="63" height="14" /> 
    <rect x="14" y="363" rx="0" ry="0" width="397" height="20" /> 
    <rect x="11" y="393" rx="0" ry="0" width="424" height="66" />
  </ContentLoader>
)

export default SkeletonLoader