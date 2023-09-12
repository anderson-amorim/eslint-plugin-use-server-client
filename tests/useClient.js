const rule = require("../useClient");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("use-client", rule, {
  valid: [{ filename: "test.tsx", code: "'use client';" }],
  invalid: [
    {
      filename: "test.tsx",
      code: "// some comment",
      errors: [{ message: "File should start with 'use client';" }],
      output: "'use client';\n// some comment",
    },
    {
      filename: "test.tsx",
      code: "",
      errors: [{ message: "File should start with 'use client';" }],
      output: "'use client';\n",
    },
  ],
});
