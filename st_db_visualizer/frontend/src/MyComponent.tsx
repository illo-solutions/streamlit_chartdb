import {
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib";
import React, { ReactNode } from "react";
import {
  JSONTableEnum,
  JSONTableRef,
  JSONTableTable,
} from "./types/tableSchema";

import Tables from "./Tables";
import RelationsConnections from "./Connections";
import DiagramWrapper from "./DiagramWrapper";

import TablesPositionsProvider from "./providers/TablesPositionsProvider";
import MainProviders from "./providers/MainProviders";
import TableLevelDetailProvider from "./providers/TableDetailLevelProvider";
import './MyComponent.css'; 
import type { JSONTableSchema } from "./types/tableSchema";
import { exampleData } from "./fake/fakeJsonTables";

interface DiagramViewerProps {
  tables:  JSONTableTable[];
  refs: JSONTableRef[];
  enums: JSONTableEnum[];
}

class MyComponent extends StreamlitComponentBase<DiagramViewerProps> {
  
  public render = (): ReactNode => {
  
    let data: JSONTableSchema;
    try {
        data = JSON.parse(this.props.args.chart_json) as JSONTableSchema;
    } catch (error) {
        console.error("Failed to parse chart_json:", error);
        data = { tables: [], refs: [], enums: [] };
    }

    let tables = data.tables as JSONTableTable[];
    let refs = data.refs as JSONTableRef[];
    let enums = data.enums as JSONTableEnum[];

    if (!data || data.tables.length === 0) {
      tables = exampleData.tables
      refs = exampleData.refs
      enums = exampleData.enums
    }

    return (
      <div style={{height: '1000px'}}>
      <TableLevelDetailProvider>
        <TablesPositionsProvider tables={tables}>
          <MainProviders tables={tables} enums={enums}>
            <DiagramWrapper>
              <RelationsConnections refs={refs} />
              <Tables tables={tables} />
            </DiagramWrapper>
          </MainProviders>
        </TablesPositionsProvider>
      </TableLevelDetailProvider>
      </div>
    );
  };

}
export default withStreamlitConnection(MyComponent);
