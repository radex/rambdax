export function groupBy(fn, list) {
  if (arguments.length === 1) {
    return listHolder => groupBy(fn, listHolder)
  }

  const result = {}
  for (let i = 0; i < list.length; i++) {
    const item = list[ i ]
    const key = fn(item)

    if (!result[ key ]) {
      result[ key ] = []
    }

    result[ key ].push(item)
  }

  return result
}
