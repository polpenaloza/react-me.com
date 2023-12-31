import '@total-typescript/ts-reset'

declare module 'sugar' {
  const Sugar: sugarjs.Sugar

  export = Sugar
}

declare let Sugar: sugarjs.Sugar

export default Sugar
