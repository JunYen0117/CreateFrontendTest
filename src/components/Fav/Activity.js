import { useState } from 'react';
import Tiger from '../../img/Activity.png';
import { Button } from 'react-bootstrap';
import { FaShoppingCart, FaFireAlt } from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Mo from '../../img/Mo.JPG';

const Activity = () => {
  const [showheart, setShowHeart] = useState(true);

  return (
    <>
      <div className="container-fluid mb-5 px-0">
        <div className="row ">
          {[1, 2, 3, 4].map(() => {
            return (
              <>
                <div className="Fac_card d-flex border p-0 mb-4 ms-2 rounded-3 w-100 position-relative">
                  {showheart ? (
                    <BsHeartFill className="Fac_heart" />
                  ) : (
                    <BsHeart className="Fac_heart" />
                  )}
                  <BsHeart
                    className="Fac_heart"
                    onClick={() => {
                      setShowHeart(!showheart);
                    }}
                  />
                  <div className="Fac_cardimg  col-4 p-0 me-3 ">
                    <img src={Mo} alt="" className="Fac_img " />
                  </div>
                  <div className="col-8 pt-3">
                    <h2>
                      可愛巧虎展 Meow &nbsp;
                      <FaFireAlt style={{ color: 'red' }} />
                    </h2>

                    <table className="Fac_table">
                      <tr>
                        <th>展覽日期</th>
                        <td>2050 年 03 月 07 日 - 2070年 12 月 12 日</td>
                      </tr>
                      <tr>
                        <th>展覽時間</th>
                        <td>23:00 - 24:00</td>
                      </tr>
                      <tr>
                        <th>活動地點</th>
                        <td>台北市信義區光復南路133號</td>
                      </tr>
                      <tr className="Fac_tr">
                        <th>票價</th>
                        <td>NT $400</td>
                        <Button
                          variant="primary"
                          className="text-white  d-block Fac_button m-0"
                        >
                          <FaShoppingCart className="me-3 " />
                          購票去
                        </Button>
                      </tr>
                    </table>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Activity;
