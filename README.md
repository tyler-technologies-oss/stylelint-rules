## Tyler Stylelint Rules

This repository contains default rules to provide to `stylelint` when compiling Sass files.

## Usage

Install the latest package:

```bash
$ npm install -D $tylertech/stylelint-rules
```

Create a new `.stylelintrc` file in the root of your project and provide the default configuration:

```json
{
  "extends": "@tylertech/stylelint-rules"
}
```

> Rules can be overridden as needed by specifying the rule and value as you would usually for stylelint.
