<template>
  <div>
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center mb-3">
      <h2>Update</h2>
      <b-button variant="secondary" :to="{ name: 'todo/list' }">Back to List</b-button>
    </div>
    <b-overlay :show="isLoading" no-fade>
      <Form :item="todo" :is-submitting="isSubmitting" @submit="onSubmit"/>
    </b-overlay>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import Form from '@/components/todo/Form.vue';
import Toast from '@/mixins/Toast';
import { Todo, TodoApi, TodoCategoryEnum } from '@/client-axios';

@Component({
  name: 'Update',
  components: {
    Form,
  },
})
export default class Update extends Mixins(Toast) {
  private todo: Todo = { title: '', category: TodoCategoryEnum.One };
  private isLoading: boolean = true;
  private isSubmitting: boolean = false;

  private async created(): Promise<void> {
    await this.refresh();
    this.isLoading = false;
  }
  private async onSubmit(item: Todo) {
    this.isSubmitting = true;
    try {
      const todoApi: TodoApi = await this.$store.dispatch('auth/getApi');
      await todoApi.todoControllerUpdate(item.id as string, {
        title: item.title,
        category: item.category,
        content: item.content,
      });
    } catch (error) {
      this.toast('Failed to submit data.', 'danger');
    }
    this.isSubmitting = false;
    this.refresh();
  }
  private async refresh(): Promise<void> {
    const todoApi: TodoApi = await this.$store.dispatch('auth/getApi');
    todoApi.todoControllerGet(this.$route.params.userId).then((res) => {
      this.todo = res.data;
    });
  }
}
</script>
