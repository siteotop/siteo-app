
import helperCreateStDesign from './_helper/createStDesign.js';

export default {
    functional: true,

    render(h, context) {

      console.log(context);
      console.log(context.props.parentDesign);
      return helperCreateStDesign(
        h, context,
        context.props.parentDesign,
        'v-toolbar',
      );
    }
}
