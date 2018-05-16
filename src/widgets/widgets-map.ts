
interface IWidgetsMap {
  [key: string]: any
}

export const widgetsMap: IWidgetsMap = {
  section: require("widgets/WidgetSection").default,
  widgetHeader: require("widgets/WidgetHeader").default,
  widgetMeetUs: require("widgets/WidgetMeetUs").default,
}
