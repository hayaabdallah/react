function Map()
{
    const Fruits = [
        {id: 1 , name: "Apple",  color: "Yellow"},
        {id: 2 , name: "Strawberry", color: "Red"},
        {id: 3 , name: "Kiwi", color: "Green"}
      ]; 
      
    return(
<table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Color</th>
    </tr>
  </thead>
  <tbody>
    {Fruits.map((item)=>(
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.color}</td>
    </tr>
    ))}
  </tbody>
</table>
    );
}

export default Map;