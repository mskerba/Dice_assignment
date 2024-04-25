import { Injectable } from '@nestjs/common';
import e from 'express';
import * as fs from 'fs';


@Injectable()
export class AppService {

  async readBookData(): Promise<void> {
    
    try{
      const data =  fs.readFileSync('data-list.json', 'utf8');
      const json = JSON.parse(data);
      return json;
    }catch(error){
      console.log("error file can't be read", error);
    }
  }
}