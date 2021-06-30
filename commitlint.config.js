module.exports = {
    plugins: ['commitlint-plugin-function-rules'],
    rules: {
        'type-empty': [0],
        'subject-empty': [0],
        'type-enum': [0],
        'function-rules/type-enum': [
        2,
        'always',
        parsed => {
            /**
             * Matching examples:
             * @template **type/JIRATICKET-NUMBER: Message**
             * @example "fix/TOLO-666: In modal component fix title translation"
             * @example "refactor/NJI: change naming convention, add rules to eslint config file"
             */
            const headerRegex = /^(feat|(hot)?fix|build|ci|docs|refactor|revert|style|test|merge|bump)\/(([A-Z]+-[0-9]+)|(NJI)):\s.*(([\n\r])?.*){0,}$/

            /**
             * Match: bump/release-X.Y[.Z][: optional message]
             */
            const bumpHeaderRegex = /^(bump)\/(release-\d+\.\d+(\.\d+)?)(:\s.*)?/
            const isHeaderValid = parsed.header.match(headerRegex) || parsed.header.match(bumpHeaderRegex);
            if (isHeaderValid) {
                return [true]
            }

            return [false, `Your message must match these patterns:
                ${headerRegex}
                ${bumpHeaderRegex}

            Template: type/(JIRA-NUMBER|NJI|release-X.Y): your description
            Types: feat, hotfix, fix, build, ci, docs, refactor, revert, style, test, merge, bump

            Examples:
            # fix/TOLO-666: modal component - fix title translation
            # refactor/NJI: no jira issue example
            # bump/release-10.2: description in this case is optional
            # bump/release-10.2
            `]
        }
        ]
    }
};
