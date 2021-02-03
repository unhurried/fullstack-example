<template>
  <div>
    <b-overlay :show="isLoading" no-fade>
      <b-table head-variant="dark" striped :items="items" :fields="fields">
        <!-- virtual column to show action buttons -->
        <template v-slot:cell(action)="data">
            <b-button variant="secondary" class="mr-2" size="sm"
              :to="{ name: 'todo/update', params: { userId: data.item.id }}">Update</b-button>
            <b-button variant="danger" size="sm" @click="deleteItem(data.item.id)">Delete</b-button>
        </template>
        <!-- default slot rendering definition -->
        <template v-slot:cell()="data">
          {{ data.value }}
        </template>
      </b-table>
    </b-overlay>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import AuthModule from '@/store/modules/auth';
import { Todo, TodoApi } from '@/client-axios';
import Toast from '@/mixins/Toast';

@Component({
  name: 'List',
})
export default class List extends Mixins(Toast) {
  private fields = [
    { key: 'category' },
    { key: 'title' },
    { key: 'action', tdClass: ['text-center'], thStyle: { width: '175px' } },
  ];
  private items: Todo[] = [];
  private isLoading: boolean = true;

  private async created() {
    const todoApi: TodoApi = await this.$store.dispatch('auth/getApi');
    try {
      this.items = (await todoApi.todoControllerGetList()).data.items;
    } catch (error) {
      this.toast('Failed to load data.', 'danger');
    }
    this.isLoading = false;
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
