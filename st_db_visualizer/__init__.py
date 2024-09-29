import os
import json
import streamlit.components.v1 as components


_RELEASE = False
if not _RELEASE:
    _component_func = components.declare_component(
        "chartdb",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("chartdb", path=build_dir)

def chartdb(chart_json: str | dict, key=None):
    if isinstance(chart_json, dict):
        chart_json = json.dumps(chart_json, indent=4)
    _component_func(chart_json=chart_json, key=key, default=0)
