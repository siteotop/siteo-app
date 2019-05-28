<template functional>
<v-menu
  :value="parent.menuList[props.indexComponent].activeEdit"
  @input="(value)=>parent.menuList[props.indexComponent].activeEdit=value"
  :nudge-width="100"
  min-width="500"
  max-width="500"
  :close-on-content-click="false"
  :close-on-click="false"
  eager
  :z-index="parent.activeIndex"
  >
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" icon max-width="40" >
        <v-icon >$vuetify.icons.edit</v-icon>
    </v-btn>
  </template>
  <v-card v-if="parent.menuList[props.indexComponent].activeEdit" >
    <v-toolbar tabs dense>
      <v-toolbar-title>{{parent.getText(props.component._n)}} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="parent.menuList[props.indexComponent].activeEdit=false">
        <v-icon>$vuetify.icons.close</v-icon>
      </v-btn>
      <template v-slot:extension>
          <v-tabs
          :value="parent.menuList[props.indexComponent].activeTabEdit"
          @change="(value)=>parent.menuList[props.indexComponent].activeTabEdit=value"

          >
            <v-tab
              v-for="(shortNameSettingBlock, indexTab) in Object.keys(props.component)"
              :key="indexTab"
              v-if="shortNameSettingBlock!='_n'"

            >
                {{parent.getHelperName(shortNameSettingBlock)}}
            </v-tab>
          </v-tabs>
      </template>
    </v-toolbar>
    <v-card-text>
      <v-tabs-items

      :value="parent.menuList[props.indexComponent].activeTabEdit"
      @change="(value)=>parent.menuList[props.indexComponent].activeTabEdit=value"
      >
        <v-tab-item
          v-for="(shortNameSettingBlock, indexBlock) in Object.keys(props.component)"
          :key="indexBlock"
          v-if="shortNameSettingBlock!='_n'"
        >
          <v-card flat>
            <v-card-text>
              <component
              :is="'Settings'+parent.getHelperName(shortNameSettingBlock)"
              :value="props.component[shortNameSettingBlock]"
              @input="(value)=>props.component[shortNameSettingBlock]=value"
              :treeIndex="parent.treeIndex+1"
              :componentName="props.component._n"
              :noDublicateChild="true"
              :typeHelper="'helper'+parent.getHelperName(shortNameSettingBlock)"
              ></component>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>

  </v-card>
</v-menu>
</template>

<script>
export default {


}
</script>
