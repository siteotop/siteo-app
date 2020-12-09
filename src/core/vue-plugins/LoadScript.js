const LoadScript = {
  install: function (Vue) {
    Vue.loadScript = Vue.prototype.$loadScript = function (src) { // eslint-disable-line no-param-reassign
      return new Promise(function (resolve, reject) {
        const attrName =  'loaded';
        if (document.querySelector('script[src="' + src + '"]')) {

          var ele =  document.querySelector('script[src="' + src + '"]');

          // This function fix problem with one time loading same SiteoPlugin
          //console.log(src);
          var timer = 0;
          var prefix = 50;
          const checkFunc = ()=>{
              if (ele.hasAttribute( attrName)) {
                  resolve();
              } else {
                if (timer<5000) {
                  console.log(timer);
                  timer += prefix;
                  setTimeout(checkFunc, prefix);
                  prefix=prefix+10;
                } else {
                  // if script not loaded and
                  reject()
                }
              }
          }

          checkFunc();

          return;
        }

        const el = document.createElement('script');

        el.type = 'text/javascript';
        el.async = true;
        el.src = src;

        el.addEventListener('load', ()=>{
            el.setAttribute(attrName, 1) ;
            resolve();
        } );
        el.addEventListener('error', reject);
        el.addEventListener('abort', reject);

        document.head.appendChild(el);
      });
    };

  }
};

export default LoadScript;
