<template>
  <nav>
    <v-app-bar app color="blue darken-4">
      <v-app-bar-nav-icon
        color="white"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase white--text">
        <span class="font-weight-light">ToDO</span>
        <span>Fran</span>
      </v-app-bar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon color="white">mdi-bell</v-icon>
      </v-btn>
    </v-app-bar>

    <v-card>
      <v-navigation-drawer app v-model="drawer">
        <v-list shaped>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                John Leider
              </v-list-item-title>
              <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>

        <v-list shaped>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              router
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>

        </v-list>
        <v-divider></v-divider>

        <v-container id="logout__btn">
          <v-btn color="blue darken-4" outlined small>
            <span>Cerrar Sesión</span>
            <v-icon v-text="'mdi-chevron-left'"></v-icon>
          </v-btn>
        </v-container>
      </v-navigation-drawer>
    </v-card>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      selectedItem: 1,
      items: [
        { text: "Dashboard", icon: "mdi-home", route: "/" },
        { text: "Tareas", icon: "mdi-check", route: "/tareas" },
        { text: "Tableros", icon: "mdi-clock", route: "/tableros" },
        { text: "Performance", icon: "mdi-account", route: "/performance" },
        { text: "New Feature !", icon: "mdi-account", route: "/new-feature" },
      ],
    };
  },
};
</script>

<style>
#logout__btn{
    position: relative;
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>