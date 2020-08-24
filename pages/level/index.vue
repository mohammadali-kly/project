<template>
  <v-container fluid class="pa-0">
    <img style="width:100%" src="main.jpg" usemap="#workmap" />
    <map name="workmap">
      <area v-for="item in items" :key="item.x" shape="circle" :coords="`${item.x},${item.y},${item.r}`" alt="Coffee"  href="coffee.htm" />
    </map>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      items : [
        {x:360,y:179,r:60},
        
      ]
    }
  },
  mounted() {
    imageMapResize();
    setTimeout(function () {
      window.scrollTo(0, 1920);
    }, 200);
  },
};
</script>

<style>
</style>