<template>
  <div class="h-20 flex items-center justify-between bg-MyColor-BlueGray-900 py-3 px-4 xl:py-27 xl:pl-60 xl:pr-6">
    <div class="flex items-center">
      <NuxtImg src="images/icon_vote.png" width=26 height=26 class="mr-2" alt="some photo" preload />
      <h1 class="text-xl_nav_title text-white">總統開票懶人包</h1>
    </div>
    <div class="flex">
      <div class="flex items-end justify-end xl:mr-6">
        <span class="text-white text-nav_title xl:text-xl_nav_title basis-8 xl:basis-20">開票倒數</span>
        <span class="text-MyColor-Rose-600 text-nav_num ml-2 xl:mx-2">99</span>
        <span class="hidden xl:inline-block text-white text-nav_title xl:text-xl_nav_title ">天</span>
      </div>
      <SearchBar class="hidden xl:block" />
    </div>
  </div>
</template>


<!-- <link lang="scss" src="../assets/scss/components/header.scss" scoped> -->
