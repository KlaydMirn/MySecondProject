export default {
  created () {
    if (this.$options.componentName) {
      console.log(this.$options.componentName + ' is run')
    }
  }
}
