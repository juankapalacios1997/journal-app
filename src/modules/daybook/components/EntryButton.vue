<template>
    <div>
        <button :class="`fab-entry-btn btn btn-primary ${color} mx-2 d-flex justify-content-between`">
            <slot></slot>
            <i :class="`fa ${icon} align-self-center`"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'EntryButton',
        props: {
            color: {
                type: String
            },
            icon: {
                type: String
            }
        }
    }
</script>