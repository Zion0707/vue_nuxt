<template>
    <div class="page">
        only-xxx

        <br>
		<a-button type="primary" @click="jump">我是非默认主题按钮</a-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
	methods:{
		jump(){
			this.$router.push({path:'/factory-all/'})
		}
	},
}
</script>