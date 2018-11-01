
import ListExtend from './extend.vue';
import ToogleList from './Lists/Service.vue';
import ToogleCards from './Cards/Service.vue';


/**
// add services list to store
APP_SERVICES: createServices('WEBSITE_API_URL'),
store.commit('APP_SERVICES/saveList', APP_INSTANCE.services.items );
*/
export default {
  extends: ListExtend,
  storeName: 'APP_SERVICES',

  components: {ToogleCards, ToogleList}
}
