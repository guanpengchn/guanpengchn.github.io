import marked from 'marked'

const convertMarkdownBody = body => replaceMarkdownCode(marked(body))

const replaceMarkdownCode = (body) => {
  return body.replace(
    /(<pre><code.*?>)((.|\n)*?\*{3}(.*)\*{3}.*)?\n?((.|\n)*?<\/pre>)/g,
    '<figure class="pre-code"><figcaption class="header"><i></i><i></i><i></i>$4</figcaption>$1$5</figure>'
  )
}

export const convertArticle = (article) => {
  const summary = article.body.split(/<!--\s*summary\s*-->/g)[1].trim().replace(/>\s*/,'')
  const splitBanner = article.body.split(/<!--\s*banner\s*-->/g)
  const banner = splitBanner[1].match(/http[^"]+/)[0].trim().replace(/\)$/,'')
  const thumb = banner.replace(/(750|1024\*1024)$/, '256')
  // const body = splitBanner[2]

  return Object.assign({}, {
    // body,
    title: article.title,
    number: article.number,
    summary,
    thumb,
    banner,
    createdAt: article.created_at.split('T')[0],
  })
}

// export const convertWorklogArticle = (article) => {
//   const color = `#${article.labels[0].color}`
//   const sections = convertMarkdownBody(article.body).split(/<!--\s*summary\s*-->/g)

//   return Object.assign({}, article, {
//     color,
//     createdAt: article.created_at.split('T')[0],
//     year: article.labels[0].name,
//     month: parseInt(article.title, 10),
//     summary: sections[1],
//     body: sections[2],
//   })
// }

// export const convertTimeline = ({ worklogs, enterActiveClass, leaveActiveClass }) => {
//   const timelines = {}

//   worklogs.forEach(worklog => {
//     const { year, color } = worklog

//     if (timelines[year]) {
//       timelines[year].worklogs.unshift(worklog)
//     } else {
//       timelines[year] = {
//         enterActiveClass,
//         leaveActiveClass,
//         activeIndex: 0,
//         color: color,
//         year: year,
//         worklogs: [worklog],
//       }
//     }
//   })

//   return timelines
// }

export const convertContent = (article) => {
  const body = convertMarkdownBody(article.body)

  return Object.assign(article, {
    body,
    createdAt: article.created_at.split('T')[0],
  })
}

export const convertComment = (comment) => {
  return Object.assign(comment, {
    createdAt: comment.created_at.replace(/T|Z/g, ' ')
  })
}

export const convertMarkdown = (article) => {
  const body = convertMarkdownBody(article)

  return Object.assign({}, article, {
    body
    // createdAt: article.created_at.split('T')[0],
  })
}

export const utf8ToB64 = (str) => {
  return window.btoa(unescape(encodeURIComponent(str)))
}

export const b64ToUtf8 = (str) => {
  return decodeURIComponent(escape(window.atob(str)))
}