<template >
<div class="pa-4 siteo-html" v-html="cntnt.t">
</div>
</template>
<script>
export default {
  props: ['cntnt'],

  // на SSR сервері це не потрібно тому ми робимо це в mounted
  mounted() {

    const container = this.$el.querySelectorAll('a');
    // https://ru.stackoverflow.com/questions/649396/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-onclick-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%81%D0%B5%D1%85-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%BF%D0%BE-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-%D1%82%D0%B5%D0%B3%D0%B0-%D0%B8%D0%BB%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0
    var self = this;
    for (var i = 0; i < container.length; i++) {

      container[i].onclick = function(e){
        e.preventDefault();
        const url = this.href;
        const host = self.$store.getters['CORE_HOST'];
        const position = url.indexOf(host, 0);

        if (position ==-1) {
            // if URL isn't path for app

            window.location = url;
            //  window.open('', '_blank');
        } else {
            // check for app path;

            let path = url.slice(host.length);

            let attrib = this.getAttribute('href');
            if (attrib[0]=='#') {
                  console.log('delay')
                  self.$vuetify.goTo(attrib, {offset: 50, duration: 40});
                return;
            }

            if (!path) {
              path = '/';
            }
            self.$router.push({path:path});
        }
      };
    }

  }
}
</script>

<style>
  .siteo-cnt-menu {
    list-style-position: inside;
    list-style-type: decimal-leading-zero ;
  }
  .siteo-cnt-menu .ql-indent-1 {
    list-style-type: decimal-leading-zero ;
    padding-left: 3em;
  }

  .siteo-html p {
    font-size: 20px;
    line-height: 1.55;
  }
</style>
