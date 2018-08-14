export const withContext = (context, attrs, callback) => {
  const oldAttrs = Object.keys(attrs).map(attr => [attr, context[attr]])
  Object.entries(attrs).forEach(([attr, value]) => {
    context[attr] = value
  })
  callback(context)
  oldAttrs.forEach(([attr, oldValue]) => {
    context[attr] = oldValue
  })
}
