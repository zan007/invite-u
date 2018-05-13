import * as React from "react"

import "./Scroll.scss"

interface IProps {
  direction: "up" | "down"
}

class Scroll extends React.Component<IProps> {
  private button: HTMLButtonElement

  handleClick = () => {
    const currentSection = this.button.parentNode

    if (currentSection) {
      const nextSection = currentSection.nextSibling
      let distance = 0

      if (nextSection) {
        const windowOffset = window.scrollY
        const nextSectionOffset = (nextSection as HTMLElement).getBoundingClientRect().top
        distance = windowOffset + nextSectionOffset
      }

      window.scroll({
        top: distance,
        behavior: "smooth",
      })
    }
  }

  createButtonRef = (button: HTMLButtonElement) => {
    this.button = button
  }

  render() {
    const direction = this.props.direction || "down"

    return (
      <button
        ref={this.createButtonRef}
        onClick={this.handleClick}
        className={`scroll-${direction} icon icon-arrow-${direction}`}
      />
    )
  }
}

export {Scroll}
