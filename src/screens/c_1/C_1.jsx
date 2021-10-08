import './c_1.scss';

const C_1 = () => {
  return (
    <div
      className="c_1"
      style={{
        backgroundImage: 'url(/c_1/back-desktop.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="card-container">
        <img src="/c_1/illustration-hero.svg" alt="" />
        <div className="title">Order Summary</div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          velit ipsum. Nobis,
        </div>
        <div className="music-container">
          <img src="/c_1/icon-music.svg" alt="" />
          <div className="plan">
            <div className="plan-title">Annual Plan</div>
            <div className="price">$59.99/year</div>
          </div>
          <div className="linked">cancel</div>
        </div>
        <button>Proceed to Payment</button>
        <div className="cancel">Cancel Order</div>
      </div>
    </div>
  );
};

export default C_1;
