export default (address) => {
  const email = address.address
  const name = address.name
  return `${name} <${email}>`
}
