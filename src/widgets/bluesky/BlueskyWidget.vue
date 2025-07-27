<script setup lang="ts">
import { AtpAgent } from '@atproto/api'

const agent = new AtpAgent(
  {
    service: 'https://public.api.bsky.app'
  })

interface FeedPost {
  createdAt?: string
  text?: string
}

const feedPosts: FeedPost | undefined = await agent.getAuthorFeed(
  {
    actor: 'pdxchambers.com',
    limit: 1
  }
).then(response => {
  console.log('Author Feed:', response.data)
  return response.data.feed[0].post.record
}
).catch(error => {
  console.error('Error fetching author feed:', error)
  return undefined
}
)

const formatDate = (dateString: string | undefined): string => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <div class="bluesky-widget">
    <div class="bluesky-widget__header">
      <h2>Bluesky</h2>
      <span class="bluesky-widget__meta">Posted to <a href="https://bsky.app/profile/pdxchambers.com">Bluesky</a> on {{
        formatDate(feedPosts?.createdAt) }}</span>
    </div>
    <div class="bluesky-widget__text">
      {{ feedPosts?.text }}
    </div>
  </div>
</template>

<style scoped>
.bluesky-widget {
  background-color: var(--color-accent-bg);
  border-radius: var(--base-border-radius);
  padding: var(--base-padding);
  max-width: 300px;
  margin: var(--base-margin) auto;
}

.bluesky-widget__header {
  text-align: center;
  margin-bottom: var(--base-margin);
}

.bluesky-widget__meta {
  font-size: 12px;
  margin-bottom: var(--base-margin);
  padding: var(--base-padding);
}

.bluesky-widget__header h2 {
  border-bottom: thin solid var(--color-accent);
}

.bluesky-widget__text {
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-accent-text);
  border: thin solid var(--color-accent);
  border-radius: var(--base-border-radius);
  padding: var(--base-padding);
}

a {
  color: var(--color-accent-text);
  text-decoration: none;
  padding: var(--base-padding) 0;
}

@media (min-width: 576px) {
  .bluesky-widget {
    margin: 0 auto;;
  }
}
</style>
