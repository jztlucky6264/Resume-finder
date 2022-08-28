import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <>
      <div className={styles.main_wrapper}>
        <p className={styles.blurOut}>Resume Mania</p>
      </div>
    </>

    /* const [userData, setUserData] = useState("");
  const userHomepage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setUserData({
        name: data.name,
      });

      if (!res.ok === 200) {
        const error = new Error(res.error);
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userHomepage();
  }, []);
  return (
    <>
      <div className="home_main_div">
        <div className="home_page">
          <div className="home_div  ">
            <h1 className=" text-center ">{userData.name}</h1>
            <h2 className="text-center">Welcome In Resume Mania</h2>
          </div>
        </div>
      </div>
    </> */
  );
};

export default Home;
