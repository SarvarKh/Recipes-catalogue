import { connect } from "react-redux";

const DetailMeal = ({detailMeal}) => {
    return (
        <div>
            {
                detailMeal !== undefined ?
                    <h1>Detail Meal id : {detailMeal.strMeal}</h1>
                    : <h2>Loading...</h2>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      detailMeal: state.detailMeal.detailMeal,
    }
  }

export default connect(mapStateToProps, null)(DetailMeal);