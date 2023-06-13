import './App.css';
import { formatCurrency, formatDate, useFetch } from './utils';

function App() {
  const {
    data: purchases,
  } = useFetch('https://idme.s3.amazonaws.com/interview/data.json');

  return (
    <div className="App">
      <header>
        <h1 className={'title'}>Purchases</h1>
      </header>
      <main className={'purchases'}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th className={'location'}>Image</th>
              <th>Purchase Date</th>
              <th>Category</th>
              <th>Description</th>
              <th>Price</th>
              <th className={'more-options'}></th>
            </tr>
          </thead>
          <tbody>
           {purchases && purchases.map(({id, name, location, purchaseDate, category, description, price}) => (
             <tr key={id}>
               <td className={'name'}>{name}</td>
               <td className={'location'}><img src={location} alt={name}/></td>
               <td className={'purchase-date'}>{formatDate(purchaseDate)}</td>
               <td className={'category-row'}><div className={`category category-${category.toLowerCase()}`}>{category}</div></td>
               <td className={'description'}>{description}</td>
               <td className={'price'}>{formatCurrency(price)}</td>
               <td className={'more-options'}>⋮</td>
             </tr>
           ))}
          </tbody>
        </table>
      </main>

    </div>
  );
}

export default App;
