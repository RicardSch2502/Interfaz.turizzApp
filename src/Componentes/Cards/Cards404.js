const Cards404 = (props) => {
  return (
    <div className="card h-100 bg-info animate__animated animate__bounceInUp">
      <div class="card-body">
        <h2 className="card-title text-center">
          <font color="light">{props.title}</font>
        </h2>
        <h5>
          <p className="card-text">
            <font color="light">{props.children}</font>
          </p>
        </h5>
      </div>
    </div>
  );
};

export default Cards404;
