import './c_4.scss';

const C_4 = () => {
  return (
    <div className="c_4">
      <div className="container">
        <img className="top" src="/c_4/bg-pattern-top.svg" alt="" />
        <img className="bottom" src="/c_4/bg-pattern-bottom.svg" alt="" />
        <div className="card-container">
          <div className="card-top">
            <img src="/c_4/bg-pattern-card.svg" alt="" />
          </div>
          <div className="card-center">
            <img src="/c_4/image-victor.jpg" alt="" />
            <div className="title">
              Victor Crest <span>26</span>
            </div>
            <div className="location">London</div>
          </div>
          <div className="slots">
            <div className="slot">
              <div className="followers">80K</div>
              <div className="slot-title">Followers</div>
            </div>
            <div className="slot">
              <div className="followers">800K</div>
              <div className="slot-title">Likes</div>
            </div>
            <div className="slot">
              <div className="followers">1.4K</div>
              <div className="slot-title">Photos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default C_4;
