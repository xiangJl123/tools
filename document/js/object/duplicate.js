/**
 * 对象数组根据属性去重
 * @param {*} data
 * @returns []
 */
 export function arrayClearReapt (data, key) {
    let arrs = data
    let newArrs = []
    for(let i = 0; i < arrs.length; i++) {
      let flag = false
      for(let j = i + 1; j < arrs.length; j++) {
        if (arrs[i][key] === arrs[j][key]) {
          flag = true
        }
      }
      if (!flag) newArrs.push(arrs[i])
    }
    return newArrs
  }