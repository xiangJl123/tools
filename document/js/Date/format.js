/*
* str:日期格式
* type:分隔符
* form: 模式 1年月日   2年月日时分秒 3中文汉字
 */
export const dateFormat = (str, type = '-', form = 1) => {
    const date = new Date(str)
    const year = date.getFullYear()
    const month = addZero(date.getMonth() + 1)
    const day = addZero(date.getDate())
    const hour = addZero(date.getHours())
    const minutes = addZero(date.getMinutes())
    const second = addZero(date.getSeconds())
    if (form === 1) {
      return `${year}${type}${month}${type}${day}`
    } else if (form === 0) {
      return `${year}${type}${month}${type}${day} ${hour}:${minutes}:${second}`
    } else {
      return `${year}年${month}月${day}日 ${hour}:${minutes}:${second}`
    }
  }