import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'recipe' })
export class Recipe {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: false, defaultValue: false })
  completed: boolean;

  @Field()
  creationDate: Date;

  @Field(type => [String])
  ingredients: string[];
}
