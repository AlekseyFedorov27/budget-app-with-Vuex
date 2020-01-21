<template>
  <el-dialog
    title="Tips"
    :visible.sync="dialogVis.type"
    width="30%"
    :before-close="dialClose"
  >
    <span>Do you really want to delete ?</span>
    <div>{{dialogVis.listItemDel.type}} {{dialogVis.listItemDel.comment}} {{dialogVis.listItemDel.value}}</div>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button @click="dialClose">Cancel</el-button>
      <el-button
        type="primary"
        @click="confirmClose"
      >Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: ["dialogVis"],
  data() {
    return {};
  },
  methods: {
    dialClose() {
      this.$emit("closeDialog");
    },
    confirmClose() {
      this.$emit("deleteItem", this.dialogVis.listItemDel);
    }
  }
};
</script>