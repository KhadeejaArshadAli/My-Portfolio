const services = [
  {
    id: 'greenfield',
    title: 'Greenfield React Native Apps',
    description: 'Full-cycle mobile development from design handoff to App Store and Google Play launch using Expo and React Native.',
    outcomes: [
      'Cross-platform iOS and Android from a single codebase',
      'Scalable architecture with Redux or Context API',
      'Production-ready code with high test coverage',
    ],
  },
  {
    id: 'monetization',
    title: 'Monetization & Payments',
    description: 'Revenue systems that convert — subscriptions, in-app purchases, and secure payment flows.',
    outcomes: [
      'Stripe and RevenueCat integration',
      'Multi-tier subscription models and IAP workflows',
      'MRR-focused billing architecture',
    ],
  },
  {
    id: 'white-label',
    title: 'White-Label / Multi-Tenant Apps',
    description: 'One codebase, many brands — config-driven apps for agencies and product studios.',
    outcomes: [
      'Dynamic asset and theme switching per client',
      'Custom CLI tooling for rapid client onboarding',
      'Reduced development overhead for multi-client distribution',
    ],
  },
  {
    id: 'deployment',
    title: 'App Store & Play Store Deployment',
    description: 'End-to-end release management so your app ships on schedule.',
    outcomes: [
      'App Store and Google Play submission pipelines',
      'TestFlight and internal testing workflows',
      'Push notification setup and production hardening',
    ],
  },
]

export const processSteps = [
  { step: 1, title: 'Discovery Call', description: 'Understand your product, users, and timeline' },
  { step: 2, title: 'Scope & Timeline', description: 'Fixed milestones, deliverables, and weekly check-ins' },
  { step: 3, title: 'Build', description: 'Iterative development with async updates and demos' },
  { step: 4, title: 'TestFlight / QA', description: 'Internal testing and bug fixes before launch' },
  { step: 5, title: 'Store Launch', description: 'App Store and Google Play submission and release' },
]

export default services
