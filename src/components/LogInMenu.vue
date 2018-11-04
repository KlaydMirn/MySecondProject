<template>
  <v-layout row>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" v-show = "viewLogIn" dark>Log in</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Log in</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Login" v-model="userName" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" @click="buttonAlert">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false, viewName = true, viewLogIn = false, viewLogOut = true" @click="userWelcomeClick">Log in</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn v-show = "viewLogOut" dark @click.native="viewLogIn = true, viewLogOut = false, viewName = false">Log Out</v-btn>
    <div id = "welcomeTitle"  v-show = "viewName">Hi, {{userName}}</div>
  </v-layout>
</template>

<script>
import functions from '../mixins/functions'

export default {
  mixins: [functions],
  componentName: 'LogInMenu',
  mainButtonName: 'Close',
  data: () => ({
    dialog: false,
    userName: '',
    viewName: false,
    viewLogIn: true,
    viewLogOut: false
  }),
  methods: {
    userWelcomeClick () {
      this.$emit('userWelcome', this.userName)
    }
  }
}
</script>

<style>
#welcomeTitle{
  margin: auto auto;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

