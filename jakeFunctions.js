const { readdir } = require('fs').promises;
const { execSync, exec } = require('child_process');
const request = require('request');
const fs = require('fs');
const { resolve } = require('path/posix');
const { parseMD2 } = require('./MDParser');

let count = 0;
module.exports.ParseDirectory = async function ParseDirectory(resolve, list, dirPath) {
  try {
    const files = await readdir('./' + dirPath);
    for (const i of files) {
      let buff = '';
      if (fs.lstatSync('./' + dirPath + '/' + i).isDirectory()) {
        buff = '';
        count++;
        await ParseDirectory(resolve, list, dirPath + '/' + i).then(() => count--);
      } else {
        buff = '/' + dirPath + '/' + i;
      }
      buff = buff.replace(/\/build/gm, '');
      if (buff) {
        list.push(buff);
      }
    }
    if (count === 0) {
      resolve();
    }
  } catch (err) {
    console.error('ParseDirectory', err);
  }
};

module.exports.generateAchievementsFile = function() {
  return new Promise(async (resolve, reject) => {
    if (!process.env.token) reject('No token specified');
    const dir = await readdir('./data/achievements');
    fs.rmSync('./src/images/achievements', { recursive: true, force: true });
    fs.mkdirSync('./src/images/achievements');
    let result = [];
    for (let i of dir) {
      fs.mkdirSync('./src/images/achievements/' + i);
      let buff = parseMD2(fs.readFileSync(`./data/achievements/${i}/info.md`, 'utf-8'));
      buff.link = i;
      await downloadImagesMain(buff, i, 'achievements');
      result.push(buff);
    }
    let file = '-\n\tconst achievementsData = ' + JSON.stringify(result) + ';';
    fs.writeFileSync('./src/js/data/achievementsData.pug', file, 'utf-8');
    if (process.platform === 'win32') {
      generateAchievementTemplates('rmdir /s /q .\\src\\achievements & mkdir .\\src\\achievements', resolve);
    } else {
      generateAchievementTemplates('rm -rf ./src/achievements && mkdir ./src/achievements', resolve);
    }

    function generateAchievementTemplates(cmd, resolve) {
      exec(cmd, () => {
        for (let i in result) {
          fs.writeFileSync(`./src/achievements/${dir[i]}.pug`, 'extends ../layout/achievementPageTemplate/achievementPageTemplate.pug\n\nblock variables\n\t-\n\t\tconst achievementData = ' + JSON.stringify(result[i]), 'utf-8');
        }
        resolve();
      });
    }
  });
};

module.exports.generateProjectsFile = function() {
  return new Promise(async (resolve, reject) => {
    if (!process.env.token) reject('No token specified');
    const dir = await readdir('./data/projects');
    fs.rmSync('./src/images/projects', { recursive: true, force: true });
    fs.mkdirSync('./src/images/projects');
    let result = [];
    for (let i of dir) {
      fs.mkdirSync('./src/images/projects/' + i);
      let buff = parseMD2(fs.readFileSync(`./data/projects/${i}/LANDING.md`, 'utf-8'));
      buff.link = i;
      await downloadImagesMain(buff, i);
      result.push(buff);
    }

    if (!fs.existsSync('./src/js/data')) {
      await fs.mkdirSync('./src/js/data');
    }
    let outputPug = '-\n\tconst data = ' + JSON.stringify(result) + ';';
    let outputJs = `
        const data = ${JSON.stringify(result)};
        export default data;
        `;
    fs.writeFileSync('./src/js/data/projectsData.pug', outputPug, 'utf-8');
    fs.writeFileSync('./src/js/data/projectsData.js', outputJs, 'utf-8');
    if (process.platform === 'win32') {
      generateProjectsTemplates('rmdir /s /q .\\src\\projects & mkdir .\\src\\projects', resolve);
    } else {
      generateProjectsTemplates('rm -rf ./src/projects && mkdir ./src/projects', resolve);
    }

    function generateProjectsTemplates(cmd, resolve) {
      exec(cmd, () => {
        for (let i in result) {
          // проверяем, есть ли у нас в папке проекта файл index.pug
          if (fs.existsSync(`./data/projects/${dir[i]}/index.pug`)) {
            let content = fs.readFileSync(`./data/projects/${dir[i]}/index.pug`, 'utf-8');
            fs.writeFileSync(`./src/projects/${dir[i]}.pug`, content, 'utf-8');
          } else {
            fs.writeFileSync(`./src/projects/${dir[i]}.pug`, 'extends ../layout/projectPageTemplate/projectPageTemplate.pug\n\nblock variables\n\t-\n\t\tlet obj = ' + JSON.stringify(result[i]), 'utf-8');
          }
        }
        resolve();
      });
    }
  });
};

