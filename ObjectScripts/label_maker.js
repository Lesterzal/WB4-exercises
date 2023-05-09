let myInfo = {
  name: "John Wick",
  address: "121 Mill Neck",
  city: "Long Island",
  state: "New York",
  zip: "11765"
}

function printContact(addressInfo) {
  const line1 = `${addressInfo.name}\n`;
  const line2 = `${addressInfo.address}\n`;
  const line3 = `${addressInfo.city}, ${addressInfo.state}, ${addressInfo.zip}`;
  console.log(line1 + line2 + line3);
}

printContact(myInfo);