<template functional>
  <v-list>
    <template
        v-for="item in parent.$store.state.appInstance.objectActive.menu"
        v-if="item.path!='divider'">
        <v-list-group
            v-if="item.children"
            :prepend-icon="item.i"
            v-model="item.active"
            no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile  v-for="subItem in item.children" :key="subItem.title" :to="subItem.path">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
               <AppIcon :name="subItem.i"></AppIcon>
            </v-list-tile-action>
          </v-list-tile>
          </v-list-group>
          <v-list-tile v-else  :to="item.path"  >
              <v-list-tile-action>
                <AppIcon :name="item.i">phone</AppIcon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{item.title}}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
      </template>
        <v-divider v-else></v-divider>
        </v-list>
</template>

<script>

export default {
name: 'StVerMenu',


}

</script>
