import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={405}
        height={220}
        viewBox="0 0 405 220"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="556" y="231" rx="3" ry="3" width="88" height="6" />
        <rect x="562" y="235" rx="3" ry="3" width="52" height="6" />
        <rect x="500" y="230" rx="3" ry="3" width="410" height="6" />
        <rect x="464" y="232" rx="3" ry="3" width="380" height="6" />
        <rect x="456" y="230" rx="3" ry="3" width="178" height="6" />
        <circle cx="592" cy="243" r="20" />
        <rect x="46" y="60" rx="0" ry="0" width="2" height="2" />
        <rect x="11" y="8" rx="0" ry="0" width="282" height="158" />
    </ContentLoader>
)

export default Skeleton