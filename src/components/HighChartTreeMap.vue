<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script>
import { Chart } from "highcharts-vue";

export default {
  name: "treeMap",
  components: {
    highcharts: Chart
  },
  props: {
    companys: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "treemap"
        },
        series: [
          {
            layoutAlgorithm: "squarified",
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
              enabled: false
            },
            levelIsConstant: false,
            levels: [
              {
                level: 1,
                dataLabels: {
                  enabled: true
                },
                borderWidth: 3
              }
            ],
            data: []
          }
        ],
        subtitle: {
          text: "Data extracted from the store companys"
        },
        title: {
          text: "Companys TreeMap"
        }
      }
    };
  },
  mounted() {
    for (let item in this.companys) {
      if (
        this.companys[item].hasOwnProperty("name") &&
        this.companys[item].hasOwnProperty("itemCount")
      ) {
        let mainCompany = {
          id: "id_" + item,
          name: this.companys[item].name,
          value: this.companys[item].itemCount,
          parent: null
        };
        this.chartOptions.series[0].data.push(mainCompany);
        if (this.companys[item].hasOwnProperty("locationInfo")) {
          this.getChilds(
            this.chartOptions.series[0].data,
            this.companys[item].locationInfo,
            mainCompany.id
          );
        }
      }
    }
  },
  methods: {
    getChilds: function(data, companyMaterial, idParent) {
      for (let item in companyMaterial) {
        let childCompany = {
          id: idParent + "-" + item,
          name: companyMaterial[item].name,
          value: companyMaterial[item].itemCount,
          parent: idParent
        };
        data.push(childCompany);
        if (companyMaterial[item].hasOwnProperty("locationInfo")) {
          this.getChilds(
            data,
            companyMaterial[item].locationInfo,
            childCompany.id
          );
        }
      }
    }
  }
};
</script>

<style></style>
