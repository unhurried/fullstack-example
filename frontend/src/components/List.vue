<template>
  <div>
    <b-table head-variant="dark" striped :items="items" :fields="fields">
      <!-- virtual column to show action buttons -->
      <template v-slot:cell(action)="data">
          <b-button variant="secondary" class="mr-2" size="sm"
            :to="'/update/' + data.item.id">Update</b-button>
          <b-button variant="danger" size="sm" @click="deleteItem(data.item.id)">Delete</b-button>
      </template>
      <!-- default slot rendering definition -->
      <template v-slot:cell()="data">
        {{ data.value }}
      </template>
    </b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Todo, TodoApiService } from '@/service/TodoApiService';

@Component({
  name: 'List',
})
export default class List extends Vue {
  private todoApiService = new TodoApiService();
  private fields = [
    { key: 'category' },
    { key: 'title' },
    { key: 'action', tdClass: ['text-center'], thStyle: { width: '175px' } },
  ];
  private items: Todo[] = [];

  private async created() {
    this.items = (await this.todoApiService.getList()).data.items;
  }
  /* eslint class-methods-use-this: 0 */
  private async deleteItem(id: string) {
    /* eslint no-underscore-dangle: 0 */
    await this.todoApiService._delete(id);
    this.items = (await this.todoApiService.getList()).data.items;
  }
}
</script>

<style scoped lang="scss">
</style>
