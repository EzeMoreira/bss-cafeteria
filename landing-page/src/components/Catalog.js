import React from 'react';

const products = [
  { id: 1, name: 'Pizza', price: '$5' },
  { id: 2, name: 'Pasta', price: '$3' },
  { id: 3, name: 'Ensaladas', price: '$1.25' },
];

const Catalog = () => {
  return (
    <section className="catalog">
      <h2>Nuestros Productos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Catalog;
