<template>
  <div>
    <h2>Search tasks</h2>
    <hr />
    <!-- <input
      type="search"
      :value="search"
      @input="onInput($event.target.value)"
      placeholder="Start searching..."
    /> -->
    <!-- <input
      type="search"
      :value="search"
      @input="(event) => onInput(event.target.value)"
      placeholder="Start searching..."
    /> -->
    <input
      type="search"
      :value="search"
      @input="onInput"
      placeholder="Start searching..."
    />
  </div>
</template>

<script>
export default {
  name: "AppTaskSearch",
  props: {
    search: {
      type: String,
      required: true,
    },
  },
  // Vue 2
  // methods: {
  //   onInput(value) {
  //     this.$emit("input", value);
  //   },
  // },
  // -**********************************-

  // Vue 3 - Composition API
  setup(props, context) {
    const onInput = (event) => {
      // context.emit("input", value);
      context.emit("input", event.target.value);
    };
    return {
      onInput,
    };
  },
  // props: ["search"],
};
</script>
