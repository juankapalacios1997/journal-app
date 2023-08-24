<template>
    <div>
        <nav class="navbar bg-primary">
            <a class="navbar-brand text-light">
                <img src="@/assets/logo.png" alt="Vue Logo" height="32" class="d-inline-block align-text-top mx-2"/>
                Daybook
            </a>
            <div class="d-flex">
                <button class="btn btn-outline-info mx-2">
                    <i class="fa fa-sign-out-alt"></i>
                </button>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'NavbarItem'
    }
</script>