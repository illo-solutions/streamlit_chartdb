import type { JSONTableSchema } from "../types/tableSchema";
import book_tables from './book_db.json'

// export const exampleData: JSONTableSchema = {
//   refs: [
//     {
//       name: null,
//       endpoints: [
//         { relation: "1", tableName: "users", fieldNames: ["id"] },
//         {
//           relation: "*",
//           tableName: "follows",
//           fieldNames: ["following_user_id"],
//         },
//       ],
//     },
//   ],
//   enums: [
//     {
//       name: "status",
//       values: [
//         {
//           name: "active",
//           note: "a note",
//         },
//         {
//           name: "inactive",
//           note: "a note",
//         },
//       ],
//     },
//   ],
//   tables: [
//     {
//       name: "follows",
//       note: "a note",
//       fields: [
//         {
//           name: "id",
//           type: { type_name: "integer", is_enum: false },
//           pk: true,
//           note: "a note",
//           increment: true,
//           not_null: true,
//           is_relation: false,
//           relational_tables: null,
//         },
//         {
//           name: "view",
//           type: { type_name: "integer", is_enum: false },
//           note: "a note",
//           dbdefault: { type: "number", value: 0 },
//           is_relation: false,
//           relational_tables: null,
//         },
//         {
//           name: "following_user_id",
//           type: { type_name: "integer", is_enum: false },
//           note: "a note",
//           is_relation: true,
//           relational_tables: ["users"],
//         },
//         {
//           name: "created_at",
//           type: { type_name: "timestamp", is_enum: false },
//           note: "a note",
//           is_relation: false,
//           relational_tables: null,
//         },
//         {
//           name: "status",
//           type: { type_name: "status", is_enum: true },
//           note: "a note",
//           is_relation: false,
//           relational_tables: null,
//         },
//       ],
//       indexes: [],
//     },
//     {
//       name: "users",
//       note: "a note",
//       fields: [
//         {
//           name: "id",
//           type: { type_name: "integer", is_enum: false },
//           pk: true,
//           note: "a note",
//           is_relation: true,
//           relational_tables: ["follows"],
//         },
//         {
//           name: "email",
//           type: { type_name: "varchar", is_enum: false },
//           unique: true,
//           note: "a note",
//           is_relation: false,
//           relational_tables: null,
//         },
//       ],
//       indexes: [],
//     },
//     {
//       name: "bookings",
//       note: "a note",
//       fields: [
//         {
//           name: "id",
//           type: { type_name: "integer", is_enum: false },
//           note: "a note",
//           is_relation: false,
//           relational_tables: null,
//         },
//         {
//           name: "country",
//           type: { type_name: "varchar", is_enum: false },
//           note: "a note",
//           is_relation: false,
//           relational_tables: null,
//         },
//         {
//           name: "booking_date",
//           type: { type_name: "date", is_enum: false },
//           note: "a note",
//           is_relation: false,
//           relational_tables: null,
//         },
//       ],
//       indexes: [
//         {
//           pk: true,
//           columns: [
//             { type: "column", value: "id" },
//             { type: "column", value: "country" },
//           ],
//         },
//         {
//           name: "created_at_index",
//           note: "a note",
//           columns: [{ type: "column", value: "created_at" }],
//         },
//         {
//           columns: [{ type: "column", value: "booking_date" }],
//         },
//         {
//           unique: true,
//           columns: [
//             { type: "column", value: "country" },
//             { type: "column", value: "booking_date" },
//           ],
//         },
//         {
//           type: "hash",
//           columns: [{ type: "column", value: "booking_date" }],
//         },
//         {
//           columns: [{ type: "expression", value: "id*2" }],
//         },
//         {
//           columns: [
//             { type: "expression", value: "id*3" },
//             { type: "expression", value: "getdate()" },
//           ],
//         },
//         {
//           columns: [
//             { type: "expression", value: "id*3" },
//             { type: "column", value: "id" },
//           ],
//         },
//       ],
//     },
//   ],
// };


