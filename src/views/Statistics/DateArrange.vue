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

                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="活动名称" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="活动类型" prop="region">
                            <el-select v-model="ruleForm.region" placeholder="请选择活动类型">
                                <el-option label="正式赛" value="contest"></el-option>
                                <el-option label="训练赛" value="train"></el-option>
                                <el-option label="专题授课" value="leason"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="活动时间" required>
                            <el-col :span="11">
                                <el-form-item prop="date1">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                        style="width: 100%;" :shortcuts="shortcuts"></el-date-picker>
                                </el-form-item>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-form-item prop="date2">
                                    <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;">
                                    </el-time-picker>
                                </el-form-item>
                            </el-col>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>


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
                activeName: 'second',
                disabledDate(time) {
                    return time.getTime() > Date.now()
                },
                shortcuts: [{
                    text: 'Today',
                    value: new Date(),
                }, {
                    text: 'Tomorrow',
                    value: (() => {
                        const date = new Date()
                        date.setTime(date.getTime() + 3600 * 1000 * 24)
                        return date
                    })(),
                }, {
                    text: 'A week Later',
                    value: (() => {
                        const date = new Date()
                        date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
                        return date
                    })(),
                }],
                value1: '',
                value2: '',

                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [{
                            required: true,
                            message: '请输入活动名称',
                            trigger: 'blur'
                        },
                        {
                            min: 0,
                            max: 20,
                            message: '长度在 0 到 20 个字符',
                            trigger: 'blur'
                        }
                    ],
                    region: [{
                        required: true,
                        message: '请选择活动类型',
                        trigger: 'change'
                    }],
                    date1: [{
                        type: 'date',
                        required: true,
                        message: '请选择日期',
                        trigger: 'change'
                    }],
                    date2: [{
                        type: 'date',
                        required: true,
                        message: '请选择时间',
                        trigger: 'change'
                    }],
                }
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>