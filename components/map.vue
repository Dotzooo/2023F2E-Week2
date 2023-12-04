<template>
  <div class="w-full flex ">
    <div class="w-1/2">
      <span class="info-box">{{ hoverInfo }}</span>
    </div>
    <div class="w-1/2">
      <svg ref="svgRef" width="100%" height="500">
        <g class="counties"></g>
        <path class="county-borders"></path>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import maps from "../assets/json/COUNTY_MOI.json";

const svgRef = ref(null);
const hoverInfo = ref('全台灣');

onMounted(() => {
  if (process.client) {
    const svg = d3.select(svgRef.value);

    // 設定地圖投影
    const projection = d3.geoMercator().center([123, 24]).scale(6000);
    const path = d3.geoPath().projection(projection);

    // TopoJSON 轉為 GeoJSON
    const geometries = topojson.feature(
      maps,
      maps.objects["COUNTY_MOI_1090820"]
    );

    // 產生地圖
    svg
      .select(".counties")
      .selectAll("path")
      .data(geometries.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", "county")
      .on("mouseover", (event, d) => {
        console.log(d);
        const { COUNTYCODE, COUNTYENG, COUNTYID, COUNTYNAME } = d.properties;
        // 设置 hover 信息
        hoverInfo.value = COUNTYNAME; // 假设每个区域有一个 `name` 属性
      })
      .on("mouseout", () => {
        // 清除 hover 信息
        hoverInfo.value = '全台灣';
      });

    // 地圖邊界
    svg
      .select(".county-borders")
      .attr(
        "d",
        path(
          topojson.mesh(
            maps,
            maps.objects["COUNTY_MOI_1090820"],
            (a, b) => a !== b
          )
        )
      );
  }
});
</script>
<style>
.counties {
  fill: #33474e;
}

.counties :hover {
  fill: #7f9ca7;
  transition: 0.5s;
}

.county-borders {
  fill: none;
  stroke: #fff;
  stroke-width: 0.5px;
}
</style>
