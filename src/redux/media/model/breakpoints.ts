import {Record} from "immutable"

interface IBreakpoint {
  small: boolean,
  medium: boolean,
  large: boolean,
}

export class Breakpoints extends Record<IBreakpoint>({
  small: false,
  medium: false,
  large: false,
}) {}
