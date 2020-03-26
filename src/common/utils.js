/*
 * @Author: your name
 * @Date: 2020-03-21 09:59:46
 * @LastEditTime: 2020-03-21 10:00:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\src\common\utils.js
 */
export function debounce(func,delay){
    let timer = null
    return function (...agrs) {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this,agrs)
      },delay)
    }
  }
