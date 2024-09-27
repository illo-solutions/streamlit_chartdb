import streamlit as st
from st_chartdb import chartdb

chart_input = {
    'hello': 'worlda',
    'hola': 'gorda'
}

chartdb(chart_input, key="foo")
