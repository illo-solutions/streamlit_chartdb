# Chart DB as Streamlit Component

Streamlit component that allows you to use ChartDB

## Installation instructions

```sh
python -m venv .venv
source .venv/bin/activate 
pip install .
streamlit run st_chartdb/example.py
```

In another terminal just run the service.
```sh
cd st_chartdb/frontend
npm install
npm run start
```

## Usage instructions

```python
import streamlit as st

from st_chartdb import chartdb

chart_json = {} # Chart definition
chartdb(chart_json)

```