import { ApiProperty} from '@nestjs/swagger';
import { Todo } from './todo';

export class TodoList {
    @ApiProperty({
       description: 'List of todo items',
       type: [Todo],
       readOnly: true,
    })
    items: Todo[];

    @ApiProperty({
       description: 'Total number of items',
       example: 1,
       readOnly: true,
     })
    total: number;
}
