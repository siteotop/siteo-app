module.exports= function (scripts, domain) {
  var html = '';
  for (let i in scripts) {
   html+='<script  type="text/javascript" src="'+domain+scripts[i]+'"></script>';
 }
 return html;

}
