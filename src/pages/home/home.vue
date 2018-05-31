<template>
    <div id="home">
        <h2 class="h2">1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
        <h2>1</h2>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                foodList: []
            }
        },
        beforeMount() {
            console.log('home before');
            axios('http://cangdu.org:8001/shopping/restaurants?latitude=31.22299&longitude=121.36025&limit=20').then((res) => {
                console.log(res.data);
                this.foodList = res.data
            })
        }
    }
</script>

<style lang="less" scoped>
    
</style>