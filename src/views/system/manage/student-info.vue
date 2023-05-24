<template>
    <div>
        <el-form :model="searchForm" inline>
            <el-form-item label="年级">
                <el-select v-model="searchForm.grade">
                    <el-option v-for="grade in gradeOptions" :key="grade" :value="grade" :label="grade"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业">
                <el-select v-model="searchForm.major">
                    <el-option v-for="major in majorOptions" :key="major" :value="major" :label="major"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="班级">
                <el-select v-model="searchForm.class">
                    <el-option v-for="classItem in classOptions" :key="classItem" :value="classItem"
                        :label="classItem"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="searchStudents">查询</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="students" border>
            <el-table-column prop="grade" label="年级"></el-table-column>
            <el-table-column prop="major" label="专业"></el-table-column>
            <el-table-column prop="class" label="班级"></el-table-column>
            <el-table-column prop="gender" label="性别"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import options from '../options.js';

export default {
    data() {
        return {
            searchForm: {
                grade: '',
                major: '',
                class: ''
            },
            gradeOptions: options.grades,
            majorOptions: options.majors,
            classOptions: options.classes,
            students: []
        };
    },
    methods: {
        searchStudents() {
            // 模拟后端请求，根据条件查询学生数据
            // 假设后端接口为 '/api/students/search'
            const params = {
                grade: this.searchForm.grade,
                major: this.searchForm.major,
                class: this.searchForm.class
            };
            // 发送请求获取学生数据
            // 以下为模拟请求，实际项目中请使用适合的请求方式（如axios）
            setTimeout(() => {
                this.students = [
                    { grade: '2017级', major: '软件工程', class: '软件1701班', gender: '男', name: '张三' },
                    { grade: '2018级', major: '机械工程', class: '机械1801班', gender: '女', name: '李四' },
                    { grade: '2019级', major: '土木工程', class: '土木1901班', gender: '男', name: '王五' },
                    // 添加根据查询条件返回的更多学生数据
                ];
            }, 500); // 模拟延迟
        },
        resetForm() {
            this.searchForm = {
                grade: '',
                major: '',
                class: ''
            };
        }
    },
    created() {
        // 页面初始化时获取所有学生数据
        // 模拟后端请求，获取学生数据
        // 假设后端接口为 '/api/students/all'
        // 以下为模拟请求，实际项目中请使用适合的请求方式（如axios）
        setTimeout(() => {
            this.students = [
                { grade: '2017级', major: '软件工程', class: '软件1701班', gender: '男', name: '张三' },
                { grade: '2018级', major: '机械工程', class: '机械1801班', gender: '女', name: '李四' },
                { grade: '2019级', major: '土木工程', class: '土木1901班', gender: '男', name: '王五' },
                // 添加更多学生数据
            ];
        }, 500); // 模拟延迟
    }
};
</script>
