declare module '*.worker.js?url' {
  const src: string;
  export default src;
}

declare module 'pdfjs-dist/build/pdf.worker?url' {
  const src: string;
  export default src;
}
