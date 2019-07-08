import bus from '@/bus.js'
export default {
    methods: {
        sendData(val){
            this.$bus.$emit("box-controller1", val)
        }
        // sendData () {
        //     this.$bus.$emit('box-controller1', '在哪')
        //   }
    },
    mounted() {
        this.$bus.$on("controllerTobox", function(val){
            this.$bus.$emit("boxToController","马上到")
        })
        this.$bus.$on('controller-box2', function (val) {
            console.log("box接到电话1",val)
          })
        //   this.$bus.$on('controller-box1', function (val) {
        //     console.log("box接到消息",val)
            
        // })
    },
}
  