const fetchAPIData = async () => {
  try {
    const ipAddressResponse = await fetch("https://api64.ipify.org?format=json");
    const ipAddressData = await ipAddressResponse.json();

    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_3b9DRg3q34M436ThMycK0Qsk6oqWr&ipAddress=${ipAddressData.ip}`);
    const resData = await response.json();
    // console.log(resData);

    if (response.ok) {
      return resData;
    } else {
      throw new Error("Some error occurred");
    }
  } catch (error) {
    console.error(error);
    return [0,0];
  }
};

export default fetchAPIData;
