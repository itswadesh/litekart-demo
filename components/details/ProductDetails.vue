<template>
  <div class="w-full md:w-6/12 lg:w-7/12 p-2 md:pl-6">
    Details
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  props: {
    product: { type: Object }
  },
  computed: {
    calculateOffPercent() {
      let percent =
        ((this.product.variants[0].mrp - this.product.variants[0].price) *
          100) /
        this.product.variants[0].mrp;
      return Math.round(percent);
    },
    calculatePrice() {
      let price = 0;
      if (this.product.variants[0].price < this.product.variants[0].mrp) {
        price = this.product.variants[0].price;
      } else {
        price = this.product.variants[0].mrp;
      }
      return price;
    }
  },
  methods: {
    ...mapMutations(["setErr"]),
    showDescription() {
      this.productDescription = true;
      this.plusIcon = false;
      this.minusIcon = true;
    },
    hideDescription() {
      this.productDescription = false;
      this.plusIcon = true;
      this.minusIcon = false;
    },
    changeVariant(v) {
      this.selectedVariant = v;
    },
    go(url) {
      this.$router.push(url);
    },
    // async getReviews() {
    //   if (!this.product || !this.product._id) return;
    //   try {
    //     this.loading = true;
    //     let r = await this.$axios.$get("reviews/product/" + this.product._id);
    //     this.loading = false;
    //     this.publishRatings(r);
    //     this.reviews = r;
    //   } catch (err) {
    //     this.loading = false;
    //     this.error(err);
    //   }
    // },
    publishRatings(r) {
      let vm = this;
      let reviewCount = 0;
      let rating = {
        r5: 0,
        r4: 0,
        r3: 0,
        r2: 0,
        r1: 0,
        count: 0,
        total: 0,
        avg: 0
      };
      r.forEach(function(i) {
        if (i.message) reviewCount++;
        if (i.rating) rating.count++;
        if (i.rating) rating.total = rating.total + i.rating;
        if (i.rating == 5) rating.r5++;
        if (i.rating == 4) rating.r4++;
        if (i.rating == 3) rating.r3++;
        if (i.rating == 2) rating.r2++;
        if (i.rating == 1) rating.r1++;
      }, this);
      this.reviewCount = reviewCount;
      if (rating.count === 0) rating.avg = 0;
      else rating.avg = Math.round((rating.total / rating.count) * 10) / 10;
      this.rating = rating;
    },
    selectVariant(s) {
      this.selectedVariant = s;
      this.userSelectedVariant = s;
      this.selectedImgIndex = 0;
    },
    selectImg(ix) {
      this.selectedImgIndex = ix;
    },
    afterImageLoaded(component) {},
    error(err) {
      this.setError(err.err);
    },
    clearRecentItems() {
      this.RecentlyViewedProducts = [];
    }
  }
};
</script>

<style>
</style>