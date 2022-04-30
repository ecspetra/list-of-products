import * as React from "react"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Icons"
        x={0}
        y={0}
        width={32}
        height={32}
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        {...props}
    >
        <style>
            {
                ".st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
            }
        </style>
        <path
            className="st0"
            d="M13.5 20c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5H6c0 3.3 2.7 6 6 6s6-2.7 6-6h-4.5z"
        />
        <path
            className="st0"
            d="M13.5 20c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5H3c0 5 4 9 9 9s9-4 9-9h-7.5zM12.7 21.3l2.3 4M9 25.3l2.3-4M22.7 8.3c-1.8 1.8-5.3 1.3-5.3 1.3s-.5-3.5 1.3-5.3C20.5 2.5 24 3 24 3s.5 3.5-1.3 5.3z"
        />
        <path
            className="st0"
            d="M22.9 8.1C26.5 9.9 29 13.7 29 18c0 6.1-4.9 11-11 11-1.1 0-2.1-.1-3-.4M17.4 7c-5.1.3-9.3 4.1-10.2 9"
        />
    </svg>
)

export default SvgComponent
