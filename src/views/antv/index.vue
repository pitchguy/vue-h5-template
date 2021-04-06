<template>
  <div>
    <ul>
      <li>
        <p>柱状图</p>
        <canvas id="boxCanvas" style="width: 100%;height: 300px;"></canvas>
      </li>
      <li>
        <p>折线图</p>
        <canvas id="seriesCanvas" style="width: 100%;height: 300px;"></canvas>
      </li>
      <li>
        <p>饼图</p>
        <canvas id="barCanvas" style="width: 100%;height: 300px;"></canvas>
      </li>
    </ul>
  </div>
</template>

<script>
import PieLabel from '@antv/f2/lib/plugin/pie-label';
// const PieLabel = require('@antv/f2/lib/plugin/pie-label');
export default {
  data: () => ({}),
  mounted() {
    this.boxCanvas();
    this.seriesCanvas();
    this.barCanvas();
  },
  methods: {
    boxCanvas() {
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 },
      ];

      const chart = new this.F2.Chart({
        id: 'boxCanvas',
        pixelRatio: window.devicePixelRatio,
        aria: true, // 开启无障碍描述生成
        title: '销量', // 图表标题，可被无障碍识别
      });

      chart.source(data);

      chart
        .interval()
        .position('genre*sold')
        .color('genre');

      chart.render();
    },
    seriesCanvas() {
      const data = [
        {
          date: '2017-06-05',
          value: 116,
        },
        {
          date: '2017-06-06',
          value: 129,
        },
        {
          date: '2017-06-07',
          value: 135,
        },
        {
          date: '2017-06-08',
          value: 86,
        },
        {
          date: '2017-06-09',
          value: 73,
        },
        {
          date: '2017-06-10',
          value: 85,
        },
        {
          date: '2017-06-11',
          value: 73,
        },
        {
          date: '2017-06-12',
          value: 68,
        },
        {
          date: '2017-06-13',
          value: 92,
        },
        {
          date: '2017-06-14',
          value: 130,
        },
        {
          date: '2017-06-15',
          value: 245,
        },
        {
          date: '2017-06-16',
          value: 139,
        },
        {
          date: '2017-06-17',
          value: 115,
        },
        {
          date: '2017-06-18',
          value: 111,
        },
        {
          date: '2017-06-19',
          value: 309,
        },
        {
          date: '2017-06-20',
          value: 206,
        },
        {
          date: '2017-06-21',
          value: 137,
        },
        {
          date: '2017-06-22',
          value: 128,
        },
        {
          date: '2017-06-23',
          value: 85,
        },
        {
          date: '2017-06-24',
          value: 94,
        },
        {
          date: '2017-06-25',
          value: 71,
        },
        {
          date: '2017-06-26',
          value: 106,
        },
        {
          date: '2017-06-27',
          value: 84,
        },
        {
          date: '2017-06-28',
          value: 93,
        },
        {
          date: '2017-06-29',
          value: 85,
        },
        {
          date: '2017-06-30',
          value: 73,
        },
        {
          date: '2017-07-01',
          value: 83,
        },
        {
          date: '2017-07-02',
          value: 125,
        },
        {
          date: '2017-07-03',
          value: 107,
        },
        {
          date: '2017-07-04',
          value: 82,
        },
        {
          date: '2017-07-05',
          value: 44,
        },
        {
          date: '2017-07-06',
          value: 72,
        },
        {
          date: '2017-07-07',
          value: 106,
        },
        {
          date: '2017-07-08',
          value: 107,
        },
        {
          date: '2017-07-09',
          value: 66,
        },
        {
          date: '2017-07-10',
          value: 91,
        },
        {
          date: '2017-07-11',
          value: 92,
        },
        {
          date: '2017-07-12',
          value: 113,
        },
        {
          date: '2017-07-13',
          value: 107,
        },
        {
          date: '2017-07-14',
          value: 131,
        },
        {
          date: '2017-07-15',
          value: 111,
        },
        {
          date: '2017-07-16',
          value: 64,
        },
        {
          date: '2017-07-17',
          value: 69,
        },
        {
          date: '2017-07-18',
          value: 88,
        },
        {
          date: '2017-07-19',
          value: 77,
        },
        {
          date: '2017-07-20',
          value: 83,
        },
        {
          date: '2017-07-21',
          value: 111,
        },
        {
          date: '2017-07-22',
          value: 57,
        },
        {
          date: '2017-07-23',
          value: 55,
        },
        {
          date: '2017-07-24',
          value: 60,
        },
      ];

      const chart = new this.F2.Chart({
        id: 'seriesCanvas',
        pixelRatio: window.devicePixelRatio,
        aria: true,
      });

      chart.source(data, {
        value: {
          tickCount: 5,
          min: 0,
        },
        date: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 3,
        },
      });
      chart.axis('date', {
        label: function label(text, index, total) {
          const textCfg = {};
          if (index === 0) {
            textCfg.textAlign = 'left';
          } else if (index === total - 1) {
            textCfg.textAlign = 'right';
          }
          return textCfg;
        },
      });
      chart
        .line()
        .position('date*value')
        .color('#2FC25B');
      chart.render();
    },
    barCanvas() {
      const data = [
        {
          amount: 20,
          ratio: 0.1,
          memo: '学习',
          const: 'const',
        },
        {
          amount: 100,
          ratio: 0.5,
          memo: '睡觉',
          const: 'const',
        },
        {
          amount: 10,
          ratio: 0.05,
          memo: '吃饭',
          const: 'const',
        },
        {
          amount: 30,
          ratio: 0.15,
          memo: '讲礼貌',
          const: 'const',
        },
        {
          amount: 10,
          ratio: 0.05,
          memo: '其他',
          const: 'const',
        },
        {
          amount: 20,
          ratio: 0.1,
          memo: '运动',
          const: 'const',
        },
        {
          amount: 10,
          ratio: 0.05,
          memo: '暂无备注',
          const: 'const',
        },
      ];

      const chart = new this.F2.Chart({
        id: 'barCanvas',
        pixelRatio: window.devicePixelRatio,
        plugins: PieLabel,
      });

      chart.source(data);
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.4,
        radius: 0.75,
      });
      chart.axis(false);
      chart.legend({
        position: 'bottom',
        align: 'center',
      });
      chart.tooltip(false);
      chart.guide().html({
        position: ['50%', '50%'],
        html: '<div style="width: 100px;height: 20px;text-align: center;line-height: 20px;" id="textContent"></div>',
      });
      // 配置文本饼图
      chart.pieLabel({
        sidePadding: 75,
        label1: function label1(data) {
          return {
            text: data.memo,
            fill: '#808080',
          };
        },
        label2: function label2(data) {
          return {
            fill: '#000000',
            text: '$' + data.amount.toFixed(2),
            fontWeight: 500,
            fontSize: 10,
          };
        },
      });
      chart
        .interval()
        .position('const*ratio')
        .color('memo', ['#1890FF', '#13C2C2', '#2FC25B', '#FACC14', '#F04864', '#8543E0', '#3436C7', '#223273'])
        .adjust('stack');
      chart.render();

      // 绘制内阴影
      const frontPlot = chart.get('frontPlot');
      const coord = chart.get('coord'); // 获取坐标系对象
      frontPlot.addShape('sector', {
        attrs: {
          x: coord.center.x,
          y: coord.center.y,
          r: coord.circleRadius * coord.innerRadius * 1.2, // 全半径
          r0: coord.circleRadius * coord.innerRadius,
          fill: '#000',
          opacity: 0.15,
        },
      });
      chart.get('canvas').draw();
    },
  },
};
</script>

<style></style>
