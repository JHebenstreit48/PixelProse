import { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

const Basics: Subpage = {
  name: 'Basics',
  subpages: [
    {
      name: 'iOS Fundamentals',
      subpages: [
        {
          name: 'Platform Overview',
          path: '/mobile/platforms/basics/ios/overview'
        },
        {
          name: 'Devices & OS Versions',
          path: '/mobile/platforms/basics/ios/devices-os'
        },
        {
          name: 'Build Targets & Architectures',
          path: '/mobile/platforms/basics/ios/targets-architectures'
        }
      ]
    },
    {
      name: 'Android Fundamentals',
      subpages: [
        {
          name: 'Platform Overview',
          path: '/mobile/platforms/basics/android/overview'
        },
        {
          name: 'Device Fragmentation',
          path: '/mobile/platforms/basics/android/fragmentation'
        },
        {
          name: 'APK vs AAB',
          path: '/mobile/platforms/basics/android/apk-vs-aab'
        }
      ]
    },
    {
      name: 'Core Store Concepts',
      subpages: [
        {
          name: 'Main Stores (App Store / Play)',
          path: '/mobile/platforms/basics/stores/main-stores'
        },
        {
          name: 'Basic Submission Flow',
          path: '/mobile/platforms/basics/stores/submission-flow'
        }
      ]
    }
  ]
};

export default Basics;