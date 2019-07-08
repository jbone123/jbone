import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.use(Swipe)
Vue.use(SwipeItem)

export default {
    methods: {
        goDireactors(){
            // this.$router.push('/directors')
            this.$router.push({path:'/directors'})
        }
    },
}