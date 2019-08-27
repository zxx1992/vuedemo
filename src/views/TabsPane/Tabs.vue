

<template>
    <div class="tabs">
        <div class="tabs-bar">
            <div v-for="(item, index) in navList" :key="index" @click="handleChange(index)">{{item.label}}</div>
        </div>
        <div class="tabs-content">
            <pane label="标签1" name="1" :list="list1"></pane>
            <pane label="标签2" name="2" :list="list2"></pane>
            <pane label="标签3" name="3" :list="list3"></pane>
        </div>
    </div>
</template>
<script>
import pane from "../../components/Pane"
export default {
    components: {
        pane
    },
    data() {
        return {
            currentValue: "", 
            navList: [],//tabs的标题
            list1: "标签1内容",
            list2: "标签2内容",
            list3: "标签3内容",
        }
    },
    methods: {
        // 找到组件pane
        getTabs() {
            return this.$children.filter((curVal, index, arr) => {
                return curVal.$options._componentTag === 'pane'
            })
        },
        updateNav() {
            // 将pane组件的标题push为一个数组
            this.navList = [];
            this.getTabs().map((val, index) => {
                this.navList.push({
                    label: val.label,
                    name: val.name || index
                })
            })
            // 当前值设置为第一个tab
            this.currentValue = this.navList[0].name;
            // 更新状态，显示当前tab
            this.updateStatus();
        },
        updateStatus() {
            this.getTabs().map((val, index) => {
                return val.show = val.name === this.currentValue
            })
        },
        handleChange(index) {
            let nav = this.navList[index];
            let name = nav.name;
            this.currentValue = name;
            // 更新状态，显示当前tab
            this.updateStatus();
        }
    },
    mounted() {
    }
}
</script>