const download = function(uri, filename) {
  return new Promise((resolve, reject) => {
    request.head(uri, function(err, res, body) {
      request(uri).pipe(fs.createWriteStream(filename)).on('close', resolve);
    });
  });
};

function secondDownloadMethod(i, j) {
  return new Promise((resolve, _) => {
    execSync(`curl -H \"Authorization: token ${process.env.token}\" -o ./src/images/projects/${i}/${j.match(/([^\/]*)$/gim)[0]} --ssl-no-revoke https://raw.githubusercontent.com/RTUITLab/${i}/master/${j}`);
    resolve();

  });
}

function downloadImages(i, j) {
  return new Promise((resolve, reject) => {

    let result = [];
    let res = exec(`curl --header "Authorization: token ${process.env.token}" --header "Accept: application/vnd.github+json" --ssl-no-revoke --location "https://api.github.com/repos/RTUITLab/${i}/contents/${j}"`, (error, stdout, stderror) => {

      try {
        let buff = JSON.parse(stdout);
        if (buff.download_url) {
          result.push(download(buff.download_url, `./src/images/projects/${i}/${j.match(/([^\/]*)$/gim)[0]}`));
        } else {
          result.push(secondDownloadMethod(i, j).then(resolve));
        }
      } catch (e) {
        result.push(secondDownloadMethod(i, j).then(resolve));
      }
      Promise.allSettled(result).then((e) => {
        resolve();
      });
    });
  });
}

async function downloadImagesMain(buff, i, type = 'projects') {
  return new Promise((resolve, reject) => {
    let result = [];
    if (buff.images) {
      let newImages = [];
      for (let j of buff.images) {
        const FILE_NAME=j.replaceAll(/\?\.*$/gmi,"").match(/([^\/]*)$/gim)[0]
        if (j.match(/^(https?\:\/\/)/gim)) {
          newImages.push(`/images/${type}/` + i + '/' + getNewName(FILE_NAME));
          let newPromise = download(j, `./src/images/${type}/` + i + '/' + getNewName(FILE_NAME));
          result.push(newPromise);
        } else if (j.startsWith('../')) {
          if(j.startsWith("../data")){
            convertImages(j.replaceAll(/\?\.*$/gmi,"").replace("../","./"));
          }
          newImages.push(getNewName(j));
        } else {
          let newPromise = downloadImages(i, j);
          result.push(newPromise);
          newImages.push(`/images/${type}/` + i + '/' + getNewName(FILE_NAME));
        }
      }
      buff.images = newImages;
    }
    Promise.allSettled(result)
      .then((e) => {
        convertImages(`./src/images/projects/${i}`);
        resolve();
      });
  });
}


function convertImages(path) {
  const compress_images = require('compress-images');

  compress_images(path + '/*', path + '/', {
    compress_force: false, statistic: true, autoupdate: true,
  }, false, { jpg: { engine: 'webp', command: ['quality', '80'] } }, {
    png: {
      engine: 'webp', command: ['quality', '80'],
    },
  }, { svg: { engine: 'svgo', command: '--multipass' } }, {
    gif: {
      engine: 'gif2webp', command: ['--colors', '64', '--use-col=web'],
    },
  },()=>{});
}

function getNewName(str) {
  switch (str.match(/\..*$/gmi)[0].toLowerCase()) {
    case '.png':
    case '.jpg':
      return str.replace(/\..*$/gmi, '.webp');
      break;
    case 'gif':
      return str;
      break;
    default:
      return str;
      break;
  }
}