<template functional>
  <v-menu >
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
            <v-icon>$vuetify.icons.menuDots</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(action, i) in props.actions"
          :key="i"
          @click="action.onClick"
        >
          <v-list-item-title>
            {{action.textKey()}}
          </v-list-item-title>
          <v-list-item-icon>
            <v-icon>{{parent.$options._icons[action.icon]}}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-menu>
</template>

<script>
export default {


}
</script>
