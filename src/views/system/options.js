// 年级选项
const grades = ['2017级', '2018级', '2019级']

// 专业选项
const majors = ['软件工程', '机械工程', '土木工程']

// 班级选项
const classes = []
for (const grade of grades) {
  for (const major of majors) {
    for (let i = 1; i <= 2; i++) {
      const className = `${major}${grade.substring(2)}0${i}班`
      classes.push(className)
    }
  }
}

// 毕业去向选项
const destinations = ['考研', '参军', '创业', '工作', '待业']

// 城市选项
const cities = ['北京', '上海', '广州', '深圳']

// 去该城市的原因选项
const reasons = ['薪资待遇好', '离家近方便照顾家里', '喜欢这座城市']

export default {
  grades,
  majors,
  classes,
  destinations,
  cities,
  reasons
}
