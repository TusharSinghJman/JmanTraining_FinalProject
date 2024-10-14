
### Raw 📥

The **Raw** folder is designated for the ingestion of raw data. This folder acts as the initial landing zone for unprocessed data before any cleaning or transformation occurs.

### Staging 🔄

The **Staging** folder is where data preparation and transformation processes take place:

- **prep.ipynb**: This file contains scripts for data preparation, which include cleaning, filtering, and standardizing the raw data.
- **transform.ipynb**: This file includes transformation scripts that apply business logic and reshape the data into a format suitable for analysis.
- **mart/**: This subfolder stores the processed and transformed data, often referred to as "data marts." The data here is ready for reporting and analytics.

### Reporting 📊

The **Reporting** folder contains files for data visualization and reporting:

- **report.ipynb**: This Jupyter Notebook is used to generate visualizations based on the data stored in the staging mart. It allows for exploratory data analysis and presentation of key insights.

## Usage 🚀

1. **Ingest Raw Data**: Place the raw data files into the `Raw` folder.
2. **Data Preparation**: Run the scripts in `prep.ipynb` to clean and prepare the data.
3. **Data Transformation**: Execute `transform.ipynb` to apply transformations and load the processed data into the `mart` folder.
4. **Visualizations and Reporting**: Use `report.ipynb` in the `Reporting` folder to create visualizations and analyze the transformed data.

This workflow ensures that data is processed in a systematic way, with each stage building on the previous one, ultimately supporting effective reporting and analysis.

## Dependencies 🛠️

- **Database**: Ensure connection to the database that will be used for storing and retrieving data.
- **Jupyter Notebook**: Required for running visualizations. Install via `pip install notebook`.

## Notes 📌

- Ensure all raw data is backed up before processing.
- Data in the `mart` folder is ready for reporting and should be maintained for consistency in analysis.
- Visualizations in `report.ipynb` can be extended based on specific reporting needs.

---

This folder structure and documentation help streamline the data engineering process, making it easier to maintain and scale data operations.
