<template>
    <div class="page">
        all-xxx
        <br>
        <ul>
            <li><nuxt-link :to="{path:'/factory-all/detail/333'}">详情页动态路由页面</nuxt-link></li>
            <li><nuxt-link :to="{path:'/factory-all/news'}">新闻页面</nuxt-link></li>
        </ul>
        
        
        <div id="myChart" style="height:300px;"></div>
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
			this.$router.push({path:'/factory/'})
		},
        echartInit(){
            // 找到容器
            let myChart = this.$echarts.init( $('#myChart')[0] )
            // 开始渲染
            myChart.setOption({
                title: {text: '在Vue中使用echarts'},
                tooltip: {},
                xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
                }]
            })
        }
    },
    mounted(){
        this.echartInit();
    }
    
}
</script>