<template>
    <div>
        <el-row>
            <el-col :span="12">
                <el-card>
                    <div ref="pieChart" class="chart-container"></div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <div ref="barChart" class="chart-container"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import options from '../options.js';
import * as echarts from 'echarts';

export default {
    mounted() {
        this.generatePieChart();
        this.generateBarChart();
    },
    methods: {
        generatePieChart() {
            const pieChart = echarts.init(this.$refs.pieChart);
            const data = this.calculateDestinationsByGrade();

            const option = {
                title: {
                    text: '毕业去向统计（按年级）',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 10,
                    data: options.destinations
                },
                series: [
                    {
                        name: '毕业去向',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            pieChart.setOption(option);
        },
        generateBarChart() {
            const barChart = echarts.init(this.$refs.barChart);
            const data = this.calculateDestinationsByGrade();

            const option = {
                title: {
                    text: '毕业去向统计（按年级）',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: options.destinations,
                    top: 'bottom'
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: options.grades
                },
                yAxis: {
                    type: 'value'
                },
                series: options.destinations.map((destination, index) => {
                    return {
                        name: destination,
                        type: 'bar',
                        stack: '总量',
                        emphasis: {
                            focus: 'series'
                        },
                        data: data.map(item => item.value[index])
                    };
                })
            };

            barChart.setOption(option);
        },
        calculateDestinationsByGrade() {
            const data = options.grades.map(grade => {
                const value = options.destinations.map(() => 0);
                return { name: grade, value };
            });

            // 模拟后端数据统计
            // 假设后端接口为 '/api/destinations/stats'
            // 实际项目中请使用适合的请求方式（如axios）发送请求获取统计数据
            setTimeout(() => {
                data[0].value[0] = 60; // 2017级 考研人数
                data[0].value[1] = 30; // 2017级 参军人数
                data[0].value[2] = 50; // 2017级 创业人数
                data[1].value[0] = 40; // 2018级 考研人数
                data[1].value[1] = 20; // 2018级 参军人数
                data[1].value[2] = 30; // 2018级 创业人数
                data[2].value[0] = 50; // 2019级 考研人数
                data[2].value[1] = 40; // 2019级 参军人数
                data[2].value[2] = 20; // 2019级 创业人数

                this.generatePieChart();
                this.generateBarChart();
            }, 500); // 模拟延迟

            return data;
        }
    }
};
</script>

<style>
.chart-container {
    width: 100%;
    height: 400px;
}
</style>
