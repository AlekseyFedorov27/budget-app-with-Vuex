<template>
  <!-- // 1. Внутри компоненты BudgetList взять шаблон который мы генерируем для
//  одного элемента в списке и вынести его в отдельную компоненту например 
//  BudgetListItem. -->
  <div>
    <div class="list-item">
      <div>
        <i
          class="el-icon-top"
          v-if="item.type === 'INCOME'"
        ></i>
        <i
          class="el-icon-bottom"
          v-else
        ></i>
      </div>
      <div class="budget-comment"> {{ item.comment }}</div>
      <div
        class="budget-value"
        :style="{color: setColorValue}"
      > {{ item.value }}</div>
      <div>
        <ElButton
          type="danger"
          size="mini"
          @click="deleteITEM(item.id)"
        >Delete</ElButton>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  // 5. В каждом элементе списка расход/доход доблжна быть иконка el-icon-top или
  // el-icon-bottom в зависимости от того какой тип у данного элемета расход или
  // доход. Эти иконки вы можете найти в разделе Icon на сайте element-ui.  Также
  //  должен менятся цвет цифры на красный или зеленый.
  computed: {
    setColorValue() {
      return this.item.type === "INCOME" ? "green" : "red";
    }
  },
  methods: {
    deleteITEM(id) {
      this.$emit("deleteItem", id);
    }
  }
};
</script>


<style scoped>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
}
.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.budget-comment {
  text-align: left;
}
</style>
