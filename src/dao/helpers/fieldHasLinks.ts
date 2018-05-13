export const fieldHasLinks = (field: any, type: string = "Link") => {
  if (Array.isArray(field) && field.length) {
    const sys = field[0].sys

    if (sys) {
      return sys.type && sys.type === type
    }
  }

  return false
}
