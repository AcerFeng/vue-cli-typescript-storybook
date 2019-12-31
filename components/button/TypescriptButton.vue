<template>
  <button class="btn red" :class="type" :disabled="disabled" @click="click">
    <!-- @slot Default to label prop -->
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TypescriptButton extends Vue {
  @Prop({ type: Boolean, default: false }) readonly disabled!: boolean
  @Prop({ type: String, default: 'normal' }) readonly type!: string
  @Prop({ type: String, required: true, default: '' }) label!: string

  click(ev: Event) {
    this.$emit('click', ev)
  }
}
</script>

<style scoped lang="scss">
.btn {
  padding: 3px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #fff;
  color: #333;

  &.red {
    background: red;
  }
}

.btn:active {
  opacity: 0.9;
}

.btn.primary {
  background-color: #33f;
  color: #fff;
}

.btn:disabled {
  background-color: #eee;
  color: #777;
}
</style>
