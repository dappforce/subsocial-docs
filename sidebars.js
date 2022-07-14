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
              "basics/lightpaper/architecture/content-storage",
              "basics/lightpaper/architecture/identity",
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
        ],
      },
      "basics/faq/overview",
      'basics/glossary/overview'
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
  ],
  developSidebar: [
    'develop/pre-requisite',
    'develop/overview',
    {
      'Getting Started': [
        'develop/getting-started/introduction',
        'develop/getting-started/installation',
        'develop/getting-started/apiTypes',
        'develop/getting-started/testnet',
      ],
      'How-to-Guides': [
        'develop/how-to-guides/connectToSubsocial',
        'develop/how-to-guides/transactions',
        'develop/how-to-guides/structures',
        {
          Profiles: [
            'develop/how-to-guides/profiles/fetch-profiles',
            'develop/how-to-guides/profiles/create-profiles'
          ],
          Spaces: [
            'develop/how-to-guides/spaces/fetch-spaces',
            'develop/how-to-guides/spaces/create-spaces'
          ],
          Posts: [
            'develop/how-to-guides/posts/fetch-posts',
            'develop/how-to-guides/posts/create-posts'
          ],
          Comments: [
            'develop/how-to-guides/comments/fetch-comments',
            'develop/how-to-guides/comments/create-comments'
          ],
          Reactions: [
            'develop/how-to-guides/reactions/fetch-reactions',
            'develop/how-to-guides/reactions/create-reactions'
          ],
          Follows: [
            'develop/how-to-guides/follow/fetch-follow',
            'develop/how-to-guides/follow/create-follow'
          ],
        }
      ]
    },
    'develop/quick-reference',
    'develop/developers',
  ],
  announcementSidebar: [
    'announcements/announcements',
    'announcements/domains'
  ]
};
