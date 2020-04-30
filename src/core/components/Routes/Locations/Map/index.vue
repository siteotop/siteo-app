<template>
 <l-map
    style="height: 100%; width: 100%; "
    :zoom="dataZoom"
    :center="dataCenter"
    ref="myMap"
    :options="{zoomControl: false, attributionControl: false}"
    >

      <l-tile-layer
        :url="url"
      >
      </l-tile-layer>
        <template v-for="(location, index) in locations">
            <l-marker
                :lat-lng="[location.lat, location.lng]"
                :key="index"
                :ref="'marker'+location._id"
                @click="activatePlace(location)"
            >
              <l-popup>
                  <div class="subtitle-2">{{location.title}}</div>
              </l-popup>
            </l-marker>
        </template>

      <l-control-zoom v-if="!hideControl" position="bottomright"  ></l-control-zoom>
  </l-map>

</template>


<script>

import { LMap, LTileLayer, LMarker, LPopup,  LControlZoom } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {

  components: {
      LMap, LTileLayer, LMarker,  LControlZoom, LPopup

  },
  props: {
      locations: {
          type: [Array,  Boolean ],
          default: ()=>{return []}
      },

      zoom: {
        type: Number,
        default: 8
      },

      center: {
        type:[Array],
        default: ()=>{ return [47.413220, -1.219482]}
      },

      hideControl: {
        type: Boolean,
        default: false

      },
      /**
        take centre from first location
      */
      autoCenter: {
        type: Boolean,
        default: false
      },

      openedPopup: {
        type: [String, Boolean],
        default: false
      }


  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      dataZoom: false,
      dataCenter: false,

    };
  },
  created() {
    this.setDataZoom();
    this.setDataCenter();

    if (this.autoCenter&&this.locations[0]) {
      this.dataCenter = [this.locations[0].lat, this.locations[0].lng ];
    }
  },
  mounted() {
    //https://leafletjs.com/reference-1.6.0.html#map-pane

    this.$refs.myMap.mapObject.getPane('mapPane').style.zIndex = 0;


  },

  watch: {
    openedPopup(newLocationId, old_id) {
      if (newLocationId!==false) {
        this.setZoom(14);
        let marker = this.$refs['marker'+newLocationId][0].mapObject;
        marker.openPopup()
        this.$refs.myMap.setCenter(marker.getLatLng());

      } else {
          this.closePopup();
          this.setZoom(this.dataZoom);
      }

    },
    zoom(newZoom) {
        this.dataZoom = newZoom;
    }
  },

  methods: {
    setDataCenter(){
      this.dataCenter = this.center;
    },
    setDataZoom() {
      this.dataZoom = this.zoom;
    },

    /**
      when click on marker
    */
    activatePlace(location) {
      this.$emit('activate-marker', location);
    },


    setZoom(number) {
      this.$refs.myMap.setZoom(number);
    },
    closePopup(location) {
      this.$refs.myMap.mapObject.closePopup();
    }
  }
}

</script>
