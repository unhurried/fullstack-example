<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3">
      <h2>Update</h2>
      <b-button variant="secondary" to="/">Back to List</b-button>
    </div>
    <Form :item="todo" @submit="onSubmit"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from '@/components/Form.vue';
import TodoItem from '@/model/TodoItem';
import { Todo, TodoApi, TodoCategoryEnum } from '@/client-axios';

@Component({
  name: 'Update',
  components: {
    Form,
  },
})
export default class Update extends Vue {
  private todo: Todo = { title: '', category: TodoCategoryEnum.One };

  private created(): void {
    this.refresh();
  }
  private async onSubmit(item: Todo) {
    const todoApi: TodoApi = await this.$store.dispatch('auth/getApi');
    todoApi.todoControllerUpdate(item.id as string, {
      title: item.title,
      category: item.category,
      content: item.content,
    }).then(() => {
      this.refresh();
    });
  }
  private async refresh(): Promise<void> {
    const todoApi: TodoApi = await this.$store.dispatch('auth/getApi');
    todoApi.todoControllerGet(this.$route.params.userId).then((res) => {
      this.todo = res.data;
    });
  }
}
</script>
