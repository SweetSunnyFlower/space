module.exports = {
  git: {
    tag: true,
    requireBranch: 'main',
    commitMessage: 'release: sweetsunnyflower.space ${version}'
  },
  npm: {
    publish: false
  },
  plugins: {
    '@release-it/conventional-changelog': {
      infile: 'CHANGELOG.md',
      header: '# 📋 CHANGELOG',
      ignoreRecommendedBump: true,
      preset: {
        name: 'conventionalcommits',
        types: [
          { type: 'feat', section: '✨ Features' },
          { type: 'fix', section: '🐛 Bug Fixes' },
          { type: 'perf', section: '⚡ Performance Improvements' },
          { type: 'revert', section: '⏪ Reverts' },
          { type: 'chore', section: '📦 Chores' },
          { type: 'docs', section: '📝 Documentation' },
          { type: 'style', section: '💄 Styles', hidden: true },
          { type: 'refactor', section: '♻ Code Refactoring' },
          { type: 'test', section: '✅ Tests' },
          { type: 'build', section: '👷‍ Build System' },
          { type: 'ci', section: '🔧 Continuous Integration' }
        ]
      }
    }
  }
}
