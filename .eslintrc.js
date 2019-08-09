module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'eslint-config-alloy/react',
        'eslint-config-alloy/typescript',
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        '@typescript-eslint/indent': [
            'error',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2]
    }
};