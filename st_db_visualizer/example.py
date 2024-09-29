import streamlit as st
from st_db_visualizer import chartdb

chart_input = {
    "refs": [
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "books",
                    "fieldNames": [
                        "authorid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "authors",
                    "fieldNames": [
                        "authorid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "books",
                    "fieldNames": [
                        "publisherid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "publishers",
                    "fieldNames": [
                        "publisherid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "books",
                    "fieldNames": [
                        "categoryid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "categories",
                    "fieldNames": [
                        "categoryid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "orders",
                    "fieldNames": [
                        "customerid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "customers",
                    "fieldNames": [
                        "customerid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "orderdetails",
                    "fieldNames": [
                        "orderid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "orders",
                    "fieldNames": [
                        "orderid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "orderdetails",
                    "fieldNames": [
                        "bookid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "books",
                    "fieldNames": [
                        "bookid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "shoppingcarts",
                    "fieldNames": [
                        "customerid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "customers",
                    "fieldNames": [
                        "customerid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "reviews",
                    "fieldNames": [
                        "bookid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "books",
                    "fieldNames": [
                        "bookid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "reviews",
                    "fieldNames": [
                        "customerid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "customers",
                    "fieldNames": [
                        "customerid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "cartitems",
                    "fieldNames": [
                        "cartid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "shoppingcarts",
                    "fieldNames": [
                        "cartid"
                    ]
                }
            ]
        },
        {
            "name": None,
            "endpoints": [
                {
                    "relation": "1",
                    "tableName": "cartitems",
                    "fieldNames": [
                        "bookid"
                    ]
                },
                {
                    "relation": "*",
                    "tableName": "books",
                    "fieldNames": [
                        "bookid"
                    ]
                }
            ]
        }
    ],
    "enums": [],
    "tables": [
        {
            "name": "authors",
            "fields": [
                {
                    "name": "authorid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "name",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "birthdate",
                    "type": {
                        "type_name": "date",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        },
        {
            "name": "books",
            "fields": [
                {
                    "name": "bookid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "title",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "authorid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "authors"
                    ],
                    "not_None": False
                },
                {
                    "name": "publisherid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "publishers"
                    ],
                    "not_None": False
                },
                {
                    "name": "categoryid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "categories"
                    ],
                    "not_None": False
                },
                {
                    "name": "publisheddate",
                    "type": {
                        "type_name": "date",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        },
        {
            "name": "categories",
            "fields": [
                {
                    "name": "categoryid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "categoryname",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                }
            ],
            "indexes": []
        },
        {
            "name": "publishers",
            "fields": [
                {
                    "name": "publisherid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "name",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "address",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        },
        {
            "name": "orders",
            "fields": [
                {
                    "name": "orderid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "customerid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "customers"
                    ],
                    "not_None": False
                },
                {
                    "name": "orderdate",
                    "type": {
                        "type_name": "date",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                },
                {
                    "name": "totalamount",
                    "type": {
                        "type_name": "decimal",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        },
{
            "name": "customers",
            "fields": [
                {
                    "name": "customerid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "firstname",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "lastname",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "email",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                },
                {
                    "name": "phone",
                    "type": {
                        "type_name": "varchar",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        },
        {
            "name": "orderdetails",
            "fields": [
                {
                    "name": "orderdetailid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "orderid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "orders"
                    ],
                    "not_None": False
                },
                {
                    "name": "bookid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "books"
                    ],
                    "not_None": False
                },
                {
                    "name": "quantity",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                },
                {
                    "name": "price",
                    "type": {
                        "type_name": "decimal",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        },
        {
            "name": "shoppingcarts",
            "fields": [
                {
                    "name": "cartid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "customerid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "customers"
                    ],
                    "not_None": False
                },
                {
                    "name": "createddate",
                    "type": {
                        "type_name": "date",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        },
        {
            "name": "reviews",
            "fields": [
                {
                    "name": "reviewid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "bookid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "books"
                    ],
                    "not_None": False
                },
                {
                    "name": "customerid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "customers"
                    ],
                    "not_None": False
                },
                {
                    "name": "rating",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                },
                {
                    "name": "comment",
                    "type": {
                        "type_name": "text",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                },
                {
                    "name": "reviewdate",
                    "type": {
                        "type_name": "date",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        },
        {
            "name": "cartitems",
            "fields": [
                {
                    "name": "cartitemid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": True,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": True
                },
                {
                    "name": "cartid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "shoppingcarts"
                    ],
                    "not_None": False
                },
                {
                    "name": "bookid",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": True,
                    "relational_tables": [
                        "books"
                    ],
                    "not_None": False
                },
                {
                    "name": "quantity",
                    "type": {
                        "type_name": "int",
                        "is_enum": False
                    },
                    "pk": False,
                    "is_relation": False,
                    "relational_tables": None,
                    "not_None": False
                }
            ],
            "indexes": []
        }
    ]
}
st.set_page_config(layout="wide")

with st.sidebar:
    st.button(label='hola')

st.header('Your DB diagram')
chartdb(chart_input, key="foo")
