module.exports = {
  homeSidebar: [{

    Lightpaper: [
      "basics/lightpaper/introduction",
      "basics/lightpaper/overview",
      {
        Architecture: [
          "basics/lightpaper/architecture/architecture",
          "basics/lightpaper/architecture/posts-and-spaces",
          "basics/lightpaper/architecture/content-storage",
          "basics/lightpaper/architecture/identity",
          "basics/lightpaper/architecture/energy",
          "basics/lightpaper/architecture/user-owned-social-network",
          "basics/lightpaper/architecture/not-your-keys-not-your-data",
          "basics/lightpaper/architecture/applications",
          {
            Monetization: [
              "basics/lightpaper/architecture/monetization/tips",
              "basics/lightpaper/architecture/monetization/subscriptions",
              "basics/lightpaper/architecture/monetization/sell-or-rent-your-content",
              "basics/lightpaper/architecture/monetization/smart-contracts",
              "basics/lightpaper/architecture/monetization/sofi",
              "basics/lightpaper/architecture/monetization/social-tokens",
              "basics/lightpaper/architecture/monetization/stablecoins",
            ],
          },
          "basics/lightpaper/architecture/roles-and-permissions",
          "basics/lightpaper/architecture/moderation",
          "basics/lightpaper/architecture/spaces-as-DAOs",
          "basics/lightpaper/architecture/scalability",
          "basics/lightpaper/architecture/upgradability",
          "basics/lightpaper/architecture/customizability",
          "basics/lightpaper/architecture/cross-chain",
        ],
        Governance: [
          "basics/lightpaper/governance/governance",
          "basics/lightpaper/governance/treasury",
        ],
        "Looking beyond v1.0": [
          "basics/lightpaper/beyond-v1.0/looking-beyond-v1.0",
          "basics/lightpaper/beyond-v1.0/pay-per-view",
          "basics/lightpaper/beyond-v1.0/marketplace",
          "basics/lightpaper/beyond-v1.0/advanced-moderation",
          "basics/lightpaper/beyond-v1.0/split-reputation",
        ],
      },
    ],
    Tokenomics: [
      'basics/tokenomics/economics-vs-distribution',
      'basics/tokenomics/token-economics',
      'basics/tokenomics/token-distribution',
      'basics/tokenomics/treasury',
      'basics/tokenomics/parachain-vs-parathread',
      'basics/tokenomics/resources',
    ]
  },
    "basics/faq/overview",
    'basics/glossary/overview'
  ],
  tutorialsSidebar: [{
    'Getting Started': [
      {
        'Creating An Account': [
          "tutorials/getting-started/account-setup/talisman",
          "tutorials/getting-started/account-setup/substrate",
        ],
        'PolkaVerse': [
          "tutorials/getting-started/polkaverse/intro",
          "tutorials/getting-started/polkaverse/onboarding",
          "tutorials/getting-started/polkaverse/editing-your-profile",
          "tutorials/getting-started/polkaverse/creating-a-space",
          "tutorials/getting-started/polkaverse/making-a-post",
          "tutorials/getting-started/polkaverse/finding-content",
          "tutorials/getting-started/polkaverse/making-a-comment",
          "tutorials/getting-started/polkaverse/reacting-to-a-post",
          "tutorials/getting-started/polkaverse/sharing-a-post",
          "tutorials/getting-started/polkaverse/energy",
        ],
      },
    ],
  },
    "tutorials/mobile-tutorial",
    "tutorials/usernames",
  ],
  developSidebar: [
    {
      type: 'html',
      value: 'documentation',
      className: 'sidebar-title',
    },
    'develop/pre-requisite',
    'develop/overview',
    'develop/about-subsocial',
    'develop/developer-quickstart',
    'develop/developers',
    'develop/sdk-cheatsheet',
    'develop/playground',
    'develop/subsocial-graqhql',
    'develop/testnet',

    {
      type: 'html',
      value: 'Concepts',
      className: 'sidebar-title top-margin',
    },
    'develop/concepts/entities',
    'develop/concepts/spaces',
    'develop/concepts/profiles',
    'develop/concepts/postsAndComments',
    'develop/concepts/reactions',
    'develop/concepts/follows',
    'develop/concepts/usernames',
    'develop/concepts/entity-relations',
    {
      type: 'html',
      value: 'SDK APIs',
      className: 'sidebar-title top-margin',
    },
    'develop/sdk/installation',
    'develop/sdk/apiTypes',
    'develop/sdk/configuration',
    'develop/sdk/connectToSubsocial',
    'develop/sdk/transactions',
    {
      Profiles: [
        'develop/sdk/profiles/fetch-profiles',
        'develop/sdk/profiles/create-profiles'
      ],
      Spaces: [
        'develop/sdk/spaces/fetch-spaces',
        'develop/sdk/spaces/create-spaces'
      ],
      Posts: [
        'develop/sdk/posts/fetch-posts',
        'develop/sdk/posts/create-posts'
      ],
      Comments: [
        'develop/sdk/comments/fetch-comments',
        'develop/sdk/comments/create-comments'
      ],
      Reactions: [
        'develop/sdk/reactions/fetch-reactions',
        'develop/sdk/reactions/create-reactions'
      ],
      Follows: [
        'develop/sdk/follow/fetch-follow',
        'develop/sdk/follow/create-follow'
      ],
      Usernames: [
        'develop/sdk/usernames/fetch-usernames',
        'develop/sdk/usernames/register-usernames'
      ],
    },
    {
      type: 'html',
      value: ' ',
      className: 'top-margin',
    },
  ],
  announcementSidebar: [
    'announcements/announcements',
    'announcements/domains'
  ]
};
