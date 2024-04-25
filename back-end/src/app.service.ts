import { Injectable } from '@nestjs/common';
import { Model, Document } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.model';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  private readonly bookModel: Model<Document>;

  constructor(
    @InjectModel(Book.name) private readonly model: Model<Document>,
    private readonly httpService: HttpService,
  ) {
    this.bookModel = model;
  }

  async getAndSave() {
    try {
      const response = await this.httpService.axiosRef.get('http://third-party:3003/get-data',);
      const arrayObj = response.data;

      await this.bookModel.deleteMany({});
      await this.bookModel.insertMany(arrayObj);
      console.log('data inserted successfully');
      return response.data;
    } catch (error) {
      console.log('error happen in database:', error);
    }
  }
}
