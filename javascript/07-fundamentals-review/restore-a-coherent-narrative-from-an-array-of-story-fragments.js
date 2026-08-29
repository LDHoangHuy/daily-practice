const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  if (fragments.includes(undefined)) {
    console.log("[COMPACTED]");
  }
  const result = [];
  for (const fragment of fragments) {
    if (fragment) {
      result.push(fragment);
    } 
  }
  return result;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;
  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[i + left];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[j + mid + 1];
  }

  let i = 0, 
      j = 0, 
      k = left;
  
  while (i < n1 && j < n2) {
    if (L[i]["id"] <= R[j]["id"]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor(left + (right - left) / 2);

  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function sortFragments(shuffledFragments) {
  const sortedFragments = [...shuffledFragments];

  mergeSort(sortedFragments, 0, sortedFragments.length - 1);

  return sortedFragments;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(sortedFragments) {
  const id = new Set();
  const result = [];

  for (const fragment of sortedFragments) {
    if (id.has(fragment.id)) {
      console.log("[DEDUPED]");
    } else {
      id.add(fragment.id);
      result.push(fragment);
    }
  }

  return result;
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(sortedFragments) {
  const result = [...sortedFragments];

  for (let i = 1; i < result.length; i++) {
    if (result[i]["id"] !== result[i-1]["id"] + 1) {
      result.splice(i, 0, {
        id: result[i-1]["id"] + 1,
        text: "[...]"
      });
      console.log("[FILLED]");
    }
  }

  return result;
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(sortedFragments) {
  const fragTexts = sortedFragments.map(fragment => fragment.text);

  return fragTexts.join("\n");
}

console.log(assembleStory(filledFragments));
