<template>
    <div>
        <inputAddReduce v-model="value" :max="max" :min="min" @handleAdd="handleAdd" @handleReduce="handleReduce"></inputAddReduce>
    </div>
</template>
<script>
import inputAddReduce from '../components/InputAddReduce';
export default {
    components: {
        inputAddReduce
    },
    data () {
         return {
             value: 5,
             max: 10,
             min: 1
         }
    },
    methods: {
        handleAdd() {
            if (this.value === this.max) return
            this.value++
        },
        handleReduce() {
            if (this.value === this.min) return
            this.value--
        },
    }
}
</script>
