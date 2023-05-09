function parsePartCode (partCode) {
  const colonIndex = partCode. indexOf (":")
  const supplier = partCode.slice(0, colonIndex)
 
  const hyphenIndex = partCode.indexOf("-")
  const productNumber = partCode.slice(colonIndex + 1, hyphenIndex)
  
  const size = partCode.slice(hyphenIndex + 1)

  const part = {
    supplierCode: supplier,
    productNumber: productNumber,
    size: size,
  }
  
  return part
  }
  
  console.log(parsePartCode("XYZ:1234-L"))
  console.log(parsePartCode("ABCDE:2348989-XL"))