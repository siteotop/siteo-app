
import helperCreateStDesign from './_helper/createStDesign.js';

export default {
    functional: true,

    render(h, context) {
      return helperCreateStDesign(
        h, context,
        context.props.$children,
        'v-toolbar',
      );
    }
}
