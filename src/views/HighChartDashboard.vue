<template>
  <div class="chart">
    <div class="container chart--options">
      <div class="col col-4">
        <div>
          <h5>Options to configure TreeMap</h5>
          <div>
            <div>1. Implementar personalización de colores por nodo</div>
            <div>
              2. Chart dinámico para cualquier propiedad del json de lectura
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container chart--treeMap">
      <div class="col col-4">
        <tree-map :companys="companys"></tree-map>
      </div>
    </div>
  </div>
</template>

<script>
import treeMap from "@/components/HighChartTreeMap";
import { mapGetters } from "@/store/modules/companys";
import * as companysGetters from "@/store/modules/companys/getters";

export default {
  components: {
    treeMap
  },
  data() {
    return {
      title: "Customize chart"
    };
  },
  computed: {
    ...mapGetters({
      companys: companysGetters.GET_COMPANYS
    })
  }
};
</script>

<style lang="scss">
.chart {
  .chart--options {
    margin: 1rem;
  }
  .container {
    justify-content: center;
  }
}
</style>
