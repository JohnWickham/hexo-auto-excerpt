## hexo-auto-excerpt

Hexo supports excerpts by adding <!-- more --> tag. You can automate this by using hexo-auto-excerpt plugin.

This fork creates excerpts by trimming post content to the given number of characters, `excerpt_length`, without trimming words in the process.

### Install

```sh
npm install --save hexo-auto-excerpt
```

### Option

excerpt_length: 350 (number of characters)

default length is 300, if not specified.