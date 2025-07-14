
import "./Home.css";

const Home = ({ products }) => {

  const getDaysToExpire = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);

    const diffTime = expiry.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">📦 Danh sách sản phẩm</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div className={product.quantityNow != 0 ? "product-card" : "no"} key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />

            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              {/* <p className="product-price">{product.price.toLocaleString()}₫</p> */}
              <p className="product-stock">
                Còn:{" "} {product.quantityNow}
              </p>
              <p className="product-note">NHH: {product.expiryDate}</p>
              <p className="product-note">Ghi chú: {product.note}</p>
              <span className={`status-badge ${product.status}`}>
                {product.status === "active"
                  ? `Còn: ${getDaysToExpire(product.expiryDate)} ngày`
                  : product.status === "expiry"
                    ? `Hết hạn sau: ${getDaysToExpire(product.expiryDate)} ngày`
                    : "Hết hạn"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;