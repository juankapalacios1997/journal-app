<template>
    <div class="entry-view-container m-auto p-3">
        <div class="entry-title d-flex justify-content-between p-2">
            <div class="ml-3">
                <span class="text-success fs-3 fw-bold">15</span>
                <span class="mx-1 fs-3">Julio</span>
                <span class="mx-2 fs-4 fw-light">2021</span>
            </div>
            <div class="button-container d-flex justify-content-center">
                <div v-for=" (button, index) in buttons" :key="index">
                    <EntryButton :color="button.color" :icon="button.icon">
                        <p class="button-label mb-0 mr-2 align-self-center">
                            {{ button.label }}
                        </p>
                    </EntryButton>  
                </div>
            </div>
        </div>
        <hr>
        <div class="textarea-container d-flex flex-column px-3 h-75">
            <textarea placeholder="What's up today?"></textarea>
        </div>
        <Fab icon="fa-save"/>
        <img
            src="https://i.ytimg.com/vi/Vuw3MVQ5hCw/maxresdefault.jpg"
            alt="Sincronisadas.jpg"
            class="entry-img img-thumbnail"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
// import EntryButton from '@/modules/daybook/components/EntryButton.vue';

    export default {
        name: 'EntryView',
        components: {
            EntryButton: defineAsyncComponent(() => import('@/modules/daybook/components/EntryButton.vue')),
            Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'))
        },
        data() {
            return {
                buttons: [
                    {   
                        label: 'Delete',
                        color: 'btn-danger',
                        icon: 'fa-trash-alt'
                    },
                    {
                        label: 'Upload',
                        color: 'btn-primary',
                        icon: 'fa-upload'
                    }
                ]
            }
        }
    }
</script>