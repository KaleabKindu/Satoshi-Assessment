import React, { useContext, useMemo } from "react";
import { ProductsContext } from "../context/ProductsContext";

const FavoriteProjects = () => {
  const { products } = useContext(ProductsContext);
  const favouriteProducts = useMemo(
    () => products.filter((product) => product.favourite),
    [products]
  );
  return (
    <div className="flex flex-col gap-2">
      <p>Favorite Projects</p>
      <ul className="flex flex-col gap-1 pl-2">
        {favouriteProducts.map((product) => (
          <li key={product.id} className="list-disc list-inside">
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteProjects;
