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
      <div class="hidden xl:block">
        <form>
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div class="relative flex">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search"
              class="w-80 h-10 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="搜尋關鍵字" required>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>


<!-- <link lang="scss" src="../assets/scss/components/header.scss" scoped> -->
