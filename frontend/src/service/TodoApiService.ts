import { Configuration, TodoCategoryEnum, TodoApi } from '@/client-axios';

export * from '@/client-axios';

/* eslint no-underscore-dangle: "off" */
export class TodoApiService extends TodoApi {
  constructor() {
    const config = new Configuration({ basePath: 'http://localhost:3000' });
    super(config);
  }
}
