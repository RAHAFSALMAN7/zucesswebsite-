const Viewer360 = () => {
  return (
    <iframe
      src="/360viewer/index.htm"
      style={{ width: "100%", height: "80vh", border: "none" }}
      title="360 Viewer"
      loading="lazy"
      sandbox="allow-scripts allow-same-origin"
    />
  );
};

export default Viewer360;

