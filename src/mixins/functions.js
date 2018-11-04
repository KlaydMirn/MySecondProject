export default{
  methods: {
    buttonAlert () {
      if (this.$options.mainButtonName) {
        alert('You press: ' + this.$options.mainButtonName)
      }
    }
  }
}
