import Card from "./Card";

function Watches() {
  return (
    <>
    <h1>Watches</h1>
    <div className="cont">
      <Card name="Casio" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_GlRwTFYgomoGKUghz1S2CMuWdYXbSDGOz4YN1MDjCw&s=10" price="₹5,000" />
      <Card name="Rolex" image="https://media.rolex.com/image/upload/q_auto/f_auto/c_limit,w_1920/v1775305289/rolexcom/094398bf1f99/navigation/classic-watches-day-date-naviguation-landscape" price="₹6,00,100"/>
      <Card name="Timex" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2Aq8yK0pMBiQX4snUi68FfnM1PS2rl9ooxznoMOsvw&s=10" price="₹3,000"/>
      </div>
    </>

  );
}
export default Watches;