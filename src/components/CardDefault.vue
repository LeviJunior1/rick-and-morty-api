<template>
  <v-card
    class="mx-auto my-12"
    elevation="1"
    max-width="300">
    <v-img
      height="250"
      :src="character.image">
    </v-img>
    <v-card-text>
      <v-row>
        <v-col
          cols="12"
        >
          <div class="text-center black--text font-weight-medium text-truncate text-h5">
            {{ character.name }}
          </div>
        </v-col>
        <v-col
          md="4"
        >
          <p class="mb-0 text-center black--text overline">Status</p>
          <div class="text-center">
            <font-awesome-icon :icon="'fa-solid ' + status(character.status)" /> 
          </div>
        </v-col>
        <v-col
          md="4"
          class="text-center"
        >
          <p class="mb-0 black--text overline">
            Species
          </p>
          <p>
            {{ character.species }}
          </p>
        </v-col>
        <v-col
          md="4"
        >
          <p class="mb-0 text-center black--text overline">Gender</p>
          <div class="text-center">
            <font-awesome-icon :icon="'fa-solid ' + gender(character.gender)" /> 
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'CardDefault',
    props: {
      character: {
        type: Object,
        require: true,
        default: () => {}
      }
    },
    methods: {
      status(status) {
        const icon = {
          Alive: 'fa-heart',
          Dead: 'fa-face-dizzy',
          default: 'fa-circle-question'
        }
        return icon[status] || icon.default
      },
      gender(gender) {
        const icon = {
          Male: 'fa-mars',
          Female: 'fa-venus',
          default: 'fa-circle-question'
        }

        return icon[gender] || icon.default
      }
    }
  }
</script>
