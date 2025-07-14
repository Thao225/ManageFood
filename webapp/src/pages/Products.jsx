import React, { useState } from "react";
import { CATEGORIES } from "../constants";
import AddEditProductModal from "../components/AddEditProductModal";
import "./Products.css";

const Products = ({ products, addProduct, updateProduct, deleteProduct }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const filtered = products.filter((p) => {
    const matchCat = category === "all" || p.category === category;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });
  //
  const groupedProducts = filtered.reduce((acc, p) => {
    if (!acc[p.name]) acc[p.name] = [];
    acc[p.name].push(p);
    return acc;
  }, {});
  //
  const handleAdd = () => {
    setEditProduct(null);
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setShowModal(true);
  };

  const handleSave = (productData) => {
    if (editProduct) {
      updateProduct(productData);
    } else {
      addProduct(productData);
    }
    setShowModal(false);
  };

  // Định dạng dd/mm/yyyy
  const formatDate = (isoDate) => {
    const [year, month, day] = isoDate.split("-");
    return `${day}/${month}/${year}`;
  };


  return (
    <div className="products-page">

      <div className="products-header">
        <h2>📦 Quản lý sản phẩm</h2>
        <button onClick={handleAdd} className="add-button">
          + Thêm sản phẩm
        </button>
      </div>

      <div className="filters">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Tìm sản phẩm..."
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "Tất cả" : c}
            </option>
          ))}
        </select>
      </div>


      <table className="product-table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Loại</th>
            <th>Ngày thêm</th>
            <th>Ngày hết hạn</th>
            <th>Đơn vị</th>
            <th>Số lượng</th>
            <th>Ghi chú</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {filtered.length === 0 ? (
            <tr>
              <td colSpan="10" className="no-results">
                Không có sản phẩm.
              </td>
            </tr>
          ) : (
            filtered.map((p) => (
              <tr key={p.id}>
                <td>
                  <img src={p.image} alt={p.name} width="50" height="50" />
                </td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{formatDate(p.addedDate)}</td>
                <td>{formatDate(p.expiryDate)}</td>
                <td>{p.unit}</td>
                <td>{p.quantityNow}</td>
                <td className="note">{p.note}</td>
                <td className={p.quantityNow === 0 ? "used-yes" : "used-no"}>
                  <span className={p.status === 'active' ? "status-active" : "status-expiry"}>
                    {p.quantityNow === 0 ? "Hết sản phẩm" : "Còn sản phẩm"}
                  </span>

                </td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(p)}>
                    Sửa
                  </button>
                  <button className="delete-btn" onClick={() => deleteProduct(p.id)}>
                    Xoá
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <AddEditProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        initialData={editProduct}
      />
    </div>
  );
};

export default Products;
