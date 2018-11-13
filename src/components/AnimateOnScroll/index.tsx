import * as React from "react"
import {Transition} from "react-transition-group"
import * as classnames from "classnames"

import "./AnimateOnScroll.scss"
import {InView} from "../InView"

type effects = "scaleIn" | "fadeIn"

interface IProps {
  visible: boolean
  children: React.ReactElement<any>
  duration?: number
  effect?: effects
}

interface IState {
  forceVisible: boolean
}

type transitionStates = "entering" | "entered"

class AnimateOnScroll extends React.PureComponent<IProps, IState> {
  inViewCallback: () => void

  constructor(props: IProps) {
    super(props)

    this.state = {
      forceVisible: false,
    }

    this.inViewCallback = () => {
      this.setState({forceVisible: true})
    }
  }

  getStyles(state: transitionStates) {
    if (state !== "entered") {
      return {
        transition: `all ${this.props.duration}ms ease-in-out`,
      }
    }
  }

  getClassList(state: transitionStates) {
    const animationTypesMap = {
      scaleIn: "scale-in",
      fadeIn: "fade-in",
    }
    const effect = this.props.effect || "fadeIn"

    return classnames({
      [state]: this.props.visible,
      "animate-on-scroll" : true,
      [animationTypesMap[effect]]: true,
    })
  }

  render() {
    const {duration, children} = this.props

    return (
      <InView callback={this.inViewCallback} whenFullyVisible={true}>
        <Transition in={this.state.forceVisible && this.props.visible} timeout={duration ? duration : 300}>
          {(state: transitionStates) => (
            <div
              style={this.getStyles(state)}
              className={this.getClassList(state)}
            >
              {children}
            </div>
          )}
        </Transition>
      </InView>
    )
  }
}

export {AnimateOnScroll}
