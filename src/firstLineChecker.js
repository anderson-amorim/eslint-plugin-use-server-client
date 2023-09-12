const firstLineChecker = (firstLineValue) => ({
  meta: {
    type: "layout",
    fixable: "code",
    schema: [{ enum: ["always", "never"] }],
    docs: {
      description: `Require '${firstLineValue}'; at the begining of files`,
      recommended: true,
    },
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    const firstLine = sourceCode.lines[0];
    return {
      Program(node) {
        if (!firstLine.includes(firstLineValue)) {
          context.report({
            node,
            message: `File should start with '${firstLineValue}';`,
            fix(fixer) {
              return fixer.insertTextAfterRange([0, 0], `'${firstLineValue}';\n`);
            },
          });
        }
      },
    };
  },
});

module.exports = firstLineChecker;
