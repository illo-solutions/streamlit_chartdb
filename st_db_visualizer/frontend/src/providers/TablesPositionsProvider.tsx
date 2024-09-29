import { createContext, useMemo, useCallback, type PropsWithChildren } from "react";
import { type JSONTableTable } from "../types/tableSchema";

import type { TablesPositionsContextValue } from "../types/dimension";

import { tableCoordsStore } from "../stores/tableCoords";

export const TablesPositionsContext =
  createContext<TablesPositionsContextValue | null>(null);

interface TablesPositionsProviderProps extends PropsWithChildren {
  tables: JSONTableTable[];
}

const TablesPositionsProvider = ({
  tables,
  children,
}: TablesPositionsProviderProps) => {

  tableCoordsStore.resetPositions(tables);
  
  const resetPositions = useCallback(() => {
    tableCoordsStore.resetPositions(tables);
  }, [tables]); 

  const contextValue = useMemo(() => ({ resetPositions }), [resetPositions]);

  return (
    <TablesPositionsContext.Provider value={contextValue}>
      {children}
    </TablesPositionsContext.Provider>
  );
};

export default TablesPositionsProvider;
