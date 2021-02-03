<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3">
      <h2>List</h2>
      <b-button variant="secondary" :to="{ name: 'todo/create' }">New Item</b-button>
    </div>
    <List />
  </div>
</template>

<script>
import List from '@/components/todo/List.vue';

export default {
  name: 'Index',
  components: {
    List,
  },
};
</script>
