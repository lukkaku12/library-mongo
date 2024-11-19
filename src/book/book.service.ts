import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './entities/book.entity';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}
  create(createBookDto: CreateBookDto) {
    const newBook = new this.bookModel(createBookDto);
    return newBook.save();
  }

  async findAll(): Promise<Book[]> {
    const response = await this.bookModel.find()
    return response;
  }

  async findOne(id: number): Promise<Book> {
    const Book = await this.bookModel.findById(id)
    return Book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    const updatedProduct = await this.bookModel.findByIdAndUpdate(id, updateBookDto, {new: true});
    return updatedProduct;
  }

  async remove(id: number) {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
