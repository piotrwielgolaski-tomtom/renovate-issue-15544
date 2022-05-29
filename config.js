module.exports = {
    platform: 'github',
    onboarding: false,
    requireConfig: 'optional',
    dryRun: 'full',
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: ['piotrwielgolaski-tomtom/renovate-issue-15544'],
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    packageRules: [
        {
            matchManagers: ["maven"],
            enabled: false
        },
        {
            matchDepTypes: ['optional'], // define here option to filter only maven optional dependency
            enabled: true
        }
    ]
};
