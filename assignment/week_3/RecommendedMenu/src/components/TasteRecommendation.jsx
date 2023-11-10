import ShowSelectedCategory from "./ShowSelectedCategory";
import Step from "./Step";

const TasteRecommendation = (props) => {
  const step = props.step;
  const category = "취향대로 추천";

  return step === 0 ? (
    <ShowSelectedCategory
      category={category}
      setIsStartClicked={props.setIsStartClicked}
      setStep={props.setStep}
    />
  ) : (
    <Step
      setStep={props.setStep}
      step={step}
      setIsStartClicked={props.setIsStartClicked}
      category={category}
    />
  );
};

export default TasteRecommendation;
