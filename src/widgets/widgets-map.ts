import {WidgetFooter} from "widgets/WidgetFooter"
import {WidgetSeeAtMap} from "widgets/WidgetSeeAtMap"

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
  widgetPhoneNumber: require("widgets/WidgetPhoneNumber").default,
  widgetMap: require("widgets/WidgetMap").default,
  widgetSeeAtMap: WidgetSeeAtMap,
  widgetFooter: WidgetFooter,
}
