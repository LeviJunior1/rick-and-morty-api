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
            class="mx-auto my-12"
        />
    </v-row>
    <v-row
        justify="center"
    >
        <v-col>
            <v-pagination
                v-model="page"
                :length="lengthPages"
                :total-visible="7"
                circle
                color="#d16ba5"
                @input="handlePageChange"
            ></v-pagination>
        </v-col>
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
            characters: 'getCharacter',
            lengthPages: 'getPages'
        })
    },
    data: () => ({
        page: 1
    }),
    created() {
        this.getCharacter(this.page)
    },
    methods: {
        ...mapActions('character', {
            getCharacterApi: 'getCharacter'
        }),
        
        getCharacter() {
            this.getCharacterApi()
        },

        handlePageChange() {
            this.getCharacterApi(this.page)
            scrollTo(0, 0)
        }
    }
}
</script>
