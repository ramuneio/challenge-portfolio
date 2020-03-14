export default async function fetchData(url, translateOkJson) {
  const res = await fetch(url);
  const json = await res.json();

  if (res.ok) {
    return translateOkJson(json);
  } else {
    throw new Error(res.statusText);
  }
}
