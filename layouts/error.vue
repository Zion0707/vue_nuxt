<template>
    <div class="page">
        <!-- 返回错误码 -->
        <div>{{ error.statusCode }}</div>
        <router-link to="/factory-all/">回到首页</router-link>
    </div>
</template>

<script>
export default {
    props:['error']
}
</script>