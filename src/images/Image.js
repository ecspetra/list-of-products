import * as React from "react"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <path
            d="M30 5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v17a.76.76 0 0 0 0 .16 1.001 1.001 0 0 0 0 .17.88.88 0 0 0 .16.28A1 1 0 0 0 7 23a1 1 0 0 0 .73-.32l7.16-6.25 8 9.57H10a1 1 0 0 0 0 2h15a5 5 0 0 0 5-4.88V5Zm-14.92 9a1 1 0 0 0-.74.25L8 19.78V6h20v14.24l-3.23-3.88a.998.998 0 0 0-.72-.36 1.001 1.001 0 0 0-.76.29l-3.22 3.23-4.3-5.16a1 1 0 0 0-.69-.36Zm10.35 12-4.08-4.9 2.58-2.58 4 4.84a3 3 0 0 1-2.5 2.64Z"
            fill="#000"
        />
        <path
            d="M23 14a3 3 0 1 0 0-5.999A3 3 0 0 0 23 14Zm0-4a1 1 0 1 1 0 2.002A1 1 0 0 1 23 10ZM6 26H3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Z"
            fill="#000"
        />
    </svg>
)

export default SvgComponent
