const config = {
  plugins: [
    {
      postcssPlugin: "fix-tailwind-base",
      Once(root, { result }) {
        if (root.source?.input?.file) {
          result.opts.from = root.source.input.file;
        }
      },
    },
    "@tailwindcss/postcss",
  ],
};

export default config;
