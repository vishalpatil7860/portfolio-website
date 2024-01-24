import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import prs from "../public/prs.png";
import kets from "../public/kets.png";
import adas from "../public/adas.png";
import qas from "../public/qas.png";
import had from "../public/had.png";
import ccfd from "../public/ccfd.png";
import hdc from "../public/hdc.jpg";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "M.Sc. in Data Science",
    location: "University of Michigan-Dearborn",
    description:
      "Relevant Coursework: Pattern Recognition and Neural Network, Artificial Intelligence, Database Systems, Natural Language Processing, Deep Learning",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present",
  },
  {
    title: "Data Science Intern",
    location: " Pune, India",
    description:
      "I worked as a Data Science and Business Intelligence Intern for 2 months. This internship program included working on different tools and technologies used by Data Scientists and Business Analysts.(Power BI, Excel, Python, etc.)",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "Programmer Analyst",
    location: "Pune, India",
    description:
      "I'm now a full-stack developer working as a Programmer Analyst. My stack includes Angular JS, JAVA, SQL.",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "B.E. in Computer Engineering",
    location: "Savitribai Phule Pune University, India",
    description:
      "Relevant Coursework: Data Analytics, Data Mining and Warehousing, Artificial Intelligence and Robotics, Database Management Systems, Business Intelligence",
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  }
] as const;

export const projectsData = [
  {
    title: "Retail Data-Driven Product Recommendation Engine",
    description:
      "Led the creation of a high-accuracy (98.34%) content-based recommendation system for e-commerce, leveraging Python, TensorFlow, and Keras, with advanced data preprocessing and serialization via scikit-learn and joblib, culminating in a robust Flask web application with an intuitive UI for superior product recommendation.",
    tags: ["Python", "Keras", "Neural Network", "Deep Learning", "Product Recommendation", "Content-based Filtering"],
    link: "https://github.com/vishalpatil7860/Retail-Data-Driven-Product-Recommendation-Engine",
    imageUrl: prs,
  },
  {
    title: "Keyword Extraction & Text Summarization using NLP",
    description:
    "Enhanced a text summarization algorithm for heightened precision by refining the dataset, applying term frequency and inverse document frequency metrics, and improving accuracy by selectively including the most relevant sentences, validated by a high ROGUE-1 score.",
    tags: ["Python", "NLP", "Text Summarization", "Keyword Extraction", "TF-IDF"],
    link: "https://github.com/vishalpatil7860/keyword-extraction-and-text-summarization-using-NLP",
    imageUrl: kets,
  },
  {
    title: "ADAS Performance Metrics: A Power BI Dashboard",
    description:
      "Crafted an extensive Power BI dashboard for Advanced Driver-Assistance Systems (ADAS) analysis, integrating a suite of visualization tools such as gauges, scatter plots, and donut charts, alongside a Paytern chart for anomaly detection to bolster predictive analytics and road safety initiatives.",
    tags: ["Data Analysis", "Power BI", "Dashboard", "Data Visualization"],
    link: "https://github.com/vishalpatil7860/ADAS-Performance-Metrics-A-Power-BI-Dashboard",
    imageUrl: adas,
  },
  {
    title: "OpenAI-Powered Document Search and Question-Answering System",
    description:
      "Engineered an OpenAI-driven search and Q&A system to query PDF documents, integrating pdfminer for text extraction, OpenAIEmbeddings for contextual understanding, and leveraging Chroma vector store with VectorDBQA that delivers precise responses to complex user inquiries",
    tags: ["OpenAI", "GPT", "LLM", "OpenAI Embeddings", "VectorDBQA", "Chroma Vector Store"],
    link: "https://github.com/vishalpatil7860/OpenAI-Powered-Document-Search-and-Question-Answering-System",
    imageUrl: qas,
  },
  {
    title: "Heart Disease Classifier Using Machine Learning Model",
    description:
      "Implemented and tuned various machine learning classifiers, including Logistic Regression, KNN, and Random Forest, to build a predictive model for heart disease diagnosis with 88.5% accuracy, utilizing key health metrics and GridSearchCV for hyperparameter optimization.",
    tags: ["Predictive Model", "Python", "Logistic Regression", "KNN", "Random Forest Classifier"],
    link: "https://github.com/vishalpatil7860/heart-disease-classifier",
    imageUrl: hdc,
  },
  {
    title: "HR Analytics Dashboard",
    description:
      "Developed an interactive HR Analytics Dashboard in Tableau, offering real-time filtering by education, gender, and field, and employed a range of visualization techniques—including Heatmaps, Pie, Bar, and Lollipop Charts—to translate public HR data into transparent and accurate analytical insights.",
    tags: ["Tableau", "Dashboard", "HR Data Analysis", "Data Visualization"],
    link: "https://github.com/vishalpatil7860/HR-Analytics-Dashboard-using-Tableau",
    imageUrl: had,
  },
  {
    title: "Credit Card Fraud Detection using Big Data",
    description:
      "Conducted a comprehensive exploratory analysis on over 300K data points, uncovering pivotal patterns that contributed to a 97% classification accuracy, developed Decision Tree model with 5-fold cross-validation achieving over 95% accuracy, and performed feature engineering with an 80% accuracy in predictive outcomes.",
    tags: ["Predictive Model", "Python", "Decision Tree", "Classification Model", "Big Data"],
    link: "https://github.com/vishalpatil7860/Credit-Card-Fraud-Detection-using-Big-Data",
    imageUrl: ccfd,
  },
] as const;

export const skillsData = [
  "Python",
  "R",
  "SQL",
  "TensorFlow",
  "Keras",
  "Matplotlib",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "Microsoft Power BI",
  "Tableau",
  "R-Studio",
  "Microsoft Excel",
  "Git",
  "Jira",
  "Azure Data Studio",
  "Jupyter Notebook",
  "Creativity",
  "Time Management",
  "Internet Research Skills",
  "Integrity",
  "Data Cleaning",
  "Prompt Engineering",
  "Applied Regression Analysis",
] as const;

