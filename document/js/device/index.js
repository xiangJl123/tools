export const isPC = () => {
    const userAgentInfo = navigator.userAgent
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    var flag = true
    for (let i = 0; i < Agents.length; i++) {
      if (userAgentInfo.indexOf(Agents[i]) > 0) {
        flag = false
        break
      }
    }
    return flag
  }
  
  export const isMac = () => {
    return /macintosh|mac os x/i.test(navigator.userAgent)
  }
  
  export const isIos = () => {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
  }
  
  export const isAndroid = () => {
    var isAndroid
    if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      isAndroid = false
    } else if (/(Android)/i.test(navigator.userAgent)) {
      isAndroid = true
    } else {
      isAndroid = false
    }
    return isAndroid
  }