import React from "react";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.cartTable} style={{ overflowX: "auto" }}>
          <table>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Adam</td>
              <td>Johnson</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
            </tr>
          </table>
        </div>
        <div className={styles.cartTotal}>
          <div className={styles.cartTotalContainer}>
            <div className={styles.cartTotalTitle}>
              <h2>Bill</h2>
            </div>
            <div className={styles.cartTotalPrice}>
              <div className={styles.price}>
                <h3>Subtotal </h3>
                <p>$19</p>
              </div>
              <div className={styles.price}>
                <h3>Discount </h3>
                <p>- $0</p>
              </div>
              <div className={styles.price}>
                <h3>Total </h3>
                <p>$19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
