import '@total-typescript/ts-reset'

declare module 'sugar' {
  const Sugar: sugarjs.Sugar

  export = Sugar
}

declare let Sugar: sugarjs.Sugar

declare module 'turnstone'
declare module 'turnstone-recent-searches'
declare module 'split-match'

export default Sugar
