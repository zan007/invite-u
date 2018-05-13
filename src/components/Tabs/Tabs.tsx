import * as React from "react"
import {ITabProps} from "./Tab"

interface ITabsProps {
  children: Array<React.ReactElement<ITabProps>>
}

interface ITabsState {
  activeTabIndex: number
}

class Tabs extends React.Component<ITabsProps, ITabsState> {
  constructor(props: any) {
    super(props)

    this.state = {activeTabIndex: 0}
  }

  render() {
    return (
      <div className="tabs-container">
        <div className="row align-center">
          <div className="shrink column">
            <ul className="tabs-nav">
              {this.renderTabList()}
            </ul>
          </div>
        </div>
        <div className="tabs-content">
          {this.renderActiveTab()}
        </div>
      </div>
    )
  }

  private renderActiveTab() {
    const activeTabIndex = this.state.activeTabIndex

    if (this.props.children && this.props.children[activeTabIndex]) {
      return this.props.children[activeTabIndex].props.children
    }
  }

  private onTabClick = (activeTabIndex: number) => {
    this.setState({activeTabIndex})
  }

  private renderTabList() {
    return React.Children.map(this.props.children, (child: React.ReactElement<any>, index: number) => {
      return React.cloneElement(child, {
        name: child.props.name,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex,
        onClick: this.onTabClick,
      })
    })
  }
}

export {Tabs}
