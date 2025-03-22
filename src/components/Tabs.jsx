export default function Tabs({ todos, setSelectedTab, selectedTab }) {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, i) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.completed).length
            : todos.filter((val) => val.completed).length;
        return (
          <button
            onClick={() => {
              setSelectedTab(tab);
            }}
            className={
              "tab-button " + (tab === selectedTab ? "tab-selected" : "")
            }
            key={i}
          >
            <h4>
              {tab}
              <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
