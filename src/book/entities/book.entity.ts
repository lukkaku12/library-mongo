import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Book extends Document {
   @Prop({required: true})
   name: string;

   @Prop({required: true})
   author: string;

   @Prop({required: true})
   publicationYear: number;

   @Prop({required: true})
   genre: string;
};

export const BookSchema = SchemaFactory.createForClass(Book);
