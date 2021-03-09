import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

import Item from "./Item";

export default function List({ items, artsys }) {
  // useEffect(
  //   ApiService.loadList()
  //   .then(arts => setArtsys(arts))
  // )

  return (
    <div className="list">
      {/* main item */}
      <div className="main scroll-section">
        {items ? (
          items.map((item, index) => {
            return (
              <Item key={item.id} index={index} category="main" item={item} />
            );
          })
        ) : (
          <FontAwesomeIcon
            icon={faTimesCircle}
            size="10x"
            style={{ color: "gray" }}
          />
        )}
      </div>

      {/* remaining list */}
      <div className="secondary scroll-section">
        {artsys ? (
          artsys.map((item, index) => {
            return (
              <Item
                key={item.id}
                index={index + item.length}
                category="secondary"
                item={item}
              />
            );
          })
        ) : (
          <p>No item in my list</p>
        )}
      </div>
    </div>
  );
}
