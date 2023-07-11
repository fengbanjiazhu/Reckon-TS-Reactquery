const URL = "https://join.reckon.com/stock-pricing";

interface stockType {
  code: string;
  price: number;
}

export async function fetchData() {
  try {
    const res = await fetch(URL);

    if (!res.ok) throw new Error("failed to fetch");

    const data = (await res.json()) as stockType[];
    return data;
  } catch (error) {
    console.log(error);
  }
}
