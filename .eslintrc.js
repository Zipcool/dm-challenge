module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "@vue/standard"
    ],
    parserOptions: {
        parser: "babel-eslint"
    },
    plugins: [
        "vue"
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "curly": ["error", "all"],
        "indent": ["error", 4, { 
            "SwitchCase": 1 
        }],
        "keyword-spacing": ["error", { 
            "before": true, 
            "after": true 
        }],
        "quotes": ["error", "double"],
        "semi": ["error", "never"],
        "space-before-function-paren": ["error", "never"],
        "vue/html-indent": ["error", 4]
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            }
        }
    ]
}
