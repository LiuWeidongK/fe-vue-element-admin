<template>
  <div>
    <el-form :model="searchForm" inline>
      <el-form-item label="年级">
        <el-select v-model="searchForm.grade">
          <el-option v-for="grade in gradeOptions" :key="grade" :value="grade" :label="grade" />
        </el-select>
      </el-form-item>
      <el-form-item label="专业">
        <el-select v-model="searchForm.major">
          <el-option v-for="major in majorOptions" :key="major" :value="major" :label="major" />
        </el-select>
      </el-form-item>
      <el-form-item label="班级">
        <el-select v-model="searchForm.class">
          <el-option
            v-for="classItem in classOptions"
            :key="classItem"
            :value="classItem"
            :label="classItem"
          />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="searchDestinations">查询</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="destinations" border>
      <el-table-column prop="grade" label="年级" />
      <el-table-column prop="major" label="专业" />
      <el-table-column prop="class" label="班级" />
      <el-table-column prop="destination" label="毕业去向" />
      <el-table-column prop="city" label="去哪个城市" />
      <el-table-column prop="reason" label="去该城市的原因" />
    </el-table>
  </div>
</template>

<script>
import options from '../options.js'

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
      destinations: []
    }
  },
  methods: {
    searchDestinations() {
      // 模拟后端请求，根据条件查询毕业去向数据
      // 假设后端接口为 '/api/destinations/search'
      const params = {
        grade: this.searchForm.grade,
        major: this.searchForm.major,
        class: this.searchForm.class
      }
      // 发送请求获取毕业去向数据
      // 以下为模拟请求，实际项目中请使用适合的请求方式（如axios）
      setTimeout(() => {
        this.destinations = [
          { grade: '2017级', major: '软件工程', class: '软件1701班', destination: '工作', city: '北京', reason: '薪资待遇好' },
          { grade: '2018级', major: '机械工程', class: '机械1801班', destination: '创业', city: '上海', reason: '离家近方便照顾家里' },
          { grade: '2019级', major: '土木工程', class: '土木1901班', destination: '考研', city: '广州', reason: '喜欢这座城市' }
          // 添加更多毕业去向数据
        ]
      }, 500) // 模拟延迟
    },
    resetForm() {
      this.searchForm = {
        grade: '',
        major: '',
        class: ''
      }
    }
  }
}
</script>
