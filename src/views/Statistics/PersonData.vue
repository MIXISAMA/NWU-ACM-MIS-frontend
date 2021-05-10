<template>
    <el-container>
        <el-main>
            <el-table :data="tableData" style="width: 90%" :row-class-name="tableRowClassName">
                <el-table-column prop="department" label="专业" width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="studentID" label="学号" width="180">
                </el-table-column>
                <el-table-column prop="rating" label="Rating" width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>


<style>
    .el-table .novice-row {
        background: rgb(179, 247, 173);
    }

    .el-table .ad-row {
        background: #d7def7;
    }

    .el-table .retired-row {
        background: #ecc886;
    }
</style>

<script scope>
    export default {
        methods: {
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex === 1) {
                    return 'retired-row';
                } else if (rowIndex === 3) {
                    return 'novice-row';
                }
                return 'ad-row';
            },
            handleClick(row) {
                console.log(row);
                this.$router.push({ path: '../'+ row.studentID});
            }
        },
        data() {
            return {
                tableData: [{
                        department: '软工',
                        name: '张钧博',
                        studentID: '2018xxxxxx',
                        rating: '1800',
                    }, {
                        department: '软工',
                        name: '张钧博',
                        studentID: '2018xxxxxx',
                        rating: '1800',
                    }, {
                        department: '软工',
                        name: '张钧博',
                        studentID: '2018xxxxxx',
                        rating: '1800',
                    }, {
                        department: '软工',
                        name: '张钧博',
                        studentID: '2018xxxxxx',
                        rating: '1800',
                    },

                ]
            }
        }
    }
</script>