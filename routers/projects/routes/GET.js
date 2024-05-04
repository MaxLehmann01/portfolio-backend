/* Schemas */
import Project from "../../../schemas/Project.js";
import Tech from "../../../schemas/Tech.js";

import fs from "fs";
import path from "path";

/* Route-Definition */
export default async (req, res, next) => {
  try {
    let resData = { httpStatus: 500, data: { err: undefined }};

    const projects = await Project.find().lean();

    // const techs = [
    //   { name: 'Angular', image: 'angular.png', url: 'https://angularjs.org/' },
    //   { name: 'REST-Api', image: 'api.png', url: '' },
    //   { name: 'CSS', image: 'css.png', url: 'https://www.css3.com/' },
    //   { name: 'Docker', image: 'docker.png', url: 'https://www.docker.com/' },
    //   { name: 'Express.js', image: 'express.png', url: 'https://expressjs.com/' },
    //   { name: 'Git', image: 'git.png', url: 'https://git-scm.com/' },
    //   { name: 'HTML', image: 'html.png', url: 'https://html.spec.whatwg.org/multipage/' },
    //   { name: 'JavaScript', image: 'javascript.png', url: 'https://www.javascript.com/' },
    //   { name: 'Jest', image: 'jest.png', url: 'https://jestjs.io/' },
    //   { name: 'MongoDB', image: 'mongodb.png', url: 'https://www.mongodb.com/de-de' },
    //   { name: 'MySQL', image: 'mysql.png', url: 'https://www.mysql.com/' },
    //   { name: 'NodeJS', image: 'nodejs.png', url: 'https://nodejs.org/' },
    //   { name: 'PHP', image: 'php.png', url: 'https://www.php.net/' },
    //   { name: 'React', image: 'react.png', url: 'https://reactjs.org/' },
    //   { name: 'Supertest', image: 'supertest.png', url: 'https://www.npmjs.com/package/supertest' },
    //   { name: 'TailwindCSS', image: 'tailwind.png', url: 'https://tailwindcss.com/' },
    //   { name: 'TypeScript', image: 'typescript.png', url: 'https://www.typescriptlang.org/' }
    // ]

    // for(let tech of techs) {
    //   const _tech = new Tech({ name: tech.name, icon: { type: 'image/png', data: fs.readFileSync(path.resolve(`files/icons/${tech.image}`)) }, url: tech.url})
    //   await _tech.save();
    // }

    for(let project of projects) {
      if(project.banner) project.banner = `data:${project.banner.type};base64,${project.banner.data.toString('base64')}`

      for (let i = 0; i < project.techs.length; i++) {
        let tech = await Tech.findById(project.techs[i]).lean();
        if(!tech) continue;

        tech.icon = `data:${tech.icon.type};base64,${tech.icon.data.toString('base64')}`;
        project.techs[i] = tech;
      }
    }

    // await Project.findByIdAndUpdate('66333cbfb6f26f4e7e021818', { banner: { type: 'image/jpg', data: fs.readFileSync(path.resolve('files/images/code.jpg'))}})

    resData.data = projects;
    resData.httpStatus = 200;
    res.status(resData.httpStatus).json(resData.data);
  } catch (err) {
    console.log(err);
    next(err);
  }
}