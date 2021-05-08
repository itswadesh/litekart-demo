<template>
  <div class="fixed bottom-0 z-10 w-full pt-1 mt-20 overflow-x-auto text-gray-700 bg-white border-t shadow-lg sm:hidden">
    <div class="flex items-center justify-around">
      <nuxt-link
        to='/'
        class="category-item"
        active-class="text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
          class="w-6 h-6 mx-auto"  active-class="text-primary"
          fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        <span class="text-xs font-bold tracking-wider">Home</span>
      </nuxt-link>
      <nuxt-link
        to="/search"
        class="category-item"
        active-class="text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
        </svg>
        <span class="text-xs font-bold tracking-wider">Categories</span>
      </nuxt-link>
      <nuxt-link
        to="/offers"
        class="category-item"
        active-class="text-primary"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
      </svg>
        <span class="text-xs font-bold tracking-wider">Explore</span>
      </nuxt-link>
        <nuxt-link
        to="/my/"
        class="category-item"
        active-class="text-primary"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span class="text-xs font-bold tracking-wider">Profile</span>
      </nuxt-link>
    </div>
  </div>
</template>
