import * as React from "react"

import "./StyleguideColors.scss"

interface IColor {
  name: string
  variable: string
  hex: string
}

const palette: IColor[] = [
  {
    name: "white",
    variable: "$white",
    hex: "#ffffff",
  },
  {
    name: "black",
    variable: "$black",
    hex: "#000000",
  },
  {
    name: "light grey",
    variable: "$light-grey",
    hex: "#fafbfc",
  },
  {
    name: "dark grey",
    variable: "$dark-grey",
    hex: "#363636",
  },
  {
    name: "blue",
    variable: "$blue",
    hex: "#026add",
  },
  {
    name: "yellow",
    variable: "$yellow",
    hex: "#ffc41e",
  },
  {
    name: "green",
    variable: "$green",
    hex: "#05cb69",
  },
  {
    name: "salmon",
    variable: "$salmon",
    hex: "#ff6e5f",
  },
]

interface IProps {
}

const StyleguideColors: React.SFC<IProps> = () => {
  return (
    <div className="styleguide-colors-wrapper">
      {palette.map((color) => {
        const style = {
          backgroundColor: color.hex,
          border: color.name === "white" ? "1px solid #000000" : "0",
        }

        return (
          <div
            key={color.name}
            className="styleguide-color"
          >
            <div
              style={style}
              className="styleguide-color-circle"
            />
            <p className="styleguide-color-hex">{color.hex}</p>
            <p className="styleguide-color-variable">{color.variable}</p>
          </div>
        )
      })}
    </div>
  )
}

export {StyleguideColors}
