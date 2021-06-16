<template>
  <q-btn
    round
    :dense="isDense"
    :color="color"
    :flat="isFlat"
    :disable="isDisabled"
    :loading="isLoading"
    v-on="$listeners"
  >
    <q-icon :name="icon" size="20px"></q-icon>
    <slot></slot>
  </q-btn>
</template>

<script>
export default {
  name: "BaseIconButton",

  props: {
    color: {
      type: String,
      default: "primary",
    },

    icon: {
      type: String,
      required: true,
    },

    isFlat: {
      type: Boolean,
      default: false,
    },

    isDisabled: {
      type: Boolean,
      default: false,
    },

    isDense: {
      type: Boolean,
      default: false,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
