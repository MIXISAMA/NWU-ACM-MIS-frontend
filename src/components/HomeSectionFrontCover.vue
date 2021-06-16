<template>
  <section style="height: 100%;">
    <div id="carouselExampleIndicators" 
      class="carousel slide" 
      data-bs-ride="carousel">
      <div class="carousel-indicators">
        <div 
          v-for="item in imgItemData"
          :key="item[0]">
          <button 
            type="button" 
            data-bs-target="#carouselExampleIndicators" 
            :data-bs-slide-to=(item[0]-1) 
            :class=item[1]
            :aria-current="item[0] == 1 ? true : false" 
            :aria-label="'Slide' + item[0]">
          </button>
        </div>
      </div>
      <div class="carousel-inner">
        <div 
          v-for="item in imgItemData" 
          :key="item[0]" 
          :class="'carousel-item ' + item[1] +' zmd'" 
          :style="{backgroundImage: 'url(' + item[2] + ')'}">
          <p class="text-shadow">Welcome to NWU ACM!</p>
          <a href="#introduction"> 
            <button 
              type="button" 
              class="btn btn-dark btn-lg about">
              Get Start
            </button>
          </a>
        </div>
      </div>
      <button 
        class="carousel-control-prev" 
        type="button" 
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button 
        class="carousel-control-next" 
        type="button" 
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'

export default class HomeSectionFrontCover extends Vue {
  imgItemData = [
    [1, 'active', 'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg1.jpg'],
    [2, '', 'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg2.jpg'],
    [3, '', 'https://mail.nwu.edu.cn/coremail/common/assets/index_cmxt50/img/mainBg3.jpg'],
  ]
}
</script>

<style scoped>
 .text-shadow{
    text-shadow:#13121a 0 0 10px;
    color:rgb(231, 221, 221);
    font-size:60px;
    float: left;
  }
  .about {
    margin-top: 1%;
    margin-left: 3%;
  }
  .zmd{
    background-size:100% 100%;
    height: 100vh;
    width: 100vw;
    opacity: 0.8;
  }
</style>