/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/**
 * Search function
 */

const searchInput = document.querySelector("#searchbar > input")
const searchButton = document.querySelector("#searchbar > button")

const lookup = {"/":"/","deepl":"https://deepl.com/","reddit":"https://reddit.com/","maps":"https://maps.google.com/"}
const engine = "google"
const engineUrls = {
  deepl: "https://www.deepl.com/translator#-/-/",
  duckduckgo: "https://duckduckgo.com/?q=",
  ecosia: "https://www.ecosia.org/search?q=",
  google: "https://www.google.com/search?q=",
  startpage: "https://www.startpage.com/search?q=",
  youtube: "https://www.youtube.com/results?q=",
}

const isWebUrl = value => {
  try {
    const url = new URL(value)
    return url.protocol === "http:" || url.protocol === "https:"
  } catch {
    return false
  }
}

const getTargetUrl = value => {
  if (isWebUrl(value)) return value
  if (lookup[value]) return lookup[value]
  return engineUrls[engine] + value
}

const search = () => {
  const value = searchInput.value
  const targetUrl = getTargetUrl(value)
  window.open(targetUrl, "_self")
}

searchInput.onkeyup = event => event.key === "Enter" && search()
searchButton.onclick = search

/**
 * inject bookmarks into html
 */

const bookmarks = [{"id":"o1T2cJEREONJs55J","label":"design tools","bookmarks":[{"id":"dcnLPyZAE7UmAEK4","label":"pixlrx","url":"https://pixlr.com/x/"},{"id":"8QZNOGAUB1y2HAnz","label":"image enlarger","url":"https://bigjpg.com/en"},{"id":"Sk7XrEdAEb17hril","label":"haikei","url":"https://app.haikei.app/"},{"id":"6NJAz7LQB8uWNvHs","label":"css gradients","url":"https://larsenwork.com/easing-gradients/"}]},{"id":"2XLG0Kk2aqbREa6a","label":"worth reading","bookmarks":[{"id":"Wbwn3qKTCHshbwDA","label":"happy hues","url":"https://www.happyhues.co/"},{"id":"Dylsvs5fcJWAfi7F","label":"styled-components","url":"https://www.joshwcomeau.com/react/demystifying-styled-components/"},{"id":"idAd6RQVlSBMq8Bn","label":"react docs","url":"https://reactjs.org/docs/getting-started.html"}]},{"id":"01qPuqvsMwLBw9tc","label":"sources","bookmarks":[{"id":"SR6t7qhLP2QTLsTs","label":"icons","url":"https://feathericons.com/"},{"id":"PwRmHCKhPxYkfSjf","label":"gif","url":"https://designyoutrust.com/2019/05/the-chill-and-retro-motion-pixel-art-of-motocross-saito/"},{"id":"AS8NmLolkuygIEZh","label":"@startpage","url":"https://prettycoffee.github.io/startpage"},{"id":"YoIhtnzjeIxrZH8D","label":"author","url":"https://prettycoffee.github.io/"}]},{"id":"x6jC8sKcpCCUCGMn","label":"Gitlab","bookmarks":[{"id":"hYUYoju9VIzMTLJ0","label":"CBSH Group","url":"https://gitlab.com/cbsh"},{"id":"YuD0tp6U5zYMdDGd","label":"My Profile","url":"httls://gitlab.com/cabooshyy"}]}]

const createGroupContainer = () => {
  const container = document.createElement("div")
  container.className = "bookmark-group"
  return container
}

const createGroupTitle = title => {
  const h2 = document.createElement("h2")
  h2.innerHTML = title
  return h2
}

const createBookmark = ({ label, url }) => {
  const li = document.createElement("li")
  const a = document.createElement("a")
  a.href = url
  a.innerHTML = label
  li.append(a)
  return li
}

const createBookmarkList = bookmarks => {
  const ul = document.createElement("ul")
  bookmarks.map(createBookmark).forEach(li => ul.append(li))
  return ul
}

const createGroup = ({ label, bookmarks }) => {
  const container = createGroupContainer()
  const title = createGroupTitle(label)
  const bookmarkList = createBookmarkList(bookmarks)
  container.append(title)
  container.append(bookmarkList)
  return container
}

const injectBookmarks = () => {
  const bookmarksContainer = document.getElementById("bookmarks")
  bookmarksContainer.append()
  bookmarks.map(createGroup).forEach(group => bookmarksContainer.append(group))
}

injectBookmarks()
