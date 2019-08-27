

<template>
    <div class="pane" v-show="show">
    {{list}}
    </div>
</template>
<script>
export default {
    name: "pane",
    // 子组件共定义4个变量：3个from父组件，1个在data中定义
    props: {
        name: {
            type: String
        },
        label: {
            type: String
        },
        list:{
            type: String
        }
    },
    data() {
        return {
            show: false//默认都不显示，在父组件中，默认显示第一个
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav();
        }
    },
    mounted() {
        this.updateNav()
    }
}
</script>