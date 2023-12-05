<template>
    <div class="h-screen flex justify-center items-center bg-MyColor-BlueGray-800">
        <div class="w-full md:w-1/2">
            <div class="flex justify-evenly">
                <NuxtImg src="images/eyeBall-L.png" width=120 height=120 class="relative -left-4 md:left-0" alt="some photo" preload />
                <NuxtImg src="images/eyeBall-R.png" width=120 height=120 class="relative -right-4 md:right-0" alt="some photo" preload />
            </div>
            <div class="flex justify-center">
                <NuxtImg src="images/vote.png" width=158 height=158 class="relative" alt="some photo" preload />
            </div>
            <p class="text-white text-load_b_30 xl:text-xl_load_b_60 font-bold text-center mt-10">總統開票懶人包</p>
            <p id="loading" class="text-white text-load_b_20 xl:text-xl_load_b_40 font-bold text-center mt-10">
                Loading
                <span v-for="dot in 3" :key="dot" class="dot">.</span>
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<link lang="scss" src="../assets/scss/layout/loading.scss" scoped>
