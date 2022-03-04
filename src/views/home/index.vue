<template>
  <v-container>
    <h1 class="display-1">Welcome John!</h1>
      <v-row>
        <div class="col-sm-6 col-lg-3 col-12">
        <v-card>
          <v-card-title class="text-h5"> Tasks Completed </v-card-title>
          <v-card-subtitle>28 from 129</v-card-subtitle>

          <v-card-actions>
            <v-btn text> See more </v-btn>
          </v-card-actions>
        </v-card>
        </div>
                <div class="col-sm-6 col-lg-3 col-12">
        <v-card>
          <v-card-title class="text-h5"> Tasks Completed </v-card-title>
          <v-card-subtitle>28 from 129</v-card-subtitle>

          <v-card-actions>
            <v-btn text> See more </v-btn>
          </v-card-actions>
        </v-card>
        </div>
                <div class="col-sm-6 col-lg-3 col-12">
        <v-card>
          <v-card-title class="text-h5"> Tasks Completed </v-card-title>
          <v-card-subtitle>28 from 129</v-card-subtitle>

          <v-card-actions>
            <v-btn text> See more </v-btn>
          </v-card-actions>
        </v-card>
        </div>
                <div class="col-sm-6 col-lg-3 col-12">
        <v-card>
          <v-card-title class="text-h5"> Tasks Completed </v-card-title>
          <v-card-subtitle>28 from 129</v-card-subtitle>

          <v-card-actions>
            <v-btn text> See more </v-btn>
          </v-card-actions>
        </v-card>
        </div>
      </v-row>


    <div class="d-flex">
      <p>Here you are gonna see a Dashboard with some Analytics</p>
    </div>
    <ul>
      <li>Task completed (Number)</li>
      <li>About to Finish</li>
      <li>Task to Do (Number)</li>
      <li>Task in Progress</li>
      <li>Last Init Session</li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      alignments: ["center"],
    };
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card{
  width: 450px;
}

</style>
