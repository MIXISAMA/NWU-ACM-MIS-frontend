<template>
    <el-container>
        <el-main>
            <el-table :data="tableData" style="width: 90%" :row-class-name="tableRowClassName">
                <el-table-column prop="state" label="状态" width="150"
                    :filters="[{ text: '萌新', value: '萌新' }, { text: '现役', value: '现役' },
                    { text: '退役', value: '退役' }]"
                    :filter-method="filterTag">
                    <template #default="scope">
                        <el-tag :type="scope.row.state === '现役' ? 'primary' : 'success'" disable-transitions>
                            {{scope.row.state}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="150">
                </el-table-column>
                <el-table-column prop="studentID" label="学号" width="150">
                </el-table-column>
                <el-table-column prop="rating" label="Rating" width="150">
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                    <template #default="scope">
                        <el-button @click="handleClick(scope.row)" icon="el-icon-search" round></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>


<style>
    .el-table .row-color {
        background: rgb(233, 246, 248);
    }
</style>

<script scope>
    export default {
        methods: {
            tableRowClassName({
                row,
            }) {
                return 'row-color';
            },
            handleClick(row) {
                console.log(row);
                this.$router.push({
                    path: '/person-data/' + row.studentID
                });
            },
            filterTag(value, row) {
                return row.state === value;
            },
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('date');
            },
        },
        data() {
            return {
                tableData: [{
                        name: '张钧博',
                        studentID: '20181xxxxx',
                        rating: '1800',
                        state: '萌新',
                    }, {
                        name: '张钧博',
                        studentID: '20182xxxxx',
                        rating: '1800',
                        state: '现役'
                    },{
                        name: '张钧博',
                        studentID: '20183xxxxx',
                        rating: '1800',
                        state: '退役'
                    },

                ]
            }
        }
    }
</script>