import * as React from "react"
import {Entry} from "contentful"
import {Spinner} from "components/Spinner"
import {widgetsMap} from "widgets/widgets-map"

interface IProps {
  items: Array<Entry<any>>
  wrapper?: JSX.Element
}

class WidgetsList extends React.Component<IProps> {
  render() {
    const {items, children} = this.props

    if (items) {
      if (children && !Array.isArray(children)) {
        return this.appendWidgetsIntoChild()
      }

      return this.renderWidgets()
    }

    return <Spinner />
  }

  private appendWidgetsIntoChild = () => {
    const {children} = this.props

    return React.Children.map(children, (child: React.ReactElement<any>) => {
      return React.cloneElement(child, undefined, this.renderWidgets())
    })
  }

  private renderWidgets = () => {
    const {items} = this.props

    return items.map(this.renderComponent)
  }

  private renderComponent = (widget: Entry<any>, idx: number) => {
    if (widget) {
      const {sys, fields: props} = widget

      if (sys && props) {
        const componentName = sys.contentType.sys.id
        const Component = widgetsMap[componentName]

        if (Component) {
          return <Component key={idx} {...props} />
        }
      }
    }

    return null
  }
}

export {WidgetsList}
