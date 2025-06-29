import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sass from 'sass';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.resolve(__dirname, '../../scss');
const outputDir = path.resolve(__dirname, '../../css');

function getAllScssFiles(dir) {
  let results = [];

  fs.readdirSync(dir, { withFileTypes: true }).forEach(entry => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getAllScssFiles(fullPath));
    } else if (entry.isFile() && path.extname(entry.name) === '.scss') {
      results.push(fullPath);
    }
  });

  return results;
}

getAllScssFiles(inputDir).forEach((scssFile) => {
  const fileName = path.basename(scssFile).replace(/\.scss$/, '.css');
  const outputPath = path.join(outputDir, fileName);

  const result = sass.compile(scssFile);
  fs.writeFileSync(outputPath, result.css);
  console.log(`✅ Compiled: ${scssFile} → css/${fileName}`);
});
