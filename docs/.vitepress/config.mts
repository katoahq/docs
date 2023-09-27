import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "Katoa",
  description: "Katoa - Pipeline written in TypeScript",
  base: '/docs/',
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    logo: '/favicon.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Guides', link: '/guides/pipelines-jobs-steps' },
      { text: 'Reference', link: '/reference/cli' },
      { text: 'Other', link: '/support' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        link: '/getting-started',
      },
      {
        text: 'Guides',
        items: [
          { text: 'Pipelines, Jobs and Steps', link: '/guides/pipelines-jobs-steps' },
          { text: 'Create a Pipeline', link: '/guides/create-pipeline' },
          { text: 'Edit a Pipeline', link: '/guides/edit-pipeline' },
          { text: 'Test a Pipeline', link: '/guides/test-pipeline' },
          { text: 'Secrets', link: '/guides/secrets' },
          { text: 'Autocomplete', link: '/guides/autocomplete' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Starter', link: '/guides/pipeline-examples/starter' },
          { text: 'Node', link: '/guides/pipeline-examples/node' },
          { text: 'Jest', link: '/guides/pipeline-examples/jest' },
          { text: 'Rust', link: '/guides/pipeline-examples/rust' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'CLI', link: '/reference/cli' },
          { text: 'SDK', link: '/reference/sdk' },
        ],
      },
      {
        text: 'Other',
        items: [
          { text: 'Support', link: '/support' },
          { text: 'FAQ', link: '/faq' },
          { text: 'Roadmap', link: '/roadmap' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/katoahq' },
      { icon: 'discord', link: 'https://discord.gg/7qNBeGmB5A' },
    ]
  }
})
