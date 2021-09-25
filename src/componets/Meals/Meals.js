import MealSummary from "./MealsSummary";
import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
