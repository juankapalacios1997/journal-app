<template>
    <div>
        <button class="fab-btn btn btn-primary btn-primary">
            <i :class="`fa fa-2x ${icon}`"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'FabItem',
        props: {
            icon: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>