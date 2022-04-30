import * as React from "react"

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        {...props}
    >
        <path d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4m0-2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2zm3.536 9.05 1.414 1.414L17.414 16l3.536 3.536-1.414 1.414L16 17.414l-3.536 3.536-1.414-1.414L14.586 16l-3.536-3.536 1.414-1.414L16 14.586l3.536-3.536z" />
    </svg>
)

export default SvgComponent