// export const exampleData: JSONTableSchema = {
//   "refs": [
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "books",
//           "fieldNames": [
//             "authorid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "authors",
//           "fieldNames": [
//             "authorid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "books",
//           "fieldNames": [
//             "publisherid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "publishers",
//           "fieldNames": [
//             "publisherid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "books",
//           "fieldNames": [
//             "categoryid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "categories",
//           "fieldNames": [
//             "categoryid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "orders",
//           "fieldNames": [
//             "customerid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "customers",
//           "fieldNames": [
//             "customerid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "orderdetails",
//           "fieldNames": [
//             "orderid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "orders",
//           "fieldNames": [
//             "orderid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "orderdetails",
//           "fieldNames": [
//             "bookid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "books",
//           "fieldNames": [
//             "bookid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "shoppingcarts",
//           "fieldNames": [
//             "customerid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "customers",
//           "fieldNames": [
//             "customerid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "reviews",
//           "fieldNames": [
//             "bookid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "books",
//           "fieldNames": [
//             "bookid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "reviews",
//           "fieldNames": [
//             "customerid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "customers",
//           "fieldNames": [
//             "customerid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "cartitems",
//           "fieldNames": [
//             "cartid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "shoppingcarts",
//           "fieldNames": [
//             "cartid"
//           ]
//         }
//       ]
//     },
//     {
//       "name": null,
//       "endpoints": [
//         {
//           "relation": "1",
//           "tableName": "cartitems",
//           "fieldNames": [
//             "bookid"
//           ]
//         },
//         {
//           "relation": "*",
//           "tableName": "books",
//           "fieldNames": [
//             "bookid"
//           ]
//         }
//       ]
//     }
//   ],
//     enums: [
//     {
//       name: "status",
//       values: [
//         {
//           name: "active",
//           note: "a note",
//         },
//         {
//           name: "inactive",
//           note: "a note",
//         },
//       ],
//     },
//   ],
//   "tables": [
//     {
//       "name": "authors",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "authorid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "name",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "birthdate",
//           "type": {
//             "type_name": "date",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "books",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "bookid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "title",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "authorid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["authors"],
//           "not_null": false
//         },
//         {
//           "name": "publisherid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["publishers"],
//           "not_null": false
//         },
//         {
//           "name": "categoryid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["categories"],
//           "not_null": false
//         },
//         {
//           "name": "publisheddate",
//           "type": {
//             "type_name": "date",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "categories",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "categoryid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "categoryname",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "publishers",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "publisherid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "name",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "address",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "customers",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "customerid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "firstname",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "lastname",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "email",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         },
//         {
//           "name": "phone",
//           "type": {
//             "type_name": "varchar",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "orders",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "orderid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "customerid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["customers"],
//           "not_null": false
//         },
//         {
//           "name": "orderdate",
//           "type": {
//             "type_name": "date",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         },
//         {
//           "name": "totalamount",
//           "type": {
//             "type_name": "decimal",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "orderdetails",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "orderdetailid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "orderid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["orders"],
//           "not_null": false
//         },
//         {
//           "name": "bookid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["books"],
//           "not_null": false
//         },
//         {
//           "name": "quantity",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         },
//         {
//           "name": "price",
//           "type": {
//             "type_name": "decimal",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "shoppingcarts",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "cartid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "customerid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["customers"],
//           "not_null": false
//         },
//         {
//           "name": "createddate",
//           "type": {
//             "type_name": "date",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "reviews",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "reviewid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "bookid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["books"],
//           "not_null": false
//         },
//         {
//           "name": "customerid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["customers"],
//           "not_null": false
//         },
//         {
//           "name": "rating",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         },
//         {
//           "name": "comment",
//           "type": {
//             "type_name": "text",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         },
//         {
//           "name": "reviewdate",
//           "type": {
//             "type_name": "date",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     },
//     {
//       "name": "cartitems",
//       "note": "a note",
//       "fields": [
//         {
//           "name": "cartitemid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": true,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": true
//         },
//         {
//           "name": "cartid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["shoppingcarts"],
//           "not_null": false
//         },
//         {
//           "name": "bookid",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": true,
//           "relational_tables": ["books"],
//           "not_null": false
//         },
//         {
//           "name": "quantity",
//           "type": {
//             "type_name": "int",
//             "is_enum": false
//           },
//           "pk": false,
//           "note": "note",
//           "is_relation": false,
//           "relational_tables": null,
//           "not_null": false
//         }
//       ],
//       "indexes": []
//     }
//   ]
// }

export const exampleData: JSONTableSchema = book_tables as JSONTableSchema
