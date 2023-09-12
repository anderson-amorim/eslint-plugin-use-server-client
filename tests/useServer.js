const rule = require("../useServer");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("use-server", rule, {
  valid: [{ filename: "test.tsx", code: "'use server';" }],
  invalid: [
    {
      filename: "test.tsx",
      code: "// some comment",
      errors: [{ message: "File should start with 'use server';" }],
      output: "'use server';\n// some comment",
    },
    {
      filename: "test.tsx",
      code: "",
      errors: [{ message: "File should start with 'use server';" }],
      output: "'use server';\n",
    },
  ],
});
