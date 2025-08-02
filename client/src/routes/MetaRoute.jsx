import { useEffect } from 'react'

function MetaRoute({ element, meta }) {
  useEffect(() => {
    if (meta?.title) document.title = meta.title
    if (meta?.description) {
      let desc = document.querySelector('meta[name="description"]')
      if (!desc) {
        desc = document.createElement('meta')
        desc.name = 'description'
        document.head.appendChild(desc)
      }
      desc.content = meta.description
    }
  }, [meta])

  // Make sure to return the element!
  return element || null
}

export default MetaRoute