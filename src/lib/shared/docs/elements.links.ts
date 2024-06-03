export const links = {
    name: 'A (link)',
    details: [
        {
            name: '.__button',
            description:
                'class acts as variant for the parent element base styling.',
        },
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
    examples: [
        {
            name: 'default',
            tagName: 'a',
            scenarios: [
                {
                    leadInner: '',
                    leadTagName: '',
                    leadModifiers: '',

                    contentInner: 'text',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: '',
                    trailTagName: '',
                    trailModifiers: '',

                    parentModifiers: ''
                },
                {
                    leadInner: '',
                    leadTagName: '',
                    leadModifiers: '',

                    contentInner: '.__button',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: '',
                    trailTagName: '',
                    trailModifiers: '',

                    parentModifiers: '__button'
                },
                {
                    leadInner: '',
                    leadTagName: '',
                    leadModifiers: '',

                    contentInner: '.__button.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: '',
                    trailTagName: '',
                    trailModifiers: '',

                    parentModifiers: '__button __outlined'
                }
            ]
        },
        {
            name: '.__lead',
            tagName: 'a',
            scenarios: [
                {
                    leadInner: 'add',
                    leadTagName: 'ly-icon',
                    leadModifiers: '__lead',

                    contentInner: 'text',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: '',
                    trailTagName: '',
                    trailModifiers: '',

                    parentModifiers: ''
                },
                {
                    leadInner: 'add',
                    leadTagName: 'ly-icon',
                    leadModifiers: '__lead',

                    contentInner: '.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: '',
                    trailTagName: '',
                    trailModifiers: '',

                    parentModifiers: '__outlined'
                },
                {
                    leadInner: 'A',
                    leadTagName: 'figure',
                    leadModifiers: '__lead bg-primary place-center',

                    contentInner: '.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: '',
                    trailTagName: '',
                    trailModifiers: '',

                    parentModifiers: '__outlined'
                }
            ]
        },
        {
            name: '.__trail',
            tagName: 'a',
            scenarios: [
                {
                    leadInner: '',
                    leadTagName: '',
                    leadModifiers: '',

                    contentInner: 'text',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'add',
                    trailTagName: 'ly-icon',
                    trailModifiers: '__trail',

                    parentModifiers: ''
                },
                {
                    leadInner: '',
                    leadTagName: '',
                    leadModifiers: '',

                    contentInner: '.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'add',
                    trailTagName: 'ly-icon',
                    trailModifiers: '__trail',

                    parentModifiers: '__outlined'
                },
                {
                    leadInner: '',
                    leadTagName: '',
                    leadModifiers: '',

                    contentInner: '.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'A',
                    trailTagName: 'figure',
                    trailModifiers: '__trail bg-primary place-center',

                    parentModifiers: '__outlined'
                }
            ]
        },
        {
            name: '.__lead / .__trail',
            tagName: 'a',
            scenarios: [
                {
                    leadInner: 'add',
                    leadTagName: 'ly-icon',
                    leadModifiers: '__lead',

                    contentInner: 'text',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'add',
                    trailTagName: 'ly-icon',
                    trailModifiers: '__trail',

                    parentModifiers: ''
                },
                {
                    leadInner: 'add',
                    leadTagName: 'ly-icon',
                    leadModifiers: '__lead',

                    contentInner: '.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'add',
                    trailTagName: 'ly-icon',
                    trailModifiers: '__trail',

                    parentModifiers: '__outlined'
                },
                {
                    leadInner: 'A',
                    leadTagName: 'figure',
                    leadModifiers: '__lead bg-primary place-center',

                    contentInner: '.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'A',
                    trailTagName: 'figure',
                    trailModifiers: '__trail bg-primary place-center',

                    parentModifiers: '__outlined'
                }
            ]
        },
        {
            name: 'no .__lead / no .__trail',
            tagName: 'a',
            scenarios: [
                {
                    leadInner: 'add',
                    leadTagName: 'ly-icon',
                    leadModifiers: '',

                    contentInner: 'text',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'add',
                    trailTagName: 'ly-icon',
                    trailModifiers: '',

                    parentModifiers: ''
                },
                {
                    leadInner: 'add',
                    leadTagName: 'ly-icon',
                    leadModifiers: '',

                    contentInner: '.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'add',
                    trailTagName: 'ly-icon',
                    trailModifiers: '',

                    parentModifiers: '__outlined'
                },
                {
                    leadInner: 'A',
                    leadTagName: 'figure',
                    leadModifiers: 'bg-primary place-center',

                    contentInner: '.__outlined',
                    contentTagName: 'span',
                    contentModifiers: '',

                    trailInner: 'A',
                    trailTagName: 'figure',
                    trailModifiers: 'bg-primary place-center',

                    parentModifiers: '__outlined'
                }
            ]
        },
    ]
}