const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function clonePantry(pantry) {
  return pantry.map((item) => ({ ...item }));
}

function parseShipment(rawData) {
  /*
  each string -> split -> destructive vars -> check sku existed (seen) -> add vars as in { object } to output
  */
  const seen = new Set();
  const output = [];
  for (const item of rawData) {
    const [sku, name, qty, expires, zone] = item.split("|");
    if (seen.has(sku)) continue;
    seen.add(sku);
    output.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone: zone ?? "general",
    });
  }
  return output;
}

const shipment = parseShipment(rawData);

function planRestock(pantry, shipment) {
  const pantrySkus = new Set(pantry.map((i) => i.sku));
  return shipment.map((item) => {
    let type;
    if (item.qty <= 0) {
      type = "discard";
    } else if (pantrySkus.has(item.sku)) {
      type = "restock";
    } else {
      type = "donate";
    }
    return { type, item };
  });
}

const actions = planRestock(clonePantry(pantry), shipment);

function groupByZone(actions) {
  const grouped = {};
  actions.forEach((action) => {
    const { zone } = action.item;
    if (!grouped[zone]) grouped[zone] = [];
    grouped[zone].push(action);
  });
  return grouped;
}

console.log(groupByZone(actions));
