<template>
    <div class="app-container">

        <el-carousel height="80px" direction="vertical">
            <el-carousel-item v-for="item in message" :key="item.$slots">
                <h3 class="medium">{{ item.title }}:<span>{{ item.content }}</span></h3>
            </el-carousel-item>
        </el-carousel>

        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="200px" class="el-form">
            <el-form-item label="年级" prop="grade">
                <el-select v-model="ruleForm.grade" placeholder="请选择年级">
                    <el-option v-for="grade in grades" :key="grade" :label="grade" :value="grade"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="专业" prop="major">
                <el-select v-model="ruleForm.major" placeholder="请选择专业">
                    <el-option v-for="major in majors" :key="major" :label="major" :value="major"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="班级" prop="clazz">
                <el-select v-model="ruleForm.clazz" placeholder="请选择班级">
                    <el-option v-for="classItem in classes" :key="classItem" :label="classItem"
                        :value="classItem"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="ruleForm.gender">
                    <el-radio label="男">男</el-radio>
                    <el-radio label="女">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入姓名" style="width: 200px;"></el-input>
            </el-form-item>

            <el-form-item label="毕业去向" prop="destination">
                <el-select v-model="ruleForm.destination" placeholder="请选择毕业去向">
                    <el-option v-for="destination in destinations" :key="destination" :label="destination"
                        :value="destination"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="城市" prop="city">
                <el-select v-model="ruleForm.city" placeholder="请选择城市">
                    <el-option v-for="city in cities" :key="city" :label="city" :value="city"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="去该城市的原因" prop="reason">
                <el-select v-model="ruleForm.reason" placeholder="请选择去该城市的原因">
                    <el-option v-for="reason in reasons" :key="reason" :label="reason" :value="reason"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm">提交</el-button>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import options from '../options'; // 假设 options.js 文件中包含了选项数据

export default {
    data() {
        return {

            message: [
                { title: "招聘信息", content: "公司ABC招聘软件工程师，欢迎应聘。" },
                { title: "通知", content: "请各位同学参加毕业典礼，时间地点如下。" },
                { title: "考研指导", content: "关于考研报名的注意事项，请各位同学查看。" },
            ],

            ruleForm: {
                grade: '',
                major: '',
                clazz: '',
                gender: '',
                name: '',
                destination: '',
                city: '',
                reason: ''
            },
            rules: {
                grade: [
                    { required: true, message: '请选择年级', trigger: 'change' }
                ],
                major: [
                    { required: true, message: '请选择专业', trigger: 'change' }
                ],
                clazz: [
                    { required: true, message: '请选择班级', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: '请选择性别', trigger: 'change' }
                ],
                name: [
                    { required: true, message: '请输入姓名', trigger: 'blur' }
                ],
                destination: [
                    { required: true, message: '请选择毕业去向', trigger: 'change' }
                ],
                city: [
                    { required: true, message: '请选择城市', trigger: 'change' }
                ],
                reason: [
                    { required: true, message: '请选择去该城市的原因', trigger: 'change' }
                ]
            },
            ...options // 导入选项数据
        };
    },
    methods: {
        submitForm() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    // 模拟将表单内容发送到后端
                    const formData = this.ruleForm;
                    console.log('发送表单内容到后端:', JSON.stringify(formData));
                    // 在这里执行实际的提交操作，例如使用axios发送请求
                } else {
                    console.log('表单验证失败');
                    return false;
                }
            });
        },
        resetForm() {
            this.$refs.ruleForm.resetFields();
        }
    }
};
</script>

<style>
.el-form {
    margin-top: 100px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 20px;
    opacity: 0.75;
    line-height: 80px;
    margin: 0 20px;
}

.el-carousel__item h3 span {
    color: #475669;
    font-size: 15px;
    opacity: 0.75;
    line-height: 80px;
    margin: 0 5px;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>