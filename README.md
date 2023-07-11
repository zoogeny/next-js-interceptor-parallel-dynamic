### Verify canary release

- [X] I verified that the issue exists in the latest Next.js canary release

### Provide environment information

```bash
Operating System:
      Platform: darwin
      Arch: x64
      Version: Darwin Kernel Version 22.5.0: Thu Jun  8 22:22:22 PDT 2023; root:xnu-8796.121.3~7/RELEASE_X86_64
    Binaries:
      Node: 18.16.1
      npm: 9.8.0
      Yarn: 1.22.19
      pnpm: N/A
    Relevant Packages:
      next: 13.4.10-canary.3
      eslint-config-next: 13.4.9
      react: 18.2.0
      react-dom: 18.2.0
      typescript: 5.1.6
    Next.js Config:
      output: N/A
```


### Which area(s) of Next.js are affected? (leave empty if unsure)

App Router

### Link to the code that reproduces this issue or a replay of the bug

https://github.com/zoogeny/next-js-interceptor-parallel-dynamic

### To Reproduce

Checkout, install the project and run the dev server

```bash
git checkout https://github.com/zoogeny/next-js-interceptor-parallel-dynamic.git   
cd next-js-interceptor-parallel-dynamic
npm install
npm run dev
```

Load a page in the blog (e.g. http://localhost:3000/blog/first-post) and you will see a basic interface:

```
params.slug: first-post
Same dir
Nested dir
```

If you click the `Nested dir` link you will correctly get a parallel slot rendered below the links with a red border. If you click within the border the slot will be removed.

If you click the `Same dir` link you will navigate the entire page. This is not expected - it should be intercepted and render inside the parallel slot.

### Describe the Bug

It appears that  interception of routes within the same directory does not work. e.g. I have a directory structure as follows:

```
app
  /blog
    /[slug]
      page.tsx
    /@modal
      /(.)[slug]
        page.tsx
      /(.)summary
        /[slug]
          page.tsx
      default.tsx
    layout.tsx
    page.tsx
```

While I am on the `blog/some-page` page I _can_ intercept `<Link>` to `blog/summary/another-page` but I _cannot_ intercept `<Link>` to `blog/another-page`.

### Expected Behavior

When on a page `blog/some-page` I would expect to be able to intercept `<Link>` to `blog/another-page` using a folder at `blog/@modal/(.)[slug]`.

The purpose of this is to show summary modals for blog entries without navigating away from the current page.

### Which browser are you using? (if relevant)

_No response_

### How are you deploying your application? (if relevant)

_No response_
