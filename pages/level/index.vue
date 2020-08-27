<template>
  <v-container fluid class="pa-0">
    <img style="width:100%" src="/main.jpg" usemap="#workmap" />
    <map name="workmap">
      <area
        v-for="(item,index) in items"
        :key="item.y"
        shape="circle"
        :coords="`${item.x},${item.y},${item.r}`"
        alt="Coffee"
        @click="$router.push('/level/'+(52-index)+'/video')"
      />
    </map>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { x: 360, y: 179,  r: 60 },
        { x: 740, y: 330,  r: 60 },
        { x: 360, y: 460,  r: 60 },
        { x: 320, y: 735,  r: 60 },
        { x: 600, y: 600,  r: 60 },
        { x: 725, y: 865,  r: 60 },
        { x: 400, y: 960,  r: 60 },
        { x: 345, y: 1177, r: 60 },
        { x: 640, y: 1280, r: 60 },
        { x: 453, y: 1441, r: 60 },
        { x: 212, y: 1640, r: 60 },
        { x: 528, y: 1588, r: 60 },
        { x: 715, y: 1740, r: 60 },
        { x: 590, y: 1980, r: 60 },
        { x: 320, y: 1930, r: 60 },
        { x: 215, y: 2140, r: 60 },
        { x: 500, y: 2200, r: 60 },
        { x: 725, y: 2274, r: 60 },
        { x: 590, y: 2484, r: 60 },
        { x: 270, y: 2540, r: 60 },
        { x: 346, y: 2775, r: 60 },
        { x: 600, y: 2747, r: 60 },
        { x: 714, y: 2900, r: 60 },
        { x: 520, y: 3030, r: 60 },
        { x: 285, y: 3031, r: 60 },
        { x: 232, y: 3252, r: 60 },
        { x: 528, y: 3282, r: 60 },
        { x: 706, y: 3447, r: 60 },
        { x: 390, y: 3577, r: 60 },
        { x: 318, y: 3860, r: 60 },
        { x: 645, y: 3814, r: 60 },
        { x: 642, y: 4064, r: 60 },
        { x: 261, y: 4023, r: 60 },
        { x: 464, y: 4304, r: 60 },
        { x: 725, y: 4432, r: 60 },
        { x: 432, y: 4522, r: 60 },
        { x: 180, y: 4679, r: 60 },
        { x: 586, y: 4678, r: 60 },
        { x: 690, y: 4878, r: 60 },
        { x: 375, y: 4912, r: 60 },
        { x: 370, y: 5120, r: 60 },
        { x: 711, y: 5136, r: 60 },
        { x: 587, y: 5343, r: 60 },
        { x: 292, y: 5451, r: 60 },
        { x: 281, y: 5700, r: 60 },
        { x: 568, y: 5601, r: 60 },
        { x: 651, y: 5822, r: 60 },
        { x: 280, y: 5890, r: 60 },
        { x: 330, y: 6060, r: 60 },
        { x: 630, y: 6063, r: 60 },
        { x: 588, y: 6300, r: 60 },
        { x: 275, y: 6290, r: 60 },
      ],
    };
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