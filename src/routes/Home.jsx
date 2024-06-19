import { useEffect, useState } from "react";
import Homeitem from "../components/Homeitem";
import { useSelector, useDispatch } from "react-redux";
import { addInitialItems } from "../store/itemSlice"; // Adjust the path as needed
import Spinner from "../components/Spinner";

function Home({}) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:8080/items");
        const data = await response.json();
        dispatch(addInitialItems(data.items));
        setLoading(false);
      } catch (error) {
        console.log("Error detected" + error);
        setLoading(false);
      }
    };
    fetchItems();
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((item) => (
            <Homeitem key={item.id} items={item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
