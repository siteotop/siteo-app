// ES Modules with vue-loader
import Icon from 'vue-awesome/components/Icon.vue'

let paths = [
      {fill:"#fb7373", d:"M293.96 322.78c0 80.68-65.5 146.18-146.18 146.18S1.6 403.46 1.6 322.78 67.1 176.6 147.78 176.6s146.18 65.5 146.18 146.18z"},
      {fill:"#6ab4ff", d:"M526.57 147.18c0 80.68-65.5 146.18-146.18 146.18s-146.18-65.5-146.18-146.18S299.71 1 380.39 1s146.18 65.5 146.18 146.18z"},
      {fill:"#56c362", d:"M562.65 436.54c0 80.68-65.5 146.18-146.18 146.18s-146.18-65.5-146.18-146.18 65.5-146.18 146.18-146.18 146.18 65.5 146.18 146.18z"}
    ];

Icon.register({
  siteo: {
    width: 640,
    height: 640,
    paths:paths
  }
});


Icon.register({
  'siteo-grey': {
    width: 640,
    height: 640,
    paths:  [
      {fill:"#868e96", d:paths[0].d},
      {fill:"#868e96", d:paths[1].d},
      {fill:"#868e96", d:paths[2].d}

    ]
  }
})

Icon.register({
  'siteo-plain': {
    width: 640,
    height: 640,
    paths:    [
        { d:paths[0].d},
        { d:paths[1].d},
        { d:paths[2].d}

      ]
  }
})
