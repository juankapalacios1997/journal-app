<template>
    <template v-if="entry">
        <div class="entry-view-container m-auto p-3">
        <div class="entry-title d-flex justify-content-between p-2">
            <div class="ml-3">
                <span class="text-success mx-1 fs-5 fw-light">{{ weekDay }}</span>
                <span class="text-success mx-1 fs-5 fw-bold">{{ month }}</span>
                <span class="text-success mx-1 fs-5 fw-bold">{{ fullDate }}<sup>{{ daySuffix }}</sup></span>
                <span class="text-success mx-1 fs-5 fw-bold">{{ fullYear }}</span>
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
        <div class="textarea-container d-flex flex-column px-3 h-25">
            <textarea v-model="entry.text" placeholder="What's up today?"></textarea>
        </div>
        <Fab icon="fa-save"/>
        <img
            src="https://i.ytimg.com/vi/Vuw3MVQ5hCw/maxresdefault.jpg"
            alt="Sincronisadas.jpg"
            class="entry-img img-thumbnail"
        />
    </div>
    </template>
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    import { mapGetters } from 'vuex';
    import getDayName from '@/mixins/getDayName'
    import getMonthName from '@/mixins/getMonthName'
    import getDaySuffix from '@/mixins/getDaySuffix'

    export default {
        name: 'EntryView',
        mixins: [getDayName, getDaySuffix, getMonthName],
        props: {
            id: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                entry: null,
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
        }, 
        components: {
            EntryButton: defineAsyncComponent(() => import('@/modules/daybook/components/EntryButton.vue')),
            Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab.vue'))
        },
        computed: {
            ...mapGetters('journal', ['getEntryById']),
            weekDay() {
                const day = this.entry.date.getDay()
                return this.getDayName(day)
            },
            month() {
                const month = this.entry.date.getMonth()
                return this.getMonthName(month)
            },
            daySuffix() {
                const date = this.entry.date.getDate()
                return this.getDaySuffix(date)
            },
            fullDate() {
                const date = this.entry.date.getDate()
                return date
            },
            fullYear() {
                const year = this.entry.date.getFullYear()
                return year
            }
        },
        watch: {
            id(val) {
                this.loadEntry(val)
            }
        },
        created() {
            this.loadEntry(this.id)
        },
        methods: {
            loadEntry(id) {
                const entry = this.getEntryById(id)
                if (!entry) this.$router.push({ name: 'no-entry-selected' })
                this.entry = entry
            }
        }
    }
</script>