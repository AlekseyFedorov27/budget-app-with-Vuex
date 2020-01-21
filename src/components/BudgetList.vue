
<template>
  <div class="budget-list-wrap">

    <ElCard :header="header">
      <el-button
        type="primary"
        size="mini"
        plain
        @click="showAll"
      >all</el-button>
      <el-button
        type="primary"
        size="mini"
        plain
        @click="sortList('INCOME')"
      >coming</el-button>
      <el-button
        type="primary"
        size="mini"
        plain
        @click="sortList('OUTCOME')"
      >consumption</el-button>

      <template v-if="!isEmpty">

        <BudgetListItem
          v-for="(item, prop) in filterList"
          :key="prop"
          :item="item"
          @deleteItem="deleteItem"
        />

      </template>
      <ElAlert
        v-else
        type="info"
        :title="emptyTitle"
        :closable="false"
      />
    </ElCard>

  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem";

export default {
  components: { BudgetListItem },
  name: "BudgetList",
  props: {
    list: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    header: "Budget List",
    emptyTitle: "Empty List",
    filterList: null,
    sortName: "INCOME"
  }),
  computed: {
    isEmpty() {
      return !Object.keys(this.list).length;
    },
    // 6. Добавить кнопки сортировки над BudgetList которые будут
    //  управлять сортировкой списка, показать только расходы, показать
    //   только доходы, показать все.
    sort() {
      let result = {};
      for (let item in this.list) {
        let sort = this.list[item];
        if (this.list[item].type === this.sortName) {
          result[item] = sort;
        }
      }
      return result;
    }
  },
  created() {
    this.filterList = this.list;
  },
  methods: {
    deleteItem(id) {
      this.$emit("deleteItem", id);
    },
    sortList(sortName) {
      this.sortName = sortName;
      this.filterList = this.sort;
    },
    showAll() {
      return (this.filterList = this.list);
    }
  }
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
</style>