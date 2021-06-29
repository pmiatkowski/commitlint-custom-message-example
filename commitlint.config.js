module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserOpts: {
        headerPattern: /^(\w*)\/(\w*)\s(.*)$/,
        headerCorrespondence: ['type', 'scope', 'subject'],
    },
    rules: {
        'type-enum': [2, 'always', ['foo']],
        'type-case': [2, 'always', ['lower-case']],
        'scope-enum': [2, 'always', []],
        'scope-case': [2, 'always', ['upper-case', 'kebab-case']],
        'scope-empty': [2, 'never'],
        'subject-case': [2, 'always', ['lower-case', 'sentence-case', 'start-case']],
        'subject-empty': [2, 'never'],
        'header-case': [1, 'always', ['lower-case']]
    }
};
