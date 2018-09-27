declare module "uuid" {
  const uuid: IUuid
  interface IUuid {
    v4: () => string
  }

  export default uuid
}
