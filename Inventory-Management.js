let inventory = [];
function findProductIndex(name) {
  let arrName = [];
  for (let x of inventory) {
    arrName.push(x["name"]);
    if (x["name"] == name.toLowerCase()) {

      return inventory.indexOf(x)
    }
  }
  if (!arrName.includes(name.toLowerCase())) {
    return -1
  }
}
function addProduct(obj) {
  obj["name"] = obj["name"].toLowerCase();
  let arrName = [];
  for (let x of inventory) {
    arrName.push(x["name"]);
    if (x["name"] == obj["name"]) {
      x["quantity"] += obj["quantity"]
      return console.log(x["name"] + " quantity updated")
    }
  }
  if (!arrName.includes(obj["name"])) {
    inventory.push(obj);
    console.log(obj["name"] + " added to inventory")
  }
}

function removeProduct(name, num) {
  let arrName = [];
  name = name.toLowerCase();
  for (let x of inventory) {
    arrName.push(x["name"]);
    if (x["name"] === name) {
      let y = x["quantity"] - num;
      if (y > 0) {
        x["quantity"] = y;
        console.log("Remaining " + x["name"] + " pieces: " + y)
      }
      else if (y === 0) {
        inventory.splice(inventory.indexOf(x), 1)
        console.log(inventory)
      }
      else {
        console.log("Not enough " + x["name"] + " available," + " remaining pieces: " + x["quantity"])
      }
    }
  }
  if (!arrName.includes(name)) {
    console.log(name + " not found")
  }
}
inventory = [{ name: "flour", quantity: 20 }, { name: "rice", quantity: 5 }];
removeProduct("FLOUR", 20)

