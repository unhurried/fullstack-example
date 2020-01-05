import { IsInt, Max, Min, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export class ListQueryParam {
  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  // Properties of SchemaObject would be flattened in a parameter object,
  // which results in violations in OpenAPI specication.
  // Instead, set a schema property in @ApiQuery to the controller method.
  // @ApiPropertyOptional({
  //   description: 'Limit',
  //   default: 10,
  //   example: 10,
  //   minimum: 1,
  //   maximum: 100,
  // })
  limit?: number;

  @Type(() => Number)
  @IsOptional()
  @Min(0)
  offset?: number;
}

const LimitParamSchema: SchemaObject = {
  description: 'Limit',
  default: 10,
  example: 10,
  minimum: 1,
  maximum: 100,
  type: 'number',
}

const OffsetParamSchema: SchemaObject = {
  description: 'Offset',
  default: 0,
  example: 5,
  minimum: 0,
  type: 'number',
}

export { LimitParamSchema, OffsetParamSchema }
