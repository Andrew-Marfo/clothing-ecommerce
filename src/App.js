const App = () => {

  const categories = [
    {
      'id': 1,
      'title': 'Hats',
    },
    {
      'id': 2,
      'title':'Sneakers'
    },
    {
      'id': 3,
      'title':'Jacket'
    },
    {
      'id': 4,
      'title':'Men'
    },
    {
      'id': 5,
      'title':'Women'
    }
  ]
  return (
    <div className="categories-conatianer">
      {categories.map(({ title, id }) => {
        return (
          <div className="category-container" key={id}>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        )
      })}      
   </div>
  );
}

export default App;
