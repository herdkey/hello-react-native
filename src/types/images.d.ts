/**
 * Support importing image files.
 */

// allow importing .png files
declare module '*.png' {
  const value: number;
  export default value;
}

declare module '*.jpg' {
  const src: number;
  export default src;
}

declare module '*.jpeg' {
  const src: number;
  export default src;
}
