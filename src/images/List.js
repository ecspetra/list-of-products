import * as React from "react"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Icons"
        x={0}
        y={0}
        viewBox="0 0 32 32"
        width={32}
        height={32}
        style={{
            enableBackground: "new 0 0 32 32",
        }}
        xmlSpace="preserve"
        {...props}
    >
        <style>
            {
                ".st0{fill:none;stroke:#000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}"
            }
        </style>
        <path className="st0" d="M11 7h18M11 16h11M11 25h18" />
        <circle className="st0" cx={5} cy={7} r={2} />
        <circle className="st0" cx={5} cy={16} r={2} />
        <circle className="st0" cx={5} cy={25} r={2} />
    </svg>
)

export default SvgComponent
