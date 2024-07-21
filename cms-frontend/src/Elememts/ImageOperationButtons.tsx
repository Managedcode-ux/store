import {
  IconTrash,
  IconTrashFilled,
  IconReplace,
  IconReplaceFilled,
  IconRefresh,
} from "@tabler/icons-react";
import styles from "./ImageOperationButton.module.css";
import { useState } from "react";

export function ImageOperation() {
  const [deleteHover, setDeleteHover] = useState(false);
  const [reOrderHover, setreOrderHover] = useState(false);

  const handleDelete = () => {
    console.log("delete pressed");
  };

  const handleReOrder = () => {
    console.log("Reorder Pressed");
  };

  const handleReplace = () => {
    console.log("Replace Pressed");
  };

  const handleDeleteAll = () => {
    console.log("Delete All pressed");
  };

  return (
    <div className={styles.OperationContainer}>
      <div className={styles.MacroscopicOps}>
        <button
          className={styles.deleteAllBttn}
          onClick={() => handleDeleteAll()}
        >
          Delete All
        </button>
      </div>

      <div className={styles.MicroscopicOps}>
        <div
          className={styles.IconTooltipContainer}
          onMouseEnter={() => setDeleteHover(true)}
          onMouseLeave={() => setDeleteHover(false)}
          onClick={() => handleDelete()}
        >
          <div className={styles.Spoiler}>
            <p>Delete</p>
          </div>
          {deleteHover ? (
            <IconTrashFilled className={styles.Icon} />
          ) : (
            <IconTrash className={styles.Icon} />
          )}
        </div>

        <div
          className={styles.IconTooltipContainer}
          onMouseEnter={() => setreOrderHover(true)}
          onMouseLeave={() => setreOrderHover(false)}
          onClick={() => handleReOrder()}
        >
          <div className={styles.Spoiler}>
            <p>Reorder</p>
          </div>
          {reOrderHover ? (
            <IconReplaceFilled />
          ) : (
            <IconReplace className={styles.Icon} />
          )}
        </div>

        <div
          className={styles.IconTooltipContainer}
          onClick={() => handleReplace()}
        >
          <div className={styles.Spoiler}>
            <p>Replace</p>
          </div>
          <IconRefresh className={styles.Icon} />
        </div>
      </div>
    </div>
  );
}
