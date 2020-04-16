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
import { Action, State } from 'vuex-class';
import AuthModule from '@/store/modules/auth';
import { Todo, TodoApi } from '@/client-axios';

@Component({
  name: 'List',
})
export default class List extends Vue {
  private fields = [
    { key: 'category' },
    { key: 'title' },
    { key: 'action', tdClass: ['text-center'], thStyle: { width: '175px' } },
  ];
  private items: Todo[] = [];

  private async created() {
    const todoApi: TodoApi = await this.$store.dispatch('auth/getApi');
    this.items = (await todoApi.todoControllerGetList()).data.items;
  }

  private async deleteItem(id: string) {
    const todoApi: TodoApi = await this.$store.dispatch('auth/getApi');
    await todoApi.todoControllerDelete(id);
    this.items = (await todoApi.todoControllerGetList()).data.items;
  }
}
</script>

<style scoped lang="scss">
</style>
