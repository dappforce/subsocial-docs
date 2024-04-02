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
          "basics/lightpaper/architecture/signer",
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
      'basics/lightpaper/resources',
    ],
    Tokenomics: [
      'basics/tokenomics/economics-vs-distribution',
      'basics/tokenomics/token-economics',
      'basics/tokenomics/token-distribution',
      'basics/tokenomics/treasury',
    ],
    Grill: [
      'basics/grill/hot-posts',
    ],
  },
    'basics/content-staking/content-staking',
    'basics/faq/overview',
    'basics/glossary/overview'
  ],
  tutorialsSidebar: [
    {
      'How Do I Get SUB?': [
        "tutorials/GetSUB/get-sub",
        "tutorials/GetSUB/mexc",
        "tutorials/GetSUB/hydradx",
        "tutorials/GetSUB/stellaswap",
      ]
    },
    "tutorials/creator-rewards",
    "tutorials/mobile-tutorial",
    "tutorials/usernames",
    "tutorials/grill-faq",
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
    'develop/developers',
    'develop/developer-quickstart',
    'develop/sdk-cheatsheet',
    'develop/playground',
    'develop/subsocial-graqhql',
    {
      'Network Configurations': [
        'develop/testnet',
        'develop/mainnet',
        'develop/xSocial'
      ]
    },

    {
      type: 'html',
      value: 'Grill Chat',
      className: 'sidebar-title top-margin',
    },
    'develop/grill-chat/getting-started',
    'develop/grill-chat/setup',
    'develop/grill-chat/integration',
    'develop/grill-chat/extensions',
    'develop/grill-chat/wordpress',

    {
      type: 'html',
      value: 'Zero to Hero',
      className: 'sidebar-title top-margin',
    },
    {
      'Creating Grill Extensions': [
        'develop/zero-to-hero/extension/overview',
        'develop/zero-to-hero/extension/setup',
        'develop/zero-to-hero/extension/schema',
        'develop/zero-to-hero/extension/modal',
        'develop/zero-to-hero/extension/registry',
      ]
    },
    {
      'Twitter Dapp': [
        'develop/zero-to-hero/twitter-dapp/introduction',
        'develop/zero-to-hero/twitter-dapp/creating-project',
        'develop/zero-to-hero/twitter-dapp/styling',
        'develop/zero-to-hero/twitter-dapp/login-screen',
        'develop/zero-to-hero/twitter-dapp/home-screen-ui',
        'develop/zero-to-hero/twitter-dapp/creating-tweet',
        'develop/zero-to-hero/twitter-dapp/fetching-tweet',
        'develop/zero-to-hero/twitter-dapp/like-tweet',
        'develop/zero-to-hero/twitter-dapp/finish-app',

      ]
    },


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
    'develop/concepts/storage',
    'develop/concepts/entity-relations',
    'develop/concepts/sponsored/energy',
    {
      'Synthetic Concepts': [
        'develop/concepts/synthetic/overview',
        'develop/concepts/synthetic/activities',
        'develop/concepts/synthetic/feeds',
        'develop/concepts/synthetic/notifications',
      ]
    },
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
      Roles: [
        'develop/sdk/roles/fetch-roles',
        'develop/sdk/roles/create-roles'
      ],
    },
    'develop/sdk/energy',
    'develop/sdk/subsocial-utils',
    {
      type: 'html',
      value: ' ',
      className: 'top-margin',
    },
  ],
};
