import js from '@eslint/js'
import eslintPluginImportX from 'eslint-plugin-import-x'

export default [
  js.configs.recommended,
  eslintPluginImportX.flatConfigs.recommended,
  {
    rules: {
      'comma-dangle': ['error', 'never'],
      'semi': ['error', 'never']
    }
  }
]