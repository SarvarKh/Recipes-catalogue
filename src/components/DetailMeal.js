import { connect } from "react-redux";

const DetailMeal = ({detailMeal}) => {
    return (
        <main>
            {
                detailMeal !== undefined ?
                    <div>
                        <h1>{detailMeal.strMeal}</h1>
                        <div>Category: {detailMeal.strCategory}</div>
                        <div>Origin: {detailMeal.strArea}</div>
                        <div className="instructions">
                            <p>How to prepare?</p>
                            <p>{detailMeal.strInstructions}</p>
                        </div>
                        <div>
                            <img src={detailMeal.strMealThumb} />
                        </div>
                        <div>#Tags: {detailMeal.strTags}</div>
                        <iframe width="420" height="345" src={`https://www.youtube.com/embed/${detailMeal.strYoutube.split('=')[1]}`}></iframe>
                        
                        <table>
                            <tr>
                                <th>No</th>
                                <th>Ingredients</th>
                                <th>Measure</th>
                            </tr>
                            {detailMeal.strIngredient1 ?
                                <tr>
                                    <td>1</td>
                                    <td>{detailMeal.strIngredient1}</td>
                                    <td>{detailMeal.strMeasure1}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient2 ?
                                <tr>
                                    <td>2</td>
                                    <td>{detailMeal.strIngredient2}</td>
                                    <td>{detailMeal.strMeasure2}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient3 ?
                                <tr>
                                    <td>3</td>
                                    <td>{detailMeal.strIngredient3}</td>
                                    <td>{detailMeal.strMeasure3}</td>
                                </tr>
                                : ""}
                            
                                {detailMeal.strIngredient4 ?
                                <tr>
                                    <td>4</td>
                                    <td>{detailMeal.strIngredient4}</td>
                                    <td>{detailMeal.strMeasure4}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient5 ?
                                <tr>
                                    <td>5</td>
                                    <td>{detailMeal.strIngredient5}</td>
                                    <td>{detailMeal.strMeasure5}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient6 ?
                                <tr>
                                    <td>6</td>
                                    <td>{detailMeal.strIngredient6}</td>
                                    <td>{detailMeal.strMeasure6}</td>
                                </tr>
                                : ""}
                            
                            {detailMeal.strIngredient7 ?
                                <tr>
                                    <td>7</td>
                                    <td>{detailMeal.strIngredient7}</td>
                                    <td>{detailMeal.strMeasure7}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient8 ?
                                <tr>
                                    <td>8</td>
                                    <td>{detailMeal.strIngredient8}</td>
                                    <td>{detailMeal.strMeasure8}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient9 ?
                                <tr>
                                    <td>9</td>
                                    <td>{detailMeal.strIngredient9}</td>
                                    <td>{detailMeal.strMeasure9}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient10 ?
                                <tr>
                                    <td>10</td>
                                    <td>{detailMeal.strIngredient10}</td>
                                    <td>{detailMeal.strMeasure10}</td>
                                </tr>
                                : ""}

                            {detailMeal.strIngredient11 ?
                                <tr>
                                    <td>11</td>
                                    <td>{detailMeal.strIngredient1}</td>
                                    <td>{detailMeal.strMeasure1}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient12 ?
                                <tr>
                                    <td>12</td>
                                    <td>{detailMeal.strIngredient12}</td>
                                    <td>{detailMeal.strMeasure12}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient13 ?
                                <tr>
                                    <td>13</td>
                                    <td>{detailMeal.strIngredient13}</td>
                                    <td>{detailMeal.strMeasure13}</td>
                                </tr>
                                : ""}
                            
                                {detailMeal.strIngredient14 ?
                                <tr>
                                    <td>14</td>
                                    <td>{detailMeal.strIngredient14}</td>
                                    <td>{detailMeal.strMeasure14}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient15 ?
                                <tr>
                                    <td>15</td>
                                    <td>{detailMeal.strIngredient15}</td>
                                    <td>{detailMeal.strMeasure15}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient16 ?
                                <tr>
                                    <td>16</td>
                                    <td>{detailMeal.strIngredient16}</td>
                                    <td>{detailMeal.strMeasure16}</td>
                                </tr>
                                : ""}
                            
                            {detailMeal.strIngredient17 ?
                                <tr>
                                    <td>17</td>
                                    <td>{detailMeal.strIngredient17}</td>
                                    <td>{detailMeal.strMeasure17}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient18 ?
                                <tr>
                                    <td>18</td>
                                    <td>{detailMeal.strIngredient18}</td>
                                    <td>{detailMeal.strMeasure18}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient19 ?
                                <tr>
                                    <td>19</td>
                                    <td>{detailMeal.strIngredient19}</td>
                                    <td>{detailMeal.strMeasure19}</td>
                                </tr>
                                : ""}
                            {detailMeal.strIngredient20 ?
                                <tr>
                                    <td>20</td>
                                    <td>{detailMeal.strIngredient20}</td>
                                    <td>{detailMeal.strMeasure20}</td>
                                </tr>
                                : ""}
                            
                        </table>
                        <a src={detailMeal.strSource}>Source</a>
                    </div>
                    
                    : <h2>Please go back to the previous page and select meal to see details...</h2>
            }
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
      detailMeal: state.detailMeal.detailMeal,
    }
  }

export default connect(mapStateToProps, null)(DetailMeal);