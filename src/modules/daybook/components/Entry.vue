<template>
    <div 
        class="entry-container mb-3 pointer p-2"
        @click="$router.push({ name: 'entry', params: { id: entry.id } })"
    >
        <div class="entry-title d-flex">
            <span class="text-success mx-1 fs-5 fw-light">{{ weekDay }}</span>
            <span class="text-success mx-1 fs-5 fw-bold">{{ month }}</span>
            <span class="text-success mx-1 fs-5 fw-bold">{{ date }}<sup>{{ daySuffix }}</sup></span>
            <span class="text-success mx-1 fs-5 fw-bold">{{ fullYear }}</span>
        </div>
        <div class="entry-description">
            <p class="text-dark mx-1 fs-6 fw-light">{{ shortText }}</p>
        </div>
    </div>
</template>

<script>
    import getDayName from '@/mixins/getDayName'
    import getMonthName from '@/mixins/getMonthName'
    import getDaySuffix from '@/mixins/getDaySuffix'

    export default {
        name: 'EntryItem',
        mixins: [getDayName, getDaySuffix, getMonthName],
        props: {
            entry: {
                type: Object,
                required: true
            }
        },
        computed: {
            weekDay() {
                return this.getDayName(this.entry.date.getDay())
            },
            month() {
                return this.getMonthName(this.entry.date.getMonth())
            },
            daySuffix() {
                return this.getDaySuffix(this.entry.date.getDate())
            },
            date() {
                return this.entry.date.getDate()
            },
            fullYear() {
                return this.entry.date.getFullYear()
            },
            shortText() {
                return (this.entry.text.length > 280) ? this.entry.text.substring(0, 280) + '...' : this.entry.text
            }
        }
    }
</script>