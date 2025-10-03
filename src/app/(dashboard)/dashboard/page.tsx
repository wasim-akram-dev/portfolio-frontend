const DashboardHomePage = async () => {
  const username = "Wasim Akram";
  const email = "wasimakram.codes@gmail.com";
  const quote = "The secret of getting ahead is getting started. – Mark Twain";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6 w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome, {username}!
      </h1>
      <p className="text-lg text-gray-600 italic text-center">{email}</p>
      <p className="text-lg text-gray-600 italic text-center">{quote}</p>
    </div>
  );
};

export default DashboardHomePage;
