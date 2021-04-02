<template>
  <v-menu
    v-if="portCount"
    v-model="menu"
    bottom
    left
    >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        text
        v-bind="attrs"
        v-on="on"
        title="Кількість порцій"
      >
        Порцій: {{portCount}} <v-icon right>{{icon}}</v-icon>
      </v-btn>
    </template>
      <v-list>
        <v-list-item
          v-for="(item, i) in this.portSelect"
          :key="i"
          @click="changePortion(item)"
        >
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>


<script>
export default {
  props: ['ings', 'portions', 'icon'],
  data() {
      return {
        menu: false,
        portSelect:[], // items count for selection
        tempPortions: false,
        portCount: 0, // count of portion
      }
  },
  mounted() {
      this.generatePortions();
      this.menu = true;
  },
  methods: {
    /**
      Create portions counts
    */
    generatePortions(){

       if (this.portions){
          this.portCount =new Number (this.portions);
       }
       if (!isNaN(this.portCount)) {
         this.portSelect.push(this.portCount);
         this.portSelect.push(this.portCount*2);
       }
    },
    /**
      change count portion
      and save temporary portions
    */
    changePortion(count) {
        if (!this.tempPortions) {
            this.tempPortions=[];
           for (let i in this.ings) {
             this.tempPortions[i] = this.ings[i].c;
           }
        }
        console.log(this.tempPortions);
        this.portCount = count;
        for (let i in this.tempPortions) {
           if (count == this.portSelect[0]) {
             this.ings[i].c=this.tempPortions[i];
           } else {
              let newCount = new Number (this.tempPortions[i]);
              if (isNaN(newCount)) {
                if (this.ings[i].c) {
                    this.ings[i].c= '2 x '+this.ings[i].c;
                }


              } else {
                this.ings[i].c = newCount*2;
              }
           }
        }

    },
  }

}
</script>
