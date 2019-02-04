
module.exports = function generateDirResource(folder, NODE_ENV) {

  const VERSION = process.env.npm_package_version;

  return  (NODE_ENV == "production")? `/${folder}/v${VERSION}`:`/${folder}/dev`;
}
