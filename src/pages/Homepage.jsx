const Homepage = () => {
  return (
    <div className="h-[100vh] w-full">
      <div
        className="w-full bg-no-repeat  bg-cover h-3/4 bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
        }}
      >
        <div className="text-center text-6xl font-extrabold text-fuchsia-300">
          Build Your Community
        </div>
      </div>
    </div>
  );
};

export default Homepage;
