<template>
  <header-section></header-section>
  <categories-section/>
  <featured-explores-section/>
  <latest-posts-sections/>
</template>

<script>
// @ is an alias to /src

import HeaderSection from "@/sections/HeaderSection";
import CategoriesSection from "@/sections/CategoriesSection";
import FeaturedExploresSection from "@/sections/FeaturedExploresSection"
import LatestPostsSections from "@/sections/LatestPostsSections";

export default {
  name: 'Home',
  components: {
    HeaderSection,
    CategoriesSection,
    FeaturedExploresSection,
    LatestPostsSections,

  }
}
</script>
