import Card from "./Card";
function Mobiles() 
{
  return (
    <>
    <h1>Mobiles</h1>
    <div className="cont">
      <Card name="iPhone" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNgWwL0Y1T6Q05yx3Rc1_CzcgEhm-M1OEdXFj8omvzw&s=10" price="₹90,000" />
      <Card name="Samsung" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfBfa4CSaK-TXJRCwa4Tk7BLAtkiJxH0ouxPn1SiQRA&s=10" price="₹30,000" />
      <Card name="Google Pixel" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSjJEkMGkMts2gpGgA24rdYQabnKH4XtgPbkPdbeDgyg&s=10" price="₹60,000" />
    </div>
    </>
  );
}
export default Mobiles;