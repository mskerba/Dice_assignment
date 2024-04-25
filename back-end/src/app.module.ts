import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { Book, BookSchema } from './book.model';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://skerbakhalid:9bc7VvJes08VC8vC@cluster0.2lqyovb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
