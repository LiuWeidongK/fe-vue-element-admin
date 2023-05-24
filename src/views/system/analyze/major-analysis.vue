<template>
    <div>
        <el-select v-model="selectedMajor" placeholder="选择专业">
            <el-option v-for="major in majorOptions" :key="major" :label="major" :value="major"></el-option>
        </el-select>

        <el-button type="primary" @click="query">查询</el-button>

        <div class="chart-container">
            <div class="chart" ref="pieChart"></div>
            <div class="chart" ref="barChart"></div>
        </div>
    </div>
</template>

<script>
import options from "../options.js";
import echarts from "echarts";

export default {
    data() {
        return {
            majorOptions: options.majors,
            selectedMajor: "",
            pieChart: null,
            barChart: null,
        };
    },
    mounted() {
        this.initializeCharts();
    },
    methods: {
        initializeCharts() {
            this.pieChart = echarts.init(this.$refs.pieChart);
            this.barChart = echarts.init(this.$refs.barChart);

            this.renderCharts();
        },
        query() {
            this.renderCharts();
        },
        renderCharts() {
            const data = [
                { name: "考研", value: 30 },
                { name: "参军", value: 20 },
                { name: "创业", value: 15 },
                { name: "工作", value: 25 },
                { name: "待业", value: 10 },
            ];

            this.renderPieChart(data);
            this.renderBarChart(data);
        },
        renderPieChart(data) {
            const options = {
                title: {
                    text: "毕业去向分析（饼状图）",
                    x: "center",
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b}: {c} ({d}%)",
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: data.map((item) => item.name),
                },
                series: [
                    {
                        name: "去向",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        data: data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                    },
                ],
            };

            this.pieChart.setOption(options);
        },
        renderBarChart(data) {
            const options = {
                title: {
                    text: "毕业去向分析（柱状图）",
                    x: "center",
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                xAxis: {
                    type: "category",
                    data: data.map((item) => item.name),
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        name: "去向",
                        type: "bar",
                        data: data.map((item) => item.value),
                    },
                ],
            };

            this.barChart.setOption(options);
        },
    },
};
</script>

<style scoped>
.chart-container {
    display: flex;
}

.chart {
    width: 50%;
    height: 400px;
}
</style>
