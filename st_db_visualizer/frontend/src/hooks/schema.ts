import { useEffect, useState } from "react";
import { type JSONTableSchema } from "../types/tableSchema";
import { tableCoordsStore } from "../stores/tableCoords";
import { stageStateStore } from "../stores/stagesState";
import { detailLevelStore } from "../stores/detailLevelStore";

import { type SetSchemaCommandPayload } from "../types/webviewCommand";

export const useSchema = (): {
  schema: JSONTableSchema | null;
  key: string | null;
} => {
  const [schema, setSchema] = useState<JSONTableSchema | null>(null);
  const [schemaKey, setSchemaKey] = useState<string | null>(null);

  const updater = (e: MessageEvent): void => {
    const message = e.data as SetSchemaCommandPayload;
    if (
      !(message.type === "setSchema" && typeof message.payload === "object")
    ) {
      return;
    }

    if (message.key !== schemaKey) {
      // update stores
      tableCoordsStore.switchTo(message.key, message.payload.tables);
      stageStateStore.switchTo(message.key);
      detailLevelStore.switchTo(message.key);

      setSchemaKey(message.key);
    }

    setSchema(message.payload);
  };

  useEffect(() => {
    window.addEventListener("message", updater);

    return () => {
      window.removeEventListener("message", updater);
      // save current table position
      tableCoordsStore.saveCurrentStore();
    };
  }, []);

  return { schema, key: schemaKey };
};
