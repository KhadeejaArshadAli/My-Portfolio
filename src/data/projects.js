// Update storeLinks with your live App Store / Play Store URLs when available.
const projects = [
  {
    id: 'petscareplus',
    name: 'PetsCarePlus',
    tagline: 'Mobile service marketplace connecting pet owners with grooming professionals',
    highlights: [
      'Architected a dual-sided marketplace with provider and user registration flows',
      'Built real-time provider-to-user chat infrastructure',
      'Integrated production-ready Stripe payment processing',
    ],
    tech: ['React Native', 'Stripe', 'Real-time Chat', 'Marketplace'],
    storeLinks: {
      appStore: 'https://apps.apple.com/app/petscare-plus/id6754699457PetsCare Plus',
      playStore: 'https://play.google.com/store/apps/details?id=com.blitzapp.petscare',
    },
    nda: false,
  },
  {
    id: 'joyfulbooks',
    name: 'JoyfulBooks',
    tagline: 'Subscription-based parenting platform with controlled social features',
    highlights: [
      'Developed a controlled social ecosystem for parents',
      'Integrated Unity-based educational games into the native mobile shell',
      'Engineered RevenueCat subscription tiers and recurring billing',
    ],
    tech: ['React Native', 'RevenueCat', 'Unity', 'Subscriptions'],
    storeLinks: {
      appStore: '',
      playStore: '',
    },
    nda: true,
  },
  {
    id: 'finalpassdown',
    name: 'FinalPassDown',
    tagline: 'Secure document vault for legacy planning and end-of-life preparedness',
    highlights: [
      'Built high-integrity mobile document storage focused on legacy planning',
      'Implemented secure encryption workflows for sensitive documents',
      'Designed automatic document transition to beneficiaries',
    ],
    tech: ['React Native', 'Encryption', 'Secure Storage', 'Document Vault'],
    storeLinks: {
      appStore: 'https://apps.apple.com/us/app/final-pass-down/id6745409619/Final Pass Down',
      playStore: 'https://play.google.com/store/apps/details?id=com.blitzapp.finalpassdown&pcampaignid=web_share',
    },
    nda: false,
  },
  {
    id: 'white-label-clubs',
    name: 'White-Label Club Apps',
    tagline: 'Multi-tenant Expo apps with dynamic branding for multiple clients',
    highlights: [
      'Engineered a config-driven multi-tenant branding system using Expo',
      'Built a custom CLI (npm run switch) to hot-swap logos, icons, splash screens, and theme colors',
      'Shipped push notifications and Stripe payments across client deployments',
    ],
    tech: ['Expo', 'React Native', 'Stripe', 'Multi-tenant', 'CLI'],
    storeLinks: {
      appStore: '',
      playStore: '',
    },
    nda: true,
  },
  { 
    id: 'venturedive@ethr',
    name: 'Ethr Preview',
    tagline: 'Interactive UI playground and live documentation app for the @ethr/ui component library',
    highlights: [
      'Contributed to an interactive UI documentation environment allowing developers to visually preview component states',
      'Engineered dynamic toggle controls enabling real-time switching of component states (e.g., Title On/Off, Subtitle On/Off)',
      'Developed a live visual preview canvas that instantly renders code modifications and provides copy-pasteable React Native source code',
    ],
    tech: ['React Native', 'TypeScript', 'Component Library', 'UI Playground', 'State Management'],
    storeLinks: {
      appStore: '', // Internal tooling or company testing link if applicable
      playStore: '',
    },
    nda: true, // Marking as true since it uses VentureDive's proprietary library
  }
  
]

export default projects
