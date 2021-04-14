/**
 * @description: 针对通过get方式来导出文件的接口
 * @param params {Object} 需要的参数
 * @param url {String} 导出地址
 * @return 
 */
import { getToken } from '@/utils/auth.js'
export const ExportFile = (params, url) => {
    let token = getToken("token");
    const protocol = window.location.protocol;
    const domain = document.domain;
    const post = window.location.port;
    let paramsStr = ""
    for (let key in params) {
        paramsStr += key + "=" + params[key] + "&"
    }
    const fileDownUrl = protocol + "//" + domain + ":" + post + url + "?" + paramsStr + "token=" + token;
    window.open(fileDownUrl);
}