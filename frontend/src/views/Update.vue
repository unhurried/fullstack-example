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
import { TodoApiService, Todo, TodoCategoryEnum } from '@/service/TodoApiService';

@Component({
  name: 'Update',
  components: {
    Form,
  },
})
export default class Update extends Vue {
  private todoApiService = new TodoApiService();
  private todo: Todo = { title: '', category: TodoCategoryEnum.One };

  private created(): void {
    this.refresh();
  }
  /* eslint class-methods-use-this: 0 */
  private onSubmit(item: Todo) {
    this.todoApiService.update(item.id as string, {
      title: item.title,
      category: item.category,
      content: item.content,
    }).then((result) => {
      this.refresh();
    });
  }
  private refresh(): void {
    this.todoApiService.get(this.$route.params.userId).then((res) => {
      this.todo = res.data;
    });
  }
}
</script>
