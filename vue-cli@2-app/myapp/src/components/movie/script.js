import Controller from './controller/index'
import Box from './box/index'

export default {
    components: {
        'v-box': Box,
        'v-controller': Controller
    },
    // 路由导航守卫 
    beforeRouteEnter (to, from, next) {
        let r = confirm('你买电影票了吗')
        r? next() : next(false)
    },
    beforeRouteLeave (to, from, next) {
        let r= confirm('您付钱了吗')
        r? next(): next(false)
    }
}