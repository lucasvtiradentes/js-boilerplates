import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join } from 'node:path';

/* COPY FOLDERS ############################################################# */

const SOURCE_FOLDER = './src';
const DIST_FOLDER = './dist';
const ALREADY_COPIED_TS_EXTENSIONS = ['.ts', '.js'];

copyTypescriptIgnoredFilesToDist(SOURCE_FOLDER, DIST_FOLDER, ALREADY_COPIED_TS_EXTENSIONS);

/* ########################################################################## */

function copyTypescriptIgnoredFilesToDist(sourceFolder: string, distFolder: string, ignoredExtensionsArr: string[]) {
  console.log(`-> copying ignored files by typescript from ${sourceFolder} to ${distFolder} except from this extensions: [${ignoredExtensionsArr.join(';')}]`);

  const nonJsFilesFromSourceArr = getOnlyAllowedFiles(sourceFolder, ignoredExtensionsArr);
  const copiedFiles = copyFilesToNewFolder(nonJsFilesFromSourceArr, sourceFolder, distFolder);

  console.log(`copied ${copiedFiles} from ${nonJsFilesFromSourceArr.length} files!`);
  console.log('');
}

/* ########################################################################## */

function getOnlyAllowedFiles(baseFolderPath: string, extensionsToIgnoreArr: string[], oldFolderContentArr?: string[], oldFilesArr?: string[]) {
  const folderContentArr = oldFolderContentArr || readdirSync(baseFolderPath);
  let allowedFilesArr = oldFilesArr || [];

  folderContentArr.forEach((file) => {
    const newbase = join(baseFolderPath, file);
    const isFolder = statSync(newbase).isDirectory();

    if (isFolder) {
      allowedFilesArr = getOnlyAllowedFiles(newbase, extensionsToIgnoreArr, readdirSync(newbase), allowedFilesArr);
    } else {
      const curExt = extname(file);
      const extensionIndex = extensionsToIgnoreArr.findIndex((igExt) => igExt === curExt);

      if (extensionIndex === -1) {
        allowedFilesArr.push(newbase);
      }
    }
  });

  return allowedFilesArr;
}

function copyFilesToNewFolder(filesToCopyArr: string[], sourceFolderpath: string, outputBasePath: string) {
  if (!filesToCopyArr || !sourceFolderpath || !outputBasePath) {
    return 0;
  }
  if (filesToCopyArr.length === 0) {
    return 0;
  }
  if (!existsSync(sourceFolderpath)) {
    return 0;
  }

  let copiedFiles = 0;

  for (let x = 0; x < filesToCopyArr.length; x++) {
    const currentFile = filesToCopyArr[x];
    const newFilePath = join(outputBasePath, currentFile);

    if (existsSync(currentFile)) {
      const newFolderPath = dirname(newFilePath);
      const doesFolderExist = existsSync(newFolderPath);
      const doesFileExist = existsSync(newFilePath);

      if (doesFileExist) {
        console.log(`exists: ${newFilePath}`);
        continue;
      }
      if (!doesFolderExist) {
        createFoldersRecursively(newFolderPath);
      }

      copiedFiles += 1;
      copyFileSync(currentFile, newFilePath);
      console.log(`copied: ${newFilePath}`);
    }
  }

  return copiedFiles;
}

/* ########################################################################## */

function createFoldersRecursively(newFolderPath: string) {
  if (!newFolderPath) {
    return;
  }

  console.log(`creating folder -> ${newFolderPath}`);

  const foldersArr = newFolderPath.split('\\');
  if (foldersArr.length === 0) {
    return;
  }

  let oldFolder = '';

  for (const folder of foldersArr) {
    const newbase = join('./', oldFolder, folder);
    const doesFolderExist = existsSync(newbase);

    if (!doesFolderExist) {
      mkdirSync(newbase);
    }

    oldFolder = newbase;
  }
}
