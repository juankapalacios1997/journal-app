<template>
    <div class="entry-view-container d-flex justify-content-center p-3">
        <h1 class="align-self-center">No Entry Selected</h1>
        <Fab icon="fa-plus"/>
    </div>
</template>

<script>
// import { defineAsyncComponent } from 'vue';
import Fab from '@/modules/daybook/components/Fab.vue';

    export default {
        name: 'NoEntrySelected', 
        components: {
            Fab
        }
    }
</script>