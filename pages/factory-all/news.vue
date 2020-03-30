<template>
    <div class="page">
        news -- {{num}}
    </div>
</template>

<script>
import {micrometerLevel} from '@/static/js/normal.js';
export default {
    data(){
        return {
            num:0
        }
    },
    mounted(){
        this.num = micrometerLevel(1000, 2);
    }
}
</script>