export const findReferencedItem = (list: any[] = [], id: string) => {
  return list.find((entry: any) => entry.sys && entry.sys.id === id)
}
