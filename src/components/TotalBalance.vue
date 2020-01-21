<template>
  <div
    class="total-value"
    :style="{ color: totalBalanceColor }"
  >Balance: {{ totalBalance }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TotalBalance",
  computed: {
    ...mapGetters(["totalBalance"]),
    totalBalanceColor() {
      // 3. TotalBalance должен менять цвет текста в зависимости от значения total,
      // если значение больше нуля то цвет  зеленый, если ноль то черный и если
      // меньше нуля то красный.
      // console.log( comp )
      if (this.totalBalance > 0) {
        return "green";
      }
      if (this.totalBalance == 0) {
        return "black";
      }
      return "red";
    }
  }
};
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
</style>