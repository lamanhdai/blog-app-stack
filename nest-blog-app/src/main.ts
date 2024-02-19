import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { MongoClient, ServerApiVersion } from 'mongodb';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api');
  // const mongoClient = new MongoClient(process.env.MONGODB_ATLAS_URI, {
  //   serverApi: {
  //     version: ServerApiVersion.v1,
  //     strict: true,
  //     deprecationErrors: true,
  //   }
  // });
  // let database, collection;

  await app.listen(3000);
  // try {
  //   await mongoClient.connect();
  //   database = mongoClient.db(process.env.MONGODB_DATABASE);
  //   collection = database.collection(process.env.MONGODB_COLLECTION)
  // } finally {
  //   await mongoClient.close();
  // }
}
bootstrap();
