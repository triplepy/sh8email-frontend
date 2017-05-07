export default (address) => {
  if (!address) {
    return 'Unknown Address'
  }
  const email = address.address
  const name = address.name
  return `${name} <${email}>`
}
