import { type JSONTableRef } from "./types/tableSchema";
import RelationConnection from "./relation_connection/RelationConnection";

interface RelationsConnectionsProps {
  refs: JSONTableRef[];
}

const RelationsConnections = ({ refs }: RelationsConnectionsProps) => {
  return (
    <>
      {refs.map((ref) => {
        const source = ref.endpoints[0];
        const target = ref.endpoints[1];

        const key = `${source.tableName}-${source.fieldNames[0]}-${target.tableName}-${target.fieldNames[0]}`;

        return <RelationConnection key={key} source={source} target={target} />;
      })}
    </>
  );
};

export default RelationsConnections;
