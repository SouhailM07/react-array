export default function ReactArr({ arr, Component, listRole = "listitem" }) {
  return arr.map((e, i) => {
    return (
      <li role={listRole} key={i}>
        {typeof e == "object" ? <Component {...e} /> : <Component e={e} />}
      </li>
    );
  });
}
