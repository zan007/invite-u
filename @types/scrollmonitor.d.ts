declare module "scrollmonitor" {
  interface IOffset {
    top?: number
    bottom?: number
  }

  export interface IWatcher {
    visibilityChange(cb: Function): void
    stateChange(cb: Function): void
    enterViewport(cb: Function): void
    exitViewport(cb: Function): void
    stateChange(cb: Function): void
    lock(): void
    fullyEnterViewport(cb: Function): void
    partiallyExitViewport(cb: Function): void

    destroy(): void

    isInViewport: boolean
    isFullyInViewport: boolean
    isAboveViewport: boolean
    isBelowViewport: boolean
    top: number
    bottom: number
    height: number
    watchItem: HTMLElement | number
    offsets: IOffset | number
  }

  interface IScrollMonitor {
    create(el: HTMLElement, params?: IOffset | number): IWatcher
  }

  const scrollMonitor: IScrollMonitor

  export default scrollMonitor
}
