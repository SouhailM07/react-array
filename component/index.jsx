export default function ReactArr({ arr, Component, ...liProps }) {
  return arr.map((e, i) => {
    return (
      <li {...liProps} key={i}>
        {typeof e == "object" ? <Component {...e} /> : <Component e={e} />}
      </li>
    );
  });
}
