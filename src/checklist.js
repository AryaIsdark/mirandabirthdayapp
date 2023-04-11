import { useEffect, useState } from "react";

export const Checklist = () => {
  const [checklist, setChecklist] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  const getChecklist = () => {
    window
      .fetch("https://64346725582420e2317b8eb4.mockapi.io/checklist")
      .then((res) =>
        res.json().then((data) => {
          console.log(data);
          setChecklist(data);
        })
      );
  };

  const updateChecklistItem = (item) => {
    setIsUpdating(true);
    window
      .fetch(
        `https://64346725582420e2317b8eb4.mockapi.io/checklist/${item.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ isChecked: !item.isChecked }),
        }
      )
      .then((response) => response.json())
      .then((data) => {
        setIsUpdating(false);
        getChecklist();
      })
      .catch((error) => {
        setIsUpdating(false);
        console.error(error);
      });
  };

  useEffect(() => {
    getChecklist();
  }, []);

  return (
    <div className="page-container">
      <h4>Checklist befor flight</h4>
      <div className="checklist-content">
        {checklist.map((item) => (
          <div onClick={() => updateChecklistItem(item)}>
            <input
              disabled={isUpdating}
              type="checkbox"
              checked={item.isChecked}
            />{" "}
            <span
              style={{ textDecoration: item.isChecked ? "line-through" : "" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
