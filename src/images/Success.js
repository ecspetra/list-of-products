import * as React from "react"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={32}
        height={32}
        xmlSpace="preserve"
        {...props}
    >
        <path
            style={{
                fill: "none",
            }}
            d="M0 0h100v100H0z"
        />
        <path
            fill="#000000"
            d="M50 15c-19.33 0-35 15.67-35 35s15.67 35 35 35 35-15.67 35-35-15.67-35-35-35zm-5.599 50.572L29.564 50.735l5.109-5.109 9.728 9.728 20.926-20.926 5.109 5.109-26.035 26.035z"
        />
    </svg>
)

export default SvgComponent
