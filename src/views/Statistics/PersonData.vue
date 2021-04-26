<template>
    <el-container>
        <el-main>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:30px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:340px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:650px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:30px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:340px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:650px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:30px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:340px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="block" style="position:absolute;left:650px;top:20px">
                            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<style>
    .el-row {
        margin-bottom: 20px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #f1f3f7;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 200px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>


<script>
    export default {
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
                sizeList: ["large", "medium", "small"]
            }
        }
    }
</script>