let myInfo = {
  name: "John Wick",
  address: "121 Mill Neck",
  city: "Long Island",
  state: "New York",
  zip: "11765"
};

function printContact(contact) {
  console.log(contact.name);
  console.log(contact.address);
  console.log(`${contact.city}, ${contact.state} ${contact.zip}`);
}

printContact(myInfo);