<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header> {{ headerTitle }} </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col cols="4">
            <v-text-field
              :label="inputField.numeroTicket.label"
              :placeholder="inputField.numeroTicket.placeholder"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              :label="inputField.sector.label"
              :placeholder="inputField.sector.placeholder"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-autocomplete
              v-model="model"
              :items="items"
              :loading="isLoading"
              :search-input.sync="search"
              chips
              clearable
              hide-details
              hide-selected
              item-text="name"
              item-value="symbol"
              label="Search for a coin..."
              solo
            >
              <template v-slot:no-data>
                <v-list-item>
                  <v-list-item-title>
                    Search for your favorite
                    <strong>Cryptocurrency</strong>
                  </v-list-item-title>
                </v-list-item>
              </template>
              <template v-slot:selection="{ attr, on, item, selected }">
                <v-chip
                  v-bind="attr"
                  :input-value="selected"
                  color="blue-grey"
                  class="white--text"
                  v-on="on"
                >
                  <v-icon left> mdi-bitcoin </v-icon>
                  <span v-text="item.name"></span>
                </v-chip>
              </template>
              <template v-slot:item="{ item }">
                <v-list-item-avatar
                  color="indigo"
                  class="text-h5 font-weight-light white--text"
                >
                  {{ item.name.charAt(0) }}
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.symbol"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-bitcoin</v-icon>
                </v-list-item-action>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: "FiltersSearchTicket",
  data() {
    return {
      headerTitle: "Filtros de Tabla",
      inputField: {
        estado: {
          label: "Estado",
          placeholder: "EJ: Abierto",
        },
        sector: {
          label: "Sector",
          placeholder: "EJ: Gerencia de Provisioning",
        },
        numeroTicket: {
          label: "Número de Ticket",
          placeholder: "EJ: 20220816DS",
        },
      },
      isLoading: false,
      items: [],
      model: null,
      search: null,
      tab: null,
    };
  },
  methods: {
    //searchAPI (Vuex)
    //cleanFilters(Vuex)
  },
  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    search() {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      // Lazily load input items
      fetch("https://api.coingecko.com/api/v3/coins/list")
        .then((res) => res.clone().json())
        .then((res) => {
          this.items = res;
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.isLoading = false));
    },
  },
};
</script>

<style>
</style>