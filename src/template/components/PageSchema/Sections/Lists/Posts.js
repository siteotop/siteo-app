
import ListExtend from './extend.vue';
import CardList from './Cards/Post.vue';


/**
// add services list to store
APP_SERVICES: createServices('WEBSITE_API_URL'),
store.commit('APP_SERVICES/saveList', APP_INSTANCE.services.items );
*/
export default {
  extends: ListExtend,
  storeName: 'APP_POSTS',
  components: {CardList}
}
