function RoleError() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            padding: "30px 40px",
            marginRight: "100px",
          }}
        >
          You do not have permission for this page
        </div>
      </div>
    </>
  );
}

export default RoleError;
