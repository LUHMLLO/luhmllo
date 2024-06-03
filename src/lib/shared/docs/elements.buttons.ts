export const elements = [
    {
        alias: 'buttons',
        tagName: 'button',
        summary: [
            {
                name: '.__outlined',
                description:
                    'class acts as variant for the parent element base styling.',
            },

            {
                name: '.__lead / .__trail',
                description:
                    'classes are optional but required if one wishes to apply optical corrections to the parent element.',
            },
        ],
        snippets: [
            {
                styles: [ '', '__outlined' ],
                templates: [
                    `
                        <ly-icon class='__lead'>
                            add
                        </ly-icon>
                        <span>
                            text
                        </span>
                    `,
                    `
                        <ly-icon class='__lead'>
                            add
                        </ly-icon>
                        <span>
                            text
                        </span>
                    `,
                ],
            },
        ],
    },
]
