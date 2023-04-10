function RoleError() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h3>You do not have permission for this page</h3>
      </div>
    </>
  );
}

export default RoleError;
