<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  render() {
    return [
      this.$slots.default ? this.$slots.default() : [],
    ]
  }
})
</script>
