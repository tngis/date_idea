import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import mila from 'markdown-it-link-attributes'

const markdownit = new MarkdownIt({
  html: false,
  linkify: true,
  xhtmlOut: false,
  breaks: false,
})

export default defineNuxtPlugin(() => {
  markdownit.use(mila, { attrs: { target: '_blank', rel: 'noopener', className: 'link-class' } }).use(markdownItAttrs)
  return {
    provide: {
      mdit: markdownit,
    },
  }
})
