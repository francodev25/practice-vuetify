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
            <v-text-field
              :label="inputField.estado.label"
              :placeholder="inputField.estado.placeholder"
            ></v-text-field>
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
      inputField:{
        estado:{
            label:'Estado',
            placeholder: 'EJ: Abierto'
        },
        sector:{
            label:'Sector',
            placeholder: 'EJ: Gerencia de Provisioning' 
        },
        numeroTicket:{
            label:'Número de Ticket',
            placeholder: 'EJ: 20220816DS' 
        }
      }
    };
  },
  methods: {
    //searchAPI (Vuex)
    //cleanFilters(Vuex)
  },
};
</script>

<style>
</style>