<template>
  <div class="flex flex-wrap">
    <div class="w-full mb-12 px-4">
       <card-table />
    </div>
    <div class="w-full lg:w-4/12 px-4">
    </div>
  </div>
</template>
<script>
// import CardSettings from "@/admin/components/Cards/CardSettings.vue";
// import CardProfile from "@/admin/components/Cards/CardProfile.vue";
import CardTable from "@/admin/components/Cards/CardTable.vue";

export default {
  components: {
    CardTable,
  },
};
</script>
