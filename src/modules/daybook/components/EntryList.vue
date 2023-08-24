<template>
    <div class="entry-list-container">
        <div class="entry-input px-2 pt-2">
            <input
                type="text"
                class="form-control"
                placeholder="Search entries"
            />
        </div>
        <div class="entry-scrollarea px-2">
            <h3 
                v-for="item in 100"
                :key="item"
            >
            <Entry />
            </h3>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

    export default {
        name: 'EntryList',
        components: {
            Entry: defineAsyncComponent(() => import('./Entry.vue'))
        }
    }
</script>