import { computed, defineComponent } from 'vue'
import { useNameHelper } from '../../utils/namespace.ts'
import { useProps } from '../../utils/props.ts'
import { blockquoteProps } from './props.ts'

export default defineComponent({
  name: 'Blockquote',
  props: blockquoteProps,
  emits: [],
  setup(_props, { slots }) {
    const props = useProps('blockquote', _props, {
      type: 'default',
    })

    const nh = useNameHelper('blockquote')

    const className = computed(() => {
      return {
        [nh]: true,
        [`${nh}-vars`]: true,
        [`${nh}--inherit`]: props.inherit,
        [`${nh}--${props.type}`]: props.type !== 'default',
      }
    })

    return () => <blockquote class={className.value}>{slots.default?.()}</blockquote>
  },
})
