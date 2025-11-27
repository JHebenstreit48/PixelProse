import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Advanced: Subpage = {
  name: 'Advanced',
  subpages: [
    {
      name: 'Platform Compliance',
      subpages: [
        {
          name: 'iOS Review Edge Cases',
          path: '/mobile/platforms/advanced/compliance/ios-review-edge-cases'
        },
        {
          name: 'Play Store Policies',
          path: '/mobile/platforms/advanced/compliance/play-policies'
        }
      ]
    },
    {
      name: 'Store Strategy',
      subpages: [
        {
          name: 'App Store Optimization (ASO)',
          path: '/mobile/platforms/advanced/store-strategy/aso'
        },
        {
          name: 'Regionalization & Alt Stores',
          path: '/mobile/platforms/advanced/store-strategy/regions-alt-stores'
        }
      ]
    },
    {
      name: 'Platform Services',
      subpages: [
        {
          name: 'Game Center & iCloud',
          path: '/mobile/platforms/advanced/platform-services/game-center-icloud'
        },
        {
          name: 'Google Play Games & Services',
          path: '/mobile/platforms/advanced/platform-services/play-games-services'
        }
      ]
    }
  ]
};

export default Advanced;