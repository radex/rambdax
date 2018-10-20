import { range, type } from 'rambda'
import { delay } from './delay'

export function waitFor (
    condition,
    howLong,
    loops = 10
  ){
    const typeCondition = type(condition)

    const passPromise = typeCondition === 'Async'
    const passFunction = typeCondition === 'Function'
    const interval = Math.floor(howLong/loops)

    if(!(passPromise || passFunction)){
      console.log(2);
      
      throw new Error('R.waitFor')
      // return false
    }
    
    if(passFunction){
      return async (...inputs) => {
        
        for (const i of range(0,loops)) {
          
          const resultCondition = condition(...inputs)
          
          if(resultCondition === false){
            await delay(interval)
          }else{
            return resultCondition
          }
        }
        
        return false
      }
    }

    return async (...inputs) => {
        
      for (const i of range(0,loops)) {
        
        const resultCondition = await condition(...inputs)

        if(resultCondition === false){
          await delay(interval)
        }else{
          return resultCondition
        }
      }
      
      return false
    }


}