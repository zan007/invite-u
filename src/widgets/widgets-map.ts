import {WidgetFooter} from "widgets/WidgetFooter"

interface IWidgetsMap {
  [key: string]: any
}

export const widgetsMap: IWidgetsMap = {
  section: require("widgets/WidgetSection").default,
  widgetHeader: require("widgets/WidgetHeader").default,
  widgetMeetUs: require("widgets/WidgetMeetUs").default,
  widgetQuote: require("widgets/WidgetQuote").default,
  widgetStory: require("widgets/WidgetStory").default,
  widgetConfirmation: require("widgets/WidgetConfirmation").default,
  widgetEvent: require("widgets/WidgetEvent").default,
  widgetFooter: WidgetFooter,
}
