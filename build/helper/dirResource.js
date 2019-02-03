
module.exports = function generateDirResource(folder) {

  const VERSION = process.env.npm_package_version;
  const NODE_ENV = process.env.NODE_ENV || "development";
  return  (NODE_ENV == "development")? `/${folder}/dev`: (`/${folder}/v${VERSION}`);



}
