export const useCoffees = () =>{
  const fetchCoffeesJson = () => {
    const data = fetch("./server/data.json")
      .then(res => res.json())
      .then(data => console.log(data));

    return data;
  }


  return
}