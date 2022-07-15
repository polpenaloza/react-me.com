/* eslint-disable no-template-curly-in-string */
module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    ['@semantic-release/github', { assets: [{ path: 'docs/CHANGELOG.md' }] }],
    '@semantic-release/git',
  ],
  branches: ['main'],
}
