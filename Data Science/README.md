
### EDA 📊

The **EDA** folder is focused on analyzing the initial dataset to uncover insights, trends, and patterns in employee skills. This step is essential for understanding the data's structure and identifying any preprocessing needs.

- **test 1.ipynb**: This Jupyter Notebook contains the code for performing EDA on employee skill data. It includes data visualization, summary statistics, and initial findings that help shape the direction of the data processing and modeling stages.

### Feature Extraction 🛠️

The **Feature_Extraction** folder contains scripts for transforming the raw data into a structured format suitable for machine learning:

- **test 1.ipynb**: This notebook is responsible for extracting meaningful features from the raw data, such as skill scores, learning path trends, and other relevant attributes. This feature set serves as the input for the model, capturing the most important information for predicting suitable learning paths.

### Model Development 🤖

The **Model_Development** folder focuses on building, training, and evaluating the predictive model used for learning path recommendations:

- **test 1.ipynb**: This notebook contains the model development pipeline, including model selection, training, and evaluation. The recommendation system leverages machine learning techniques, such as cosine similarity, to suggest tailored learning events based on employee skills and past interactions.

## Usage 🚀

1. **Exploratory Data Analysis**: Run `test 1.ipynb` in the EDA folder to explore the data and gain initial insights.
2. **Feature Engineering**: Use `test 1.ipynb` in the Feature_Extraction folder to create and refine features that will be used as inputs for the predictive model.
3. **Model Training and Prediction**: Execute `test 1.ipynb` in the Model_Development folder to train the model and generate learning path recommendations.

## Dependencies 🛠️

- **Jupyter Notebook**: Install with `pip install notebook` to run the `.ipynb` files.
- **Pandas and NumPy**: For data manipulation and numerical computations. Install via `pip install pandas numpy`.
- **Scikit-learn**: For model development and evaluation. Install via `pip install scikit-learn`.
- **Seaborn and Matplotlib**: For data visualization during EDA. Install with `pip install seaborn matplotlib`.

## Notes 📌

- Data should be pre-processed in the Data Engineering pipeline before starting EDA.
- Feature extraction should align with the specific use case of learning path recommendations.
- Model parameters can be adjusted within `test 1.ipynb` to optimize recommendation accuracy.

---

This folder structure and documentation guide provide a clear workflow for conducting data science tasks, from initial data exploration to the creation of a recommendation system.
