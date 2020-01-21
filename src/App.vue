<template>
  <div id="app">

    <DialogConfirm
      :dialogVis="dialogVis"
      @closeDialog="showDialog"
      @deleteItem="deleteIt"
    />

    <Form />
    <TotalBalance />
    <BudgetList
      :list="list"
      @deleteItem="onDeleteItem"
    />

  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";
import DialogConfirm from "@/components/DialogConfirm";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    BudgetList,
    TotalBalance,
    Form,
    DialogConfirm
  },
  data: () => ({
    dialogVis: { type: false, listItemDel: Number }
  }),
  computed: {
    ...mapGetters(["list"])
  },
  methods: {
    onDeleteItem(id) {
      this.showDialog();
      this.dialogVis.listItemDel = this.list[id];
    },
    showDialog() {
      this.dialogVis.type = !this.dialogVis.type;
    },
    deleteIt(id) {
      this.$store.dispatch("deleteListItem", id.id);
      this.showDialog();
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
