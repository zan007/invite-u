declare module "google-maps-api-loader" {
  interface IParams {
    libraries: [string],
    apiKey: string
  }

  function googleMapsApiLoader(params: IParams): Promise<() => {}>

  export default googleMapsApiLoader
}
