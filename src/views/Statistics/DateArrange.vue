<template>
    <el-container>
        <el-main style="position:fixed;left:230px;top:60px;height:600px">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="日程安排" name="first">
                    <el-calendar>
                        <template #dateCell="{data}">
                            <p :span="24" class="data.isSelected ? 'is-selected' : ''">
                                {{ data.day.split('-').slice(1).join('.') }} {{ data.isSelected ? '✔️' : '' }}
                            </p>
                        </template>
                    </el-calendar>
                </el-tab-pane>
                <el-tab-pane label="添加事件" name="second">

                </el-tab-pane>

            </el-tabs>
        </el-main>
    </el-container>
</template>

<style>
    .is-selected {
        color: #1989FA;
    }
</style>

<script>
    export default {
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>