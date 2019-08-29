<template>
    <div>
        <button @click="showMessage">点我弹框</button>
    </div>
</template>

<script>
export default {
    methods: {
        showMessage(){
            Message.info({
                message:"jbone很帅",
                duration:3000,
            })
        }
    },
}
</script>
