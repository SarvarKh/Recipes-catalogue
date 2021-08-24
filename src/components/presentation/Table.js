import PropTypes from 'prop-types';

const Table = ({ detailMeal }) => (
  <table>
    <tbody>
      <tr>
        <th>No</th>
        <th>Ingredients</th>
        <th>Measure</th>
      </tr>
      {detailMeal.strIngredient1
        ? (
          <tr>
            <td>1</td>
            <td>{detailMeal.strIngredient1}</td>
            <td>{detailMeal.strMeasure1}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient2
        ? (
          <tr>
            <td>2</td>
            <td>{detailMeal.strIngredient2}</td>
            <td>{detailMeal.strMeasure2}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient3
        ? (
          <tr>
            <td>3</td>
            <td>{detailMeal.strIngredient3}</td>
            <td>{detailMeal.strMeasure3}</td>
          </tr>
        )
        : null}

      {detailMeal.strIngredient4
        ? (
          <tr>
            <td>4</td>
            <td>{detailMeal.strIngredient4}</td>
            <td>{detailMeal.strMeasure4}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient5
        ? (
          <tr>
            <td>5</td>
            <td>{detailMeal.strIngredient5}</td>
            <td>{detailMeal.strMeasure5}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient6
        ? (
          <tr>
            <td>6</td>
            <td>{detailMeal.strIngredient6}</td>
            <td>{detailMeal.strMeasure6}</td>
          </tr>
        )
        : null}

      {detailMeal.strIngredient7
        ? (
          <tr>
            <td>7</td>
            <td>{detailMeal.strIngredient7}</td>
            <td>{detailMeal.strMeasure7}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient8
        ? (
          <tr>
            <td>8</td>
            <td>{detailMeal.strIngredient8}</td>
            <td>{detailMeal.strMeasure8}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient9
        ? (
          <tr>
            <td>9</td>
            <td>{detailMeal.strIngredient9}</td>
            <td>{detailMeal.strMeasure9}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient10
        ? (
          <tr>
            <td>10</td>
            <td>{detailMeal.strIngredient10}</td>
            <td>{detailMeal.strMeasure10}</td>
          </tr>
        )
        : null}

      {detailMeal.strIngredient11
        ? (
          <tr>
            <td>11</td>
            <td>{detailMeal.strIngredient1}</td>
            <td>{detailMeal.strMeasure1}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient12
        ? (
          <tr>
            <td>12</td>
            <td>{detailMeal.strIngredient12}</td>
            <td>{detailMeal.strMeasure12}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient13
        ? (
          <tr>
            <td>13</td>
            <td>{detailMeal.strIngredient13}</td>
            <td>{detailMeal.strMeasure13}</td>
          </tr>
        )
        : null}

      {detailMeal.strIngredient14
        ? (
          <tr>
            <td>14</td>
            <td>{detailMeal.strIngredient14}</td>
            <td>{detailMeal.strMeasure14}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient15
        ? (
          <tr>
            <td>15</td>
            <td>{detailMeal.strIngredient15}</td>
            <td>{detailMeal.strMeasure15}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient16
        ? (
          <tr>
            <td>16</td>
            <td>{detailMeal.strIngredient16}</td>
            <td>{detailMeal.strMeasure16}</td>
          </tr>
        )
        : null}

      {detailMeal.strIngredient17
        ? (
          <tr>
            <td>17</td>
            <td>{detailMeal.strIngredient17}</td>
            <td>{detailMeal.strMeasure17}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient18
        ? (
          <tr>
            <td>18</td>
            <td>{detailMeal.strIngredient18}</td>
            <td>{detailMeal.strMeasure18}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient19
        ? (
          <tr>
            <td>19</td>
            <td>{detailMeal.strIngredient19}</td>
            <td>{detailMeal.strMeasure19}</td>
          </tr>
        )
        : null}
      {detailMeal.strIngredient20
        ? (
          <tr>
            <td>20</td>
            <td>{detailMeal.strIngredient20}</td>
            <td>{detailMeal.strMeasure20}</td>
          </tr>
        )
        : null}
    </tbody>
  </table>
);

export default Table;

Table.propTypes = {
  detailMeal: PropTypes.instanceOf(Object).isRequired,
};
