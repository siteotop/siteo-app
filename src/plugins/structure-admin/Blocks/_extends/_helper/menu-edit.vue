<template functional>
<v-menu
  :value="parent.menuList[props.indexComponent].activeEdit"
  @input="(value)=>parent.menuList[props.indexComponent].activeEdit=value"
  offset-x
  min-width="500"
  max-width="500"
  :close-on-content-click="false"
  :close-on-click="false"
  >
  <template v-slot:activator="{ on }">
    <v-btn v-on="on" icon max-width="40" >
        <v-icon >$vuetify.icons.edit</v-icon>
    </v-btn>
  </template>
  <v-card v-if="parent.menuList[props.indexComponent].activeEdit">
    <v-toolbar tabs dense>
      <!--use _name-->
      <v-toolbar-title>{{parent.getText(props.component.n)}}  </v-toolbar-title>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon  >
              <v-icon>$vuetify.icons.ac_help</v-icon>
          </v-btn>
        </template>
          <v-card>
              <!--use _name-->
              ({{props.component.n}})
          </v-card>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn icon @click="parent.copytoClipboard(props.indexComponent)">
        <v-icon>{{parent.$options._icons.copy}}</v-icon>
      </v-btn>
      <v-btn icon @click="parent.pasteFromClipboard(props.indexComponent)">
        <v-icon>{{parent.$options._icons.paste}}</v-icon>
      </v-btn>
      <v-menu
      :close-on-content-click="false"
      :close-on-click="false"
      :value="parent.menuList[props.indexComponent].database"
      @input="(value)=>parent.menuList[props.indexComponent].database=value"

      min-width="500"
      max-width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon  >
              <v-icon>{{parent.$options._icons.database}}</v-icon>
          </v-btn>
        </template>
        <!--_name bellow in props.component.n-->
        <blocks-gallery
          @updateBlock="parent.updateJsonBlock(props.indexComponent, $event)"
          @closeMenu="parent.menuList[props.indexComponent].database=false"
          :idComponent="parent.getNameActiveComponent(props.indexComponent)"
          :jsonStructure="props.component"
          :titleComponent="parent.getText(props.component.n)"
          ></blocks-gallery>
      </v-menu>

      <v-btn icon @click="parent.menuList[props.indexComponent].activeEdit=false">
        <v-icon>$vuetify.icons.close</v-icon>
      </v-btn>
      <template v-slot:extension>
          <v-tabs
          :value="parent.menuList[props.indexComponent].activeTabEdit"
          @change="(value)=>parent.menuList[props.indexComponent].activeTabEdit=value"

          >
            <!--_name shortNameSettingBlock!='n'-->
            <v-tab
              v-for="(shortNameSettingBlock, indexTab) in Object.keys(props.component)"
              :key="indexTab"
              v-if="shortNameSettingBlock!='n'"

            >
                {{parent.getHelperName(shortNameSettingBlock)}}
            </v-tab>
          </v-tabs>
      </template>
    </v-toolbar>
    <v-card-text v-if="parent.showItems">
      <v-tabs-items

      :value="parent.menuList[props.indexComponent].activeTabEdit"
      @change="(value)=>parent.menuList[props.indexComponent].activeTabEdit=value"
      >
        <!--_name shortNameSettingBlock!='n'-->
        <v-tab-item
          v-for="(shortNameSettingBlock, indexBlock) in Object.keys(props.component)"
          :key="indexBlock"
          v-if="shortNameSettingBlock!='n'"
        >
          <v-card flat>
            <v-card-text>
                <!--_name in  props.component.n-->
              <component
              :is="'Settings'+parent.getHelperName(shortNameSettingBlock)"
              :value="props.component[shortNameSettingBlock]"
              @input="(value)=>props.component[shortNameSettingBlock]=value"
              :treeIndex="parent.treeIndex+1"
              :componentName="props.component.n"

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
