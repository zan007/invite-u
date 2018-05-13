/* tslint:disable:max-line-length */

export const prepareShapes = (id: string) => {
  return `
    <svg
      class="shapes"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 726 740"
    >
      <g class="wrapper">
        <path
          fill="#036add"
          class="left-rect left-color"
          d="M424.9 95H189c-32.5 0-64 23.2-70.2 51.6L1.1 687.6c-6.2 28.3 15.4 51.6 47.8 51.6h235.9c32.5 0 64-23.2 70.2-51.6l9.4-43.4 108.2-497.7c6.3-28.3-15.2-51.5-47.7-51.5z"
        />
        <path
          fill="#ffc41d"
          class="right-rect right-color"
          d="M677.1 0H441.2c-32.5 0-64 23.2-70.2 51.6l-117.7 541c-6.2 28.3 15.4 51.6 47.8 51.6H537c32.5 0 64-23.2 70.2-51.6l9.4-43.4L724.8 51.5C731.1 23.2 709.6 0 677.1 0z"
        />
        <defs>
          <path
            id="mask-a-${id}"
            class="right-rect"
            d="M677.1 0H441.2c-32.5 0-64 23.2-70.2 51.6l-117.7 541c-6.2 28.3 15.4 51.6 47.8 51.6H537c32.5 0 64-23.2 70.2-51.6l9.4-43.4L724.8 51.5C731.1 23.2 709.6 0 677.1 0z"
          />
        </defs>
        <clipPath id="mask-b-${id}">
          <use overflow="visible" xlink:href="#mask-a-${id}"/>
        </clipPath>
        <path
          fill="#05cc68"
          class="middle-rect middle-color"
          d="M424.9 95H189c-32.5 0-64 23.2-70.2 51.6L1.1 687.6c-6.2 28.3 15.4 51.6 47.8 51.6h235.9c32.5 0 64-23.2 70.2-51.6l9.4-43.4 108.2-497.7c6.3-28.3-15.2-51.5-47.7-51.5z"
          clip-path="url(#mask-b-${id})"}
        />
      </g>
    </svg>
  `
}
