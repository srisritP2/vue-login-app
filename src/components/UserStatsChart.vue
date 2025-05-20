<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  name: 'UserStatsChart',
  props: {
    data: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.renderChart()
  },
  methods: {
    renderChart() {
      new Chart(this.$refs.canvas, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'User Stats',
            data: this.data,
            backgroundColor: '#42a5f5'
          }]
        }
      })
    }
  }
}
</script>
