<template>
  <div>{{msg}}</div>
</template>

<script>
export default {
    name:'HelloWorld',
    props:{
        msg:{
            required:true,
        }
    },
    data(){
        return{}
    }
}
</script>

<style>

</style>