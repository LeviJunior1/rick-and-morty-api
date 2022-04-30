<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
    >
        <CardDefault 
            v-for="character in characters.result"
            :key="character.id"
            :character="character"
        />
    </v-row>
  </v-container>
</template>

<script>
import CardDefault from '@/components/CardDefault';
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'MainCharacter',
    components: {
        CardDefault,
    },
    computed: {
        ...mapGetters('character', {
            characters: 'getCharacter'
        })
    },
    created() {
        this.getCharacter()
    },
    methods: {
        ...mapActions('character', {
            getCharacterApi: 'getCharacter'
        }),
        
        async getCharacter() {
            await this.getCharacterApi()
        }
    }
    
}
</script>
