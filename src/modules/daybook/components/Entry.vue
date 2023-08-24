<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: 10 } })"
    >
        <div class="entry-title d-flex">
            <span class="text-success mx-1 fs-5 fw-light">Miércoles</span>
            <span class="text-success mx-1 fs-5 fw-light">23</span>
            <span class="text-success mx-1 fs-5 fw-bold">Agosto</span>
            <span class="text-success mx-1 fs-5 fw-bold">2023</span>
        </div>
        <div class="entry-description">
            <p class="text-dark mx-1 fs-6 fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis voluptates necessitatibus aperiam ipsam rem ea, itaque possimus excepturi fuga. Expedita placeat magni quibusdam molestias velit! Quos culpa minus maiores?</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'EntryItem'
    }
</script>