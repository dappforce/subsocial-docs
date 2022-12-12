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
    'develop/pre-requisite',
    'develop/overview',
    {
      'Getting Started': [
        'develop/getting-started/introduction',
        {
          'Blockchain Structure': [
              'develop/getting-started/blockchain-structure/entities',
              'develop/getting-started/blockchain-structure/spaces',
              'develop/getting-started/blockchain-structure/profiles',
              'develop/getting-started/blockchain-structure/postsAndComments',
              'develop/getting-started/blockchain-structure/reactions',
              'develop/getting-started/blockchain-structure/follows',
              'develop/getting-started/blockchain-structure/usernames',
              'develop/getting-started/blockchain-structure/overallInteraction',
          ],
        },
        'develop/getting-started/testnet',
      ],
      'How-to-Guides': [
        'develop/how-to-guides/installation',
        'develop/how-to-guides/apiTypes',
        'develop/how-to-guides/configuration',
        'develop/how-to-guides/connectToSubsocial',
        'develop/how-to-guides/transactions',
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
          Usernames: [
            'develop/how-to-guides/usernames/fetch-usernames',
            'develop/how-to-guides/usernames/register-usernames'
          ],
        }
      ]
    },
    'develop/quick-reference',
    'develop/developers',
    'develop/playground',
  ],
  announcementSidebar: [
    'announcements/announcements',
    'announcements/domains'
  ]
};
