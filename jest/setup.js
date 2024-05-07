/* Dependencies */
import dotenv from "dotenv";
import mongoose from "mongoose";
import { MongoMemoryServer } from 'mongodb-memory-server';
import fs from "fs";
import path from "path";

/* Environment-Variables */
dotenv.config({ path: "./.env.test" });

/* Utils */
import utilServer from "../utils/server.js";

/* Schemas */
import Project from "../schemas/Project.js";
import Tech from "../schemas/Tech.js";

/* Default-Export */
export default async () => {
  const mongoServer = await MongoMemoryServer.create({
    binary: {
      version: '4.4.6'
    }
  });

  await mongoose.connect(mongoServer.getUri(), { 
    dbName: "portfolio" 
  });

  /* Starting Server */
  utilServer.init();

  /* Creating MongoDB Demo Objects */
  const googleIcon = fs.readFileSync(path.resolve('files/icons/google.png'));
  const googleBanner = fs.readFileSync(path.resolve('files/images/google.jpg'));

  const tech1 = new Tech({ 
    name: 'Tech1', 
    icon: { 
      type: 'image/png', 
      data: googleIcon
    }, 
    url: 'https://google.de' 
  });
  await tech1.save();

  const tech2 = new Tech({ 
    name: 'Tech2', 
    icon: { 
      type: 'image/png', 
      data: googleIcon 
    }, 
    url: 'https://google.de' 
  });
  await tech2.save();

  const project1 = new Project({
    name: 'Project1',
    descriptions: [
      {
        lang: 'en',
        content: 'This is a demo project'
      },
      {
        lang: 'de',
        content: 'Dies ist ein Demoprojekt'
      }
    ],
    repositories: [
      {
        name: 'Demo project repository',
        url: 'https://github.com'
      }
    ],
    banner: {
      type: 'image/jpg',
      data: googleBanner
    },
    version: '1.0',
    urls: [
      {
        name: "Google",
        url: 'https://google.de'
      }
    ],
    techs: [
      tech1._id,
      tech2._id
    ],
    timestamp: new Date()
  });
  await project1.save();

  const project2 = new Project({
    name: 'Project2',
    descriptions: [
      {
        lang: 'en',
        content: 'This is a demo project'
      },
      {
        lang: 'de',
        content: 'Dies ist ein Demoprojekt'
      }
    ],
    repositories: [
      {
        name: 'Demo project repository',
        url: 'https://github.com'
      }
    ],
    banner: {
      type: 'image/jpg',
      data: googleBanner
    },
    version: '1.0',
    urls: [
      {
        name: "Google",
        url: 'https://google.de'
      }
    ],
    techs: [
      tech1._id,
      tech2._id
    ],
    timestamp: new Date()
  });
  await project2.save();


  global.__SERVER__ = utilServer.server;
  global.__MONGOOSE__ = mongoose;
  global.__MONGO_SERVER__ = mongoServer;
  global.__MONGO_DEMO_OBJECTS = {
    
  }
}