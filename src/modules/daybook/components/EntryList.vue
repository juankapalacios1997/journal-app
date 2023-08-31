<template>
    <div class="entry-list-container">
        <div class="entry-input px-2 pt-2">
            <input
                type="text"
                class="form-control"
                placeholder="Search entries"
                v-model="term"
            />
        </div>
        <div class="entry-scrollarea px-2">
            <div 
                v-for="entry in entriesByTerm"
                :key="entry.id"
            >
            <Entry
                :entry="entry"
            />
        </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { defineAsyncComponent } from 'vue';

    export default {
        name: 'EntryList',
        components: {
            Entry: defineAsyncComponent(() => import('./Entry.vue'))
        },
        computed: {
            ...mapGetters('journal', ['getEntriesByTerm']),
            entriesByTerm() {
                return this.getEntriesByTerm(this.term)
            }
        },
        data() {
            return {
                term: ''
            }
        }
    }
</script>