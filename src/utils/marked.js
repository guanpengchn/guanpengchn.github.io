import marked from 'marked'
import 'highlight.js/styles/monokai-sublime.css'//这个样式有多种类型可选择

//  实例化
let rendererMD = new marked.Renderer()
// 在计算属性中，处理md的h1、h2，加上id值，并使用marked转成html
rendererMD.heading = function(text, level) {
  if (level < 3) {
    return `<a href="#${text}"><h${level} id="${text}">${text}</h${level}></a>`
  } else {
    return `<h${level}>${text}</h${level}>`
  }
}

marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})

let install = function(Vue){
    /* istanbul ignore if */
    if (install.installed) return
    Vue.directive('marked',{
      //注意，这儿得使用bind钩子函数，因为我们使用此指令主要是为了写文档，
      //文档里不会有变量且一次性生成,而update在自定义指令所在模板变化时就会重新执行，
      //会影响渲染文档的方法，所以不能使用update钩子，也不能使用函数简写
      bind:function(el){
        el.innerHTML = marked(el.innerText)
      }
    })
}
export default install