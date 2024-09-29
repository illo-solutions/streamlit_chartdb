run_react_chart_db:
	cd ./st_chartdb/frontend && npm start

run_react_db_visualizer:
	cd ./st_db_visualizer/frontend && npm start

run_streamlit_chart_db:
	streamlit run ./st_chartdb/example.py

run_streamlit_db_visualizer:
	streamlit run ./st_db_visualizer/example.py