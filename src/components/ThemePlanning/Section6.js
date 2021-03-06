import Pic4 from '../../img/themeplanning/Pic4.png';


function Section6() {
    return (
      <>
      <section className="planning_section_six">
        <h3 className="py-4 mt-5">創造最美好的回憶!</h3>
        <p className="mb-5">
          六月畢業季來了，分離的畢業歌聲響起
          <br />
          是否想在最後與同學留下美好回憶？
          <br />
          創意迴廊的精選活動
          <br />
          囊括各類課程、展覽資訊
          <br />
          讓你在畢業時也能繼續充實自己！
        </p>
        <div className="d-flex justify-content-center pb-5">
          <figure className="mx-1 mx-md-2">
            <img src={Pic4} alt="#/" />
          </figure>
          <figure className="mx-1 mx-md-2">
            <img src={Pic4} alt="#/" />
          </figure>
        </div>
      </section>
      </>
    );
  }
  
  export default Section6;