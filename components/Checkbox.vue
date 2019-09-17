<template>
  <label
    class="vertical-filters-label common-customCheckbox 
  hover:bg-none"
    :for="id || uniqueId"
  >
    <input
      type="checkbox"
      :id="id || uniqueId"
      :name="name"
      :value="value"
      :disabled="disabled"
      :required="required"
      :color="color"
      :checked="checkboxState"
      @click="toggle"
    />
    <span
      v-if="color"
      data-colorhex="black"
      class="colour-label colour-colorDisplay"
      :style="{'background-color':color}"
    ></span>
    <span class="text-gray-800 ml-2 text-sm">
      <slot />
    </span>
    <span class="text-gray-500 text-xs">({{count}})</span>
    <div class="common-checkboxIndicator"></div>
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  model: {
    prop: "model",
    event: "change"
  },
  props: {
    id: {
      type: String,
      required: false
    },
    model: {
      type: String | Array,
      default: undefined
    },
    color: {
      type: String,
      required: false
    },
    circle: {
      type: Boolean,
      default: false,
      required: false
    },
    checked: {
      type: Boolean,
      required: false
    },
    value: {
      type: [String, Boolean],
      required: false,
      default: ""
    },
    count: {
      type: [String, Number],
      required: false,
      default: 0
    },
    name: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false
    },
    size: {
      type: Number,
      required: false
    },
    fontSize: {
      type: Number,
      required: false
    }
  },
  data: () => ({
    uniqueId: ""
  }),
  computed: {
    checkboxState() {
      // if (this.model === undefined) return this.value;
      if (Array.isArray(this.model))
        return this.model.indexOf(this.value) !== -1;
      return this.model && this.value;
    }
  },
  methods: {
    toggle() {
      if (this.disabled) return;
      let value = this.model || this.value;
      if (Array.isArray(value)) {
        const i = value.indexOf(this.value);
        if (i === -1) value.push(this.value);
        else value.splice(i, 1);
      } else {
        value = [];
        value.push(this.value);
      }
      this.$emit("change", value);
    },

    genId() {
      if (this.id === undefined || typeof String) {
        this.uniqueId = `m-checkbox--${Math.random()
          .toString(36)
          .substring(2, 10)}`;
      } else {
        this.uniqueId = this.id;
      }
    }
  },
  watch: {
    checked(v) {
      if (v !== this.checkboxState) this.toggle();
    }
  },
  mounted() {
    this.genId();
    if (this.checked && !this.checkboxState) {
      this.toggle();
    }
  }
};
</script>

<style scoped>
label {
  line-height: 2;

  cursor: pointer;
}
</style>