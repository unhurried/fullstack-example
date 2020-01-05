<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3">
      <h2>Edit</h2>
      <b-button variant="secondary" to="/">Back to List</b-button>
    </div>
    <Form :item="todo" @submit="onSubmit"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from '@/components/Form.vue';
import { Todo, TodoApiService, TodoCategoryEnum } from '@/service/TodoApiService';

@Component({
  name: 'Create',
  components: {
    Form,
  },
})
export default class Create extends Vue {
  private todoApiService = new TodoApiService();
  private todo: Todo = { title: '', category: TodoCategoryEnum.One };

  /* eslint class-methods-use-this: 0 */
  private onSubmit(item: Todo) {
    this.todoApiService.post({
      title: item.title,
      category: item.category,
      content: item.content,
    }).then((result) => {
      this.$router.push(`/update/${result.data.id}`);
    });
  }
}
</script>
