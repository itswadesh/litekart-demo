<template>
  <div>
    <MobileFilters
      class="flex-none max-w-xs"
      :facets="facets"
      :fl="fl"
      v-if="showMobileFilter"
      @hide="showMobileFilter = false"
    />
    <div v-else class="flex">
      <DesktopFilters
        class="flex-none hidden max-w-xs md:block"
        :facets="facets"
        :fl="fl"
        @clearAllFilters="clearAllFilters"
      />
      <div class="w-full px-3 bg-gray-100 sm:px-6">
        <HeaderBody
          :category="{}"
          :count="productCount"
          :fl="fl"
          @removed="facetRemoved"
          @showFilters="showMobileFilter = true"
        />
        <NoProduct v-if="products.length == 0 && !loading" />
        <div v-else>
          <div class="flex flex-wrap justify-between" v-if="loading">
            <ProductSkeleton v-for="(p, ix) in 10" :key="ix + '-1'" />
          </div>
          <!-- <img
                src="/loading.svg"
                alt="loading ..."
          />-->
          <div
            v-else-if="products && products.length > 0"
            class="grid grid-cols-2 gap-3 mb-6 md:gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
          >
            <ProductNew :product="p" v-for="p in products" :key="p._id" />
          </div>

          <!-- <div class="pagination_box">
            <v-pagination
              v-if="noOfPages>1"
              v-model="currentPage"
              @change="changePage(currentPage)"
              :page-count="noOfPages"
              :disabled="loading"
              :classes="bootstrapPaginationClasses"
              :labels="paginationAnchorTexts"
            ></v-pagination>
          </div>-->
        </div>
        <Pagination
          :count="noOfPages"
          :current="parseInt($route.query.page || 1)"
          @change="changePage"
        />
      </div>
    </div>
    <!-- <RightSideBar /> -->
  </div>
</template>
<script>
import c from '~/mixins/c.js'
import { TITLE, DESCRIPTION, KEYWORDS, sharingLogo } from '~/config'
import { constructURL } from '~/lib/'
export default {
  mixins: [c],
  name: 'ProductListing',
  async asyncData({ params, query, $axios }) {
    let products = [],
      facets = [],
      fl = {},
      err = null,
      productCount = 0
    try {
      const q = params.q || null,
        qry = { ...query }
      if (q) qry.q = q
      const result = await $axios.$get('api/products/autocomplete', {
        params: { ...qry }
      })
      products = result.data
      productCount = result.count
      facets = result.facets.all_aggs
      Object.keys(qry).map(function(k, i) {
        if (qry[k] && !Array.isArray(qry[k]) && qry[k] != null && qry[k] != '')
          qry[k] = qry[k].split(',')
      })
      fl = qry // For selected filters
      return { products, productCount, facets, fl, err: null }
    } catch (e) {
      if (e && e.response && e.response.data) {
        err = e.response.data
      } else if (e && e.response) {
        err = e.response
      } else {
        err = e
      }
      console.log('err...', `${err}`)
      return { products, productCount, facets: [], fl: {}, err }
    }
  },
  methods: {
    async getData(query) {
      console.log('getData', query)
      try {
        this.loading = true
        const products = await this.$axios.$get('api/products/autocomplete', {
          params: { ...query }
        })
        this.productCount = products.count
        this.products = products.data
        this.facets = products.facets && products.facets.all_aggs
      } catch (e) {
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.chat-notification {
  display: flex;
  max-width: 24rem;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.chat-notification-logo-wrapper {
  flex-shrink: 0;
}
.chat-notification-logo {
  height: 3rem;
  width: 3rem;
}
.chat-notification-content {
  margin-left: 1.5rem;
  padding-top: 0.25rem;
}
.chat-notification-title {
  color: #1a202c;
  font-size: 1.25rem;
  line-height: 1.25;
}
.chat-notification-message {
  color: #718096;
  font-size: 1rem;
  line-height: 1.5;
}

.pagination {
  list-style-type: none !important;
  display: flex !important;
  padding-left: 0 !important;
  list-style: none !important;
  border-radius: 0.25rem !important;
}
.page-link {
  position: relative !important;
  display: block !important;
  padding: 0.5rem 0.75rem !important;
  margin-left: -1px !important;
  line-height: 1.25 !important;
  color: #007bff !important;
  background-color: #fff !important;
  border: 1px solid #dee2e6 !important;
}
.page-item.disabled .page-link {
  color: #6c757d !important;
  pointer-events: none !important;
  cursor: auto !important;
  background-color: #fff !important;
  border-color: #dee2e6 !important;
  height: 34px !important;
}
.page-item:first-child .page-link {
  margin-left: 0 !important;
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
}
.page-item.active .page-link {
  z-index: 1 !important;
  color: #fff !important;
  background-color: #007bff !important;
  border-color: #007bff !important;
}
</style>
