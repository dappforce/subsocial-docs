module.exports = {
  homeSidebar: {
    Basics: [
      {
        Lightpaper: [
          "basics/lightpaper/introduction",
          "basics/lightpaper/overview",
          {
            Architecture: [
              "basics/lightpaper/architecture/architecture",
              "basics/lightpaper/architecture/posts-and-spaces",
              "basics/lightpaper/architecture/identity",
              "basics/lightpaper/architecture/user-owned-social-network",
              "basics/lightpaper/architecture/not-your-keys-not-your-data",
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
        ],
      },
      "basics/faq/overview",
      'basics/glossary/overview'
    ],
    SDK: [
      {
        'Overview': [
          'sdk/overview/intro',
          'sdk/overview/installation',
          'sdk/overview/thebasics',
        ],
        'Quick Start': [
          'sdk/quick-start/intro',
          'sdk/quick-start/connection',
          'sdk/quick-start/transactions',
          'sdk/quick-start/parts',
          {
            'Profiles': [
              'sdk/quick-start/profiles/getting-profiles',
              'sdk/quick-start/profiles/creating-profiles',
            ],
            'Spaces': [
              'sdk/quick-start/spaces/getting-spaces',
              'sdk/quick-start/spaces/creating-spaces',
            ],
            'Posts': [
              'sdk/quick-start/posts/getting-posts',
              'sdk/quick-start/posts/creating-posts',
              'sdk/quick-start/posts/posts-with-details',
            ],
            'Comments (Replies)': [
              'sdk/quick-start/comments/getting-comments',
              'sdk/quick-start/comments/creating-comments',
            ],
            'Reactions': [
              'sdk/quick-start/reactions/getting-reactions',
              'sdk/quick-start/reactions/creating-reactions',
            ],
            'Follows': [
              'sdk/quick-start/follow/getting-follow',
              'sdk/quick-start/follow/following',
            ]
          }
        ]
      },
      {
        'Advanced': [
          'sdk/advanced/intro',
          'sdk/advanced/profiles',
          'sdk/advanced/spaces',
          'sdk/advanced/posts',
        ]
      },
    ],
  },
  tutorialsSidebar: [{
    'Getting Started': [
      {
        'Creating An Account': [
          "tutorials/getting-started/account-setup/polkadot-js",
          "tutorials/getting-started/account-setup/creating-an-account",
          "tutorials/getting-started/account-setup/substrate",
        ],
        'Using The Subsocial Web App': [
          "tutorials/getting-started/our-web-app/intro",
          "tutorials/getting-started/our-web-app/setting-up-your-profile",
          "tutorials/getting-started/our-web-app/creating-your-first-space",
          "tutorials/getting-started/our-web-app/making-a-post",
          "tutorials/getting-started/our-web-app/finding-content",
          "tutorials/getting-started/our-web-app/making-a-comment",
          "tutorials/getting-started/our-web-app/reacting-to-a-post",
          "tutorials/getting-started/our-web-app/sharing-a-post",
        ],
      },
    ],
  },
    "tutorials/mobile-tutorial",
    "tutorials/dotsama-domains",
  ]
};
