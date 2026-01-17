---
title: Resources
description: Guides, tutorials, and best practices to help you build amazing AI agents with Seashore.
---

# Resources

Explore our comprehensive collection of guides, tutorials, and best practices to help you build amazing AI agents with Seashore.

<script setup>
import { resources } from './.vitepress/theme/lib/config'
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <ResourceCard
    v-for="resource in resources"
    :key="resource.id"
    v-bind="resource"
  />
</div>
