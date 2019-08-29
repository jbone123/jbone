import axios from 'axios'
import Vue from 'vue'
import { Loadmore, Toast, CellSwipe} from 'mint-ui';
Vue.use(Loadmore)

export default {
    data(){
        return {
            castslist:[],
            allLoaded: false,
            skipNum: 0,
        }
    },
    methods: {
        //顶部下拉
        loadTop() {
            setTimeout(() => {
                axios.get('http://localhost:3000/api/castspaging', {
                    params: {
                        limitNum: 6,
                        skipNum: 0
                    }
                }).then((res) => {
                    this.castslist = res.data
                  this.skipNum = 0
                    this.$refs.loadmore.onTopLoaded();
                })
                    .catch((err) => {
                    console.log(err)
                })
              }, 1000)
        },
        // 底部上拉
        loadBottom() {
            setTimeout(()=>{
                axios.get('http://localhost:3000/api/castspaging',{
                params: {
                    limitNum: 6,
                    skipNum: this.skipNum
                }
            }).then(res=>{
                res.data.length > 0 ? this.allLoaded = false : this.allLoaded = true 
                this.allLoaded == false ? this.skipNum += 1 : Toast("数据加载完毕")
                this.castslist=[...this.castslist, ...res.data]
                this.$refs.loadmore.onBottomLoaded();
            })
            .catch(err=>{
                console.log(err);
            })
            },1000)
        },
        getCastDataSuccess(res) {
            const {data} = res
            this.castslist= data
        },
        getCastDataFail(err){
            console.log(err)
        }
    },
    mounted() {
        // axios.get('http://localhost:3000/api/castspaging',{
        //     params: {
        //         limitNum: 6,
        //         skipNum: 0
        //       }
        // }).then(this.getCastDataSuccess)
        // .catch(this.getCastDataFail)
    }
}
