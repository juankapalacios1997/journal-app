<template>
    <div>
        <Navbar />
        <div class="d-flex">
            <div class="entry-list col-4">
                <EntryList />
            </div>
            <div class="col">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>
// import Navbar from '../components/Navbar.vue';
import { defineAsyncComponent } from 'vue'

export default {
    name: 'DaybookLayout',
    components: { 
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue'))
    }
}
</script>

<style scoped>

</style>