import bus from '@/bus.js'
export default {
    methods: {
        sendData(val){
            console.log(val,'val');
            this.$bus.$emit("controllerTobox", val)
        }
        
    },
    mounted() {
        this.$bus.$on("boxToController", function(val){
            console.log(val,"controller收到");
        })
        this.$bus.$on("box-controller1", function(val){
            console.log(val,"controller收到");
            this.$bus.$emit("controller-box2",'我在中国北京')
        })
        // this.$bus.$on('box-controller1', function (val) {
        //     console.log('controller接收到', val)
        //     this.$bus.$emit('controller-box1', '072号')
        // })
    },
}
  