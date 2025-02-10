function FilterButton() {
  return (
    <>
      <button className="btn toggle-btn" type="button" aria-pressed="true">
        <span className="visually-hidden">Show</span>
        <span className="">All</span>
        <span className="visually-hidden">Tasks</span>
      </button>
    </>
  );
}

export default FilterButton;
