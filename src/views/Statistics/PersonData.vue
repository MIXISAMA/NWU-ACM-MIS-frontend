<template>
    <el-container>
        <el-main>
            <el-row :span="6" v-for="(x, index) in 3" :key="x" :offset="index > 0 ? 2 : 0">
                <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
                        <div style="padding: 10px;">
                            <span>Name:</span><br/>
                            <span>MaxRating:</span>
                            <div class="bottom">
                                <router-link to="person-data/1"><el-button type="text" class="button">详细信息</el-button></router-link>
                            </div>
                        </div>
                    </el-card>
                    <br/><br/>
                </el-col>
            </el-row>
        </el-main>
        <el-footer>
            <div class="block">
                <el-pagination layout="prev, pager, next" :total="50" >
                </el-pagination>
            </div>
        </el-footer>
    </el-container>
</template>


<style>
  
  .bottom {
    margin-top: 10px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 10;
    min-height: auto;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>

<script scope>

</script>