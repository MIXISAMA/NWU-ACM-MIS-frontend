<template>
    <el-container>
        <el-main>
            <el-row :span="6">
                <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
                        <div style="padding: 10px;">
                            <span>Name</span>
                            <div class="bottom">
                                <b><el-button type="text" class="button">详细信息</el-button></b>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <br/><br/>
            <el-row :span="6">
                <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
                        <div style="padding: 10px;">
                            <span>Name</span>
                            <div class="bottom">
                                <b><el-button type="text" class="button">详细信息</el-button></b>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <br/><br/>
            <el-row :span="6">
                <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
                        <div style="padding: 10px;">
                            <span>Name</span>
                            <div class="bottom">
                                <b><el-button type="text" class="button">详细信息</el-button></b>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
        <el-footer>
            <div class="block">
                <el-pagination layout="prev, pager, next" :total="50" style="position:absolute;left:650px">
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

<script>
    export default {
        data() {
            return {
                currentDate: new Date(),
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                sizeList: ["large", "medium", "small"]
            };
        }
    }
</script>