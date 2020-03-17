/*
 * @Author: your name
 * @Date: 2020-03-17 10:37:11
 * @LastEditTime: 2020-03-17 10:37:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueclic:\Users\Administrator\Desktop\vue\shopv\vue.config.js
 * 配置别名
 */
module.exports={
    configureWebpack:{
        resolve:{  //解决路径问题
            alias:{
                // '@':'src'  //已配置
                'assets' : '@assets',
                'common' : '@common',
                'components' : '@components',
                'network' : '@network',
                'views' : '@views',
                // 'router' : '@router',   只引用一次，可以不用
            }
        }
    }
}