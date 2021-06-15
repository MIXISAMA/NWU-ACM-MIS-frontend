<template>
  <div>
    <HomeSectionFrontCover/>
    <HomeSectionIntroduction/>
    <HomeSectionHighLight/>
    <HomeSectionMoreHonor/>
    <HomeSectionSchedule/>
    <HomeSectionMember/>
    <HomeSectionFaq/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HomeSectionFrontCover from '@/components/HomeSectionFrontCover.vue'
import HomeSectionIntroduction from '@/components/HomeSectionIntroduction.vue'
import HomeSectionHighLight from '@/components/HomeSectionHighLight.vue'
import HomeSectionMoreHonor from '@/components/HomeSectionMoreHonor.vue'
import HomeSectionSchedule from '@/components/HomeSectionSchedule.vue'
import HomeSectionMember from '@/components/HomeSectionMember.vue'
import HomeSectionFaq from '@/components/HomeSectionFaq.vue'

@Options({
  components: {
    HomeSectionFrontCover,
    HomeSectionIntroduction,
    HomeSectionHighLight,
    HomeSectionMoreHonor,
    HomeSectionSchedule,
    HomeSectionMember,
    HomeSectionFaq,
  }
})
export default class Home extends Vue {}
</script>
