"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./lib/data.ts":
/*!*********************!*\
  !*** ./lib/data.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   experiencesData: function() { return /* binding */ experiencesData; },\n/* harmony export */   links: function() { return /* binding */ links; },\n/* harmony export */   projectsData: function() { return /* binding */ projectsData; },\n/* harmony export */   skillsData: function() { return /* binding */ skillsData; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_cg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/cg */ \"(app-client)/./node_modules/react-icons/cg/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ \"(app-client)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var react_icons_lu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/lu */ \"(app-client)/./node_modules/react-icons/lu/index.esm.js\");\n/* harmony import */ var _public_prs_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/prs.png */ \"(app-client)/./public/prs.png\");\n/* harmony import */ var _public_kets_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/kets.png */ \"(app-client)/./public/kets.png\");\n/* harmony import */ var _public_adas_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/adas.png */ \"(app-client)/./public/adas.png\");\n/* harmony import */ var _public_qas_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/qas.png */ \"(app-client)/./public/qas.png\");\n/* harmony import */ var _public_had_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/had.png */ \"(app-client)/./public/had.png\");\n/* harmony import */ var _public_ccfd_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/ccfd.png */ \"(app-client)/./public/ccfd.png\");\n/* harmony import */ var _public_hdc_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/hdc.jpg */ \"(app-client)/./public/hdc.jpg\");\n\n\n\n\n\n\n\n\n\n\n\nconst links = [\n    {\n        name: \"Home\",\n        hash: \"#home\"\n    },\n    {\n        name: \"About\",\n        hash: \"#about\"\n    },\n    {\n        name: \"Projects\",\n        hash: \"#projects\"\n    },\n    {\n        name: \"Skills\",\n        hash: \"#skills\"\n    },\n    {\n        name: \"Experience\",\n        hash: \"#experience\"\n    },\n    {\n        name: \"Contact\",\n        hash: \"#contact\"\n    }\n];\nconst experiencesData = [\n    {\n        title: \"M.Sc. in Data Science\",\n        location: \"University of Michigan-Dearborn\",\n        description: \"Relevant Coursework: Pattern Recognition and Neural Network, Artificial Intelligence, Database Systems, Natural Language Processing, Deep Learning\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_8__.LuGraduationCap),\n        date: \"2022 - Present\"\n    },\n    {\n        title: \"Data Science Intern\",\n        location: \" Pune, India\",\n        description: \"I worked as a Data Science and Business Intelligence Intern for 2 months. This internship program included working on different tools and technologies used by Data Scientists and Business Analysts.(Power BI, Excel, Python, etc.)\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_cg__WEBPACK_IMPORTED_MODULE_9__.CgWorkAlt),\n        date: \"2022 - 2022\"\n    },\n    {\n        title: \"Programmer Analyst\",\n        location: \"Pune, India\",\n        description: \"I'm now a full-stack developer working as a Programmer Analyst. My stack includes Angular JS, JAVA, SQL.\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__.FaReact),\n        date: \"2020 - 2022\"\n    },\n    {\n        title: \"B.E. in Computer Engineering\",\n        location: \"Savitribai Phule Pune University, India\",\n        description: \"Relevant Coursework: Data Analytics, Data Mining and Warehousing, Artificial Intelligence and Robotics, Database Management Systems, Business Intelligence\",\n        icon: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_lu__WEBPACK_IMPORTED_MODULE_8__.LuGraduationCap),\n        date: \"2016 - 2020\"\n    }\n];\nconst projectsData = [\n    {\n        title: \"Brain Tumor Segmentation using U-Net based Deep Learning Model\",\n        description: \"Developed a UNet-based deep learning model for Brain Tumor Segmentation from MRI scans, achieving a mean F1 score of 0.72958 across test images. This project contributes to medical image analysis and assists in accurate diagnosis and treatment planning for brain tumor patients.\",\n        tags: [\n            \"Python\",\n            \"Keras\",\n            \"Neural Network\",\n            \"Deep Learning\",\n            \"U-Net\",\n            \"CNN\",\n            \"Image Segmentation\"\n        ],\n        link: \"https://github.com/vishalpatil7860/Retail-Data-Driven-Product-Recommendation-Engine\",\n        imageUrl: _public_prs_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"Retail Data-Driven Product Recommendation Engine\",\n        description: \"Led the creation of a high-accuracy (98.34%) content-based recommendation system for e-commerce, leveraging Python, TensorFlow, and Keras, with advanced data preprocessing and serialization via scikit-learn and joblib, culminating in a robust Flask web application with an intuitive UI for superior product recommendation.\",\n        tags: [\n            \"Python\",\n            \"Keras\",\n            \"Neural Network\",\n            \"Deep Learning\",\n            \"Product Recommendation\",\n            \"Content-based Filtering\"\n        ],\n        link: \"https://github.com/vishalpatil7860/Retail-Data-Driven-Product-Recommendation-Engine\",\n        imageUrl: _public_prs_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    },\n    {\n        title: \"ADAS Performance Metrics: A Power BI Dashboard\",\n        description: \"Crafted an extensive Power BI dashboard for Advanced Driver-Assistance Systems (ADAS) analysis, integrating a suite of visualization tools such as gauges, scatter plots, and donut charts, alongside a Paytern chart for anomaly detection to bolster predictive analytics and road safety initiatives.\",\n        tags: [\n            \"Data Analysis\",\n            \"Power BI\",\n            \"Dashboard\",\n            \"Data Visualization\"\n        ],\n        link: \"https://github.com/vishalpatil7860/ADAS-Performance-Metrics-A-Power-BI-Dashboard\",\n        imageUrl: _public_adas_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    {\n        title: \"Keyword Extraction & Text Summarization using NLP\",\n        description: \"Enhanced a text summarization algorithm for heightened precision by refining the dataset, applying term frequency and inverse document frequency metrics, and improving accuracy by selectively including the most relevant sentences, validated by a high ROGUE-1 score.\",\n        tags: [\n            \"Python\",\n            \"NLP\",\n            \"Text Summarization\",\n            \"Keyword Extraction\",\n            \"TF-IDF\"\n        ],\n        link: \"https://github.com/vishalpatil7860/keyword-extraction-and-text-summarization-using-NLP\",\n        imageUrl: _public_kets_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    },\n    {\n        title: \"OpenAI-Powered Document Search and Question-Answering System\",\n        description: \"Engineered an OpenAI-driven search and Q&A system to query PDF documents, integrating pdfminer for text extraction, OpenAIEmbeddings for contextual understanding, and leveraging Chroma vector store with VectorDBQA that delivers precise responses to complex user inquiries\",\n        tags: [\n            \"OpenAI\",\n            \"GPT\",\n            \"LLM\",\n            \"OpenAI Embeddings\",\n            \"VectorDBQA\",\n            \"Chroma Vector Store\"\n        ],\n        link: \"https://github.com/vishalpatil7860/OpenAI-Powered-Document-Search-and-Question-Answering-System\",\n        imageUrl: _public_qas_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        title: \"Credit Card Fraud Detection using Big Data\",\n        description: \"Conducted a comprehensive exploratory analysis on over 300K data points, uncovering pivotal patterns that contributed to a 97% classification accuracy, developed Decision Tree model with 5-fold cross-validation achieving over 95% accuracy, and performed feature engineering with an 80% accuracy in predictive outcomes.\",\n        tags: [\n            \"Predictive Model\",\n            \"Python\",\n            \"Decision Tree\",\n            \"Classification Model\",\n            \"Big Data\"\n        ],\n        link: \"https://github.com/vishalpatil7860/Credit-Card-Fraud-Detection-using-Big-Data\",\n        imageUrl: _public_ccfd_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        title: \"Heart Disease Classifier Using Machine Learning Model\",\n        description: \"Implemented and tuned various machine learning classifiers, including Logistic Regression, KNN, and Random Forest, to build a predictive model for heart disease diagnosis with 88.5% accuracy, utilizing key health metrics and GridSearchCV for hyperparameter optimization.\",\n        tags: [\n            \"Predictive Model\",\n            \"Python\",\n            \"Logistic Regression\",\n            \"KNN\",\n            \"Random Forest Classifier\"\n        ],\n        link: \"https://github.com/vishalpatil7860/heart-disease-classifier\",\n        imageUrl: _public_hdc_jpg__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        title: \"HR Analytics Dashboard\",\n        description: \"Developed an interactive HR Analytics Dashboard in Tableau, offering real-time filtering by education, gender, and field, and employed a range of visualization techniques—including Heatmaps, Pie, Bar, and Lollipop Charts—to translate public HR data into transparent and accurate analytical insights.\",\n        tags: [\n            \"Tableau\",\n            \"Dashboard\",\n            \"HR Data Analysis\",\n            \"Data Visualization\"\n        ],\n        link: \"https://github.com/vishalpatil7860/HR-Analytics-Dashboard-using-Tableau\",\n        imageUrl: _public_had_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n];\nconst skillsData = [\n    \"Python\",\n    \"R\",\n    \"SQL\",\n    \"TensorFlow\",\n    \"Keras\",\n    \"Matplotlib\",\n    \"NumPy\",\n    \"Pandas\",\n    \"Scikit-learn\",\n    \"Microsoft Power BI\",\n    \"Tableau\",\n    \"R-Studio\",\n    \"Microsoft Excel\",\n    \"Git\",\n    \"Jira\",\n    \"Azure Data Studio\",\n    \"Jupyter Notebook\",\n    \"Creativity\",\n    \"Time Management\",\n    \"Internet Research Skills\",\n    \"Integrity\",\n    \"Data Cleaning\",\n    \"Prompt Engineering\",\n    \"Applied Regression Analysis\"\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vbGliL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNpQjtBQUNGO0FBQ1E7QUFJYjtBQUNFO0FBQ0E7QUFDRjtBQUNBO0FBQ0U7QUFDRjtBQUc3QixNQUFNVyxRQUFRO0lBQ25CO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtJQUNBO1FBQ0VELE1BQU07UUFDTkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLE1BQU07SUFDUjtDQUNELENBQVU7QUFFSixNQUFNQyxrQkFBa0I7SUFDN0I7UUFDRUMsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWxCLDBEQUFtQixDQUFDRywyREFBZUE7UUFDekNpQixNQUFNO0lBQ1I7SUFDQTtRQUNFTCxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsYUFDRTtRQUNGQyxNQUFNbEIsMERBQW1CLENBQUNDLHFEQUFTQTtRQUNuQ21CLE1BQU07SUFDUjtJQUNBO1FBQ0VMLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxhQUNFO1FBQ0ZDLE1BQU1sQiwwREFBbUIsQ0FBQ0Usb0RBQU9BO1FBQ2pDa0IsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsT0FBTztRQUNQQyxVQUFVO1FBQ1ZDLGFBQ0U7UUFDRkMsTUFBTWxCLDBEQUFtQixDQUFDRywyREFBZUE7UUFDekNpQixNQUFNO0lBQ1I7Q0FDRCxDQUFVO0FBRUosTUFBTUMsZUFBZTtJQUMxQjtRQUNFTixPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQVU7WUFBUztZQUFrQjtZQUFpQjtZQUFTO1lBQU87U0FBcUI7UUFDbEdDLE1BQU07UUFDTkMsVUFBVXBCLHVEQUFHQTtJQUNmO0lBQ0E7UUFDRVcsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFVO1lBQVM7WUFBa0I7WUFBaUI7WUFBMEI7U0FBMEI7UUFDakhDLE1BQU07UUFDTkMsVUFBVXBCLHVEQUFHQTtJQUNmO0lBQ0E7UUFDRVcsT0FBTztRQUNQRSxhQUNFO1FBQ0ZLLE1BQU07WUFBQztZQUFpQjtZQUFZO1lBQWE7U0FBcUI7UUFDdEVDLE1BQU07UUFDTkMsVUFBVWxCLHdEQUFJQTtJQUNoQjtJQUNBO1FBQ0VTLE9BQU87UUFDUEUsYUFDQTtRQUNBSyxNQUFNO1lBQUM7WUFBVTtZQUFPO1lBQXNCO1lBQXNCO1NBQVM7UUFDN0VDLE1BQU07UUFDTkMsVUFBVW5CLHdEQUFJQTtJQUNoQjtJQUVBO1FBQ0VVLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQUM7WUFBVTtZQUFPO1lBQU87WUFBcUI7WUFBYztTQUFzQjtRQUN4RkMsTUFBTTtRQUNOQyxVQUFVakIsdURBQUdBO0lBQ2Y7SUFDQTtRQUNFUSxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQW9CO1lBQVU7WUFBaUI7WUFBd0I7U0FBVztRQUN6RkMsTUFBTTtRQUNOQyxVQUFVZix3REFBSUE7SUFDaEI7SUFDQTtRQUNFTSxPQUFPO1FBQ1BFLGFBQ0U7UUFDRkssTUFBTTtZQUFDO1lBQW9CO1lBQVU7WUFBdUI7WUFBTztTQUEyQjtRQUM5RkMsTUFBTTtRQUNOQyxVQUFVZCx1REFBR0E7SUFDZjtJQUNBO1FBQ0VLLE9BQU87UUFDUEUsYUFDRTtRQUNGSyxNQUFNO1lBQUM7WUFBVztZQUFhO1lBQW9CO1NBQXFCO1FBQ3hFQyxNQUFNO1FBQ05DLFVBQVVoQix1REFBR0E7SUFDZjtDQUVELENBQVU7QUFFSixNQUFNaUIsYUFBYTtJQUN4QjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9kYXRhLnRzPzE2ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDZ1dvcmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcclxuaW1wb3J0IHsgRmFSZWFjdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBMdUdyYWR1YXRpb25DYXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvbHVcIjtcclxuaW1wb3J0IGNvcnBjb21tZW50SW1nIGZyb20gXCJAL3B1YmxpYy9jb3JwY29tbWVudC5wbmdcIjtcclxuaW1wb3J0IHJtdGRldkltZyBmcm9tIFwiQC9wdWJsaWMvcm10ZGV2LnBuZ1wiO1xyXG5pbXBvcnQgd29yZGFuYWx5dGljc0ltZyBmcm9tIFwiQC9wdWJsaWMvd29yZGFuYWx5dGljcy5wbmdcIjtcclxuaW1wb3J0IHBycyBmcm9tIFwiLi4vcHVibGljL3Bycy5wbmdcIjtcclxuaW1wb3J0IGtldHMgZnJvbSBcIi4uL3B1YmxpYy9rZXRzLnBuZ1wiO1xyXG5pbXBvcnQgYWRhcyBmcm9tIFwiLi4vcHVibGljL2FkYXMucG5nXCI7XHJcbmltcG9ydCBxYXMgZnJvbSBcIi4uL3B1YmxpYy9xYXMucG5nXCI7XHJcbmltcG9ydCBoYWQgZnJvbSBcIi4uL3B1YmxpYy9oYWQucG5nXCI7XHJcbmltcG9ydCBjY2ZkIGZyb20gXCIuLi9wdWJsaWMvY2NmZC5wbmdcIjtcclxuaW1wb3J0IGhkYyBmcm9tIFwiLi4vcHVibGljL2hkYy5qcGdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgbGlua3MgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJIb21lXCIsXHJcbiAgICBoYXNoOiBcIiNob21lXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkFib3V0XCIsXHJcbiAgICBoYXNoOiBcIiNhYm91dFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJQcm9qZWN0c1wiLFxyXG4gICAgaGFzaDogXCIjcHJvamVjdHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2tpbGxzXCIsXHJcbiAgICBoYXNoOiBcIiNza2lsbHNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRXhwZXJpZW5jZVwiLFxyXG4gICAgaGFzaDogXCIjZXhwZXJpZW5jZVwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJDb250YWN0XCIsXHJcbiAgICBoYXNoOiBcIiNjb250YWN0XCIsXHJcbiAgfSxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlc0RhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTS5TYy4gaW4gRGF0YSBTY2llbmNlXCIsXHJcbiAgICBsb2NhdGlvbjogXCJVbml2ZXJzaXR5IG9mIE1pY2hpZ2FuLURlYXJib3JuXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJSZWxldmFudCBDb3Vyc2V3b3JrOiBQYXR0ZXJuIFJlY29nbml0aW9uIGFuZCBOZXVyYWwgTmV0d29yaywgQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UsIERhdGFiYXNlIFN5c3RlbXMsIE5hdHVyYWwgTGFuZ3VhZ2UgUHJvY2Vzc2luZywgRGVlcCBMZWFybmluZ1wiLFxyXG4gICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChMdUdyYWR1YXRpb25DYXApLFxyXG4gICAgZGF0ZTogXCIyMDIyIC0gUHJlc2VudFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRGF0YSBTY2llbmNlIEludGVyblwiLFxyXG4gICAgbG9jYXRpb246IFwiIFB1bmUsIEluZGlhXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJJIHdvcmtlZCBhcyBhIERhdGEgU2NpZW5jZSBhbmQgQnVzaW5lc3MgSW50ZWxsaWdlbmNlIEludGVybiBmb3IgMiBtb250aHMuIFRoaXMgaW50ZXJuc2hpcCBwcm9ncmFtIGluY2x1ZGVkIHdvcmtpbmcgb24gZGlmZmVyZW50IHRvb2xzIGFuZCB0ZWNobm9sb2dpZXMgdXNlZCBieSBEYXRhIFNjaWVudGlzdHMgYW5kIEJ1c2luZXNzIEFuYWx5c3RzLihQb3dlciBCSSwgRXhjZWwsIFB5dGhvbiwgZXRjLilcIixcclxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2dXb3JrQWx0KSxcclxuICAgIGRhdGU6IFwiMjAyMiAtIDIwMjJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlByb2dyYW1tZXIgQW5hbHlzdFwiLFxyXG4gICAgbG9jYXRpb246IFwiUHVuZSwgSW5kaWFcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkknbSBub3cgYSBmdWxsLXN0YWNrIGRldmVsb3BlciB3b3JraW5nIGFzIGEgUHJvZ3JhbW1lciBBbmFseXN0LiBNeSBzdGFjayBpbmNsdWRlcyBBbmd1bGFyIEpTLCBKQVZBLCBTUUwuXCIsXHJcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEZhUmVhY3QpLFxyXG4gICAgZGF0ZTogXCIyMDIwIC0gMjAyMlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQi5FLiBpbiBDb21wdXRlciBFbmdpbmVlcmluZ1wiLFxyXG4gICAgbG9jYXRpb246IFwiU2F2aXRyaWJhaSBQaHVsZSBQdW5lIFVuaXZlcnNpdHksIEluZGlhXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJSZWxldmFudCBDb3Vyc2V3b3JrOiBEYXRhIEFuYWx5dGljcywgRGF0YSBNaW5pbmcgYW5kIFdhcmVob3VzaW5nLCBBcnRpZmljaWFsIEludGVsbGlnZW5jZSBhbmQgUm9ib3RpY3MsIERhdGFiYXNlIE1hbmFnZW1lbnQgU3lzdGVtcywgQnVzaW5lc3MgSW50ZWxsaWdlbmNlXCIsXHJcbiAgICBpY29uOiBSZWFjdC5jcmVhdGVFbGVtZW50KEx1R3JhZHVhdGlvbkNhcCksXHJcbiAgICBkYXRlOiBcIjIwMTYgLSAyMDIwXCIsXHJcbiAgfVxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzRGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJCcmFpbiBUdW1vciBTZWdtZW50YXRpb24gdXNpbmcgVS1OZXQgYmFzZWQgRGVlcCBMZWFybmluZyBNb2RlbFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRGV2ZWxvcGVkIGEgVU5ldC1iYXNlZCBkZWVwIGxlYXJuaW5nIG1vZGVsIGZvciBCcmFpbiBUdW1vciBTZWdtZW50YXRpb24gZnJvbSBNUkkgc2NhbnMsIGFjaGlldmluZyBhIG1lYW4gRjEgc2NvcmUgb2YgMC43Mjk1OCBhY3Jvc3MgdGVzdCBpbWFnZXMuIFRoaXMgcHJvamVjdCBjb250cmlidXRlcyB0byBtZWRpY2FsIGltYWdlIGFuYWx5c2lzIGFuZCBhc3Npc3RzIGluIGFjY3VyYXRlIGRpYWdub3NpcyBhbmQgdHJlYXRtZW50IHBsYW5uaW5nIGZvciBicmFpbiB0dW1vciBwYXRpZW50cy5cIixcclxuICAgIHRhZ3M6IFtcIlB5dGhvblwiLCBcIktlcmFzXCIsIFwiTmV1cmFsIE5ldHdvcmtcIiwgXCJEZWVwIExlYXJuaW5nXCIsIFwiVS1OZXRcIiwgXCJDTk5cIiwgXCJJbWFnZSBTZWdtZW50YXRpb25cIl0sXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92aXNoYWxwYXRpbDc4NjAvUmV0YWlsLURhdGEtRHJpdmVuLVByb2R1Y3QtUmVjb21tZW5kYXRpb24tRW5naW5lXCIsXHJcbiAgICBpbWFnZVVybDogcHJzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiUmV0YWlsIERhdGEtRHJpdmVuIFByb2R1Y3QgUmVjb21tZW5kYXRpb24gRW5naW5lXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJMZWQgdGhlIGNyZWF0aW9uIG9mIGEgaGlnaC1hY2N1cmFjeSAoOTguMzQlKSBjb250ZW50LWJhc2VkIHJlY29tbWVuZGF0aW9uIHN5c3RlbSBmb3IgZS1jb21tZXJjZSwgbGV2ZXJhZ2luZyBQeXRob24sIFRlbnNvckZsb3csIGFuZCBLZXJhcywgd2l0aCBhZHZhbmNlZCBkYXRhIHByZXByb2Nlc3NpbmcgYW5kIHNlcmlhbGl6YXRpb24gdmlhIHNjaWtpdC1sZWFybiBhbmQgam9ibGliLCBjdWxtaW5hdGluZyBpbiBhIHJvYnVzdCBGbGFzayB3ZWIgYXBwbGljYXRpb24gd2l0aCBhbiBpbnR1aXRpdmUgVUkgZm9yIHN1cGVyaW9yIHByb2R1Y3QgcmVjb21tZW5kYXRpb24uXCIsXHJcbiAgICB0YWdzOiBbXCJQeXRob25cIiwgXCJLZXJhc1wiLCBcIk5ldXJhbCBOZXR3b3JrXCIsIFwiRGVlcCBMZWFybmluZ1wiLCBcIlByb2R1Y3QgUmVjb21tZW5kYXRpb25cIiwgXCJDb250ZW50LWJhc2VkIEZpbHRlcmluZ1wiXSxcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Zpc2hhbHBhdGlsNzg2MC9SZXRhaWwtRGF0YS1Ecml2ZW4tUHJvZHVjdC1SZWNvbW1lbmRhdGlvbi1FbmdpbmVcIixcclxuICAgIGltYWdlVXJsOiBwcnMsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJBREFTIFBlcmZvcm1hbmNlIE1ldHJpY3M6IEEgUG93ZXIgQkkgRGFzaGJvYXJkXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJDcmFmdGVkIGFuIGV4dGVuc2l2ZSBQb3dlciBCSSBkYXNoYm9hcmQgZm9yIEFkdmFuY2VkIERyaXZlci1Bc3Npc3RhbmNlIFN5c3RlbXMgKEFEQVMpIGFuYWx5c2lzLCBpbnRlZ3JhdGluZyBhIHN1aXRlIG9mIHZpc3VhbGl6YXRpb24gdG9vbHMgc3VjaCBhcyBnYXVnZXMsIHNjYXR0ZXIgcGxvdHMsIGFuZCBkb251dCBjaGFydHMsIGFsb25nc2lkZSBhIFBheXRlcm4gY2hhcnQgZm9yIGFub21hbHkgZGV0ZWN0aW9uIHRvIGJvbHN0ZXIgcHJlZGljdGl2ZSBhbmFseXRpY3MgYW5kIHJvYWQgc2FmZXR5IGluaXRpYXRpdmVzLlwiLFxyXG4gICAgdGFnczogW1wiRGF0YSBBbmFseXNpc1wiLCBcIlBvd2VyIEJJXCIsIFwiRGFzaGJvYXJkXCIsIFwiRGF0YSBWaXN1YWxpemF0aW9uXCJdLFxyXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vdmlzaGFscGF0aWw3ODYwL0FEQVMtUGVyZm9ybWFuY2UtTWV0cmljcy1BLVBvd2VyLUJJLURhc2hib2FyZFwiLFxyXG4gICAgaW1hZ2VVcmw6IGFkYXMsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJLZXl3b3JkIEV4dHJhY3Rpb24gJiBUZXh0IFN1bW1hcml6YXRpb24gdXNpbmcgTkxQXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgIFwiRW5oYW5jZWQgYSB0ZXh0IHN1bW1hcml6YXRpb24gYWxnb3JpdGhtIGZvciBoZWlnaHRlbmVkIHByZWNpc2lvbiBieSByZWZpbmluZyB0aGUgZGF0YXNldCwgYXBwbHlpbmcgdGVybSBmcmVxdWVuY3kgYW5kIGludmVyc2UgZG9jdW1lbnQgZnJlcXVlbmN5IG1ldHJpY3MsIGFuZCBpbXByb3ZpbmcgYWNjdXJhY3kgYnkgc2VsZWN0aXZlbHkgaW5jbHVkaW5nIHRoZSBtb3N0IHJlbGV2YW50IHNlbnRlbmNlcywgdmFsaWRhdGVkIGJ5IGEgaGlnaCBST0dVRS0xIHNjb3JlLlwiLFxyXG4gICAgdGFnczogW1wiUHl0aG9uXCIsIFwiTkxQXCIsIFwiVGV4dCBTdW1tYXJpemF0aW9uXCIsIFwiS2V5d29yZCBFeHRyYWN0aW9uXCIsIFwiVEYtSURGXCJdLFxyXG4gICAgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vdmlzaGFscGF0aWw3ODYwL2tleXdvcmQtZXh0cmFjdGlvbi1hbmQtdGV4dC1zdW1tYXJpemF0aW9uLXVzaW5nLU5MUFwiLFxyXG4gICAgaW1hZ2VVcmw6IGtldHMsXHJcbiAgfSxcclxuICBcclxuICB7XHJcbiAgICB0aXRsZTogXCJPcGVuQUktUG93ZXJlZCBEb2N1bWVudCBTZWFyY2ggYW5kIFF1ZXN0aW9uLUFuc3dlcmluZyBTeXN0ZW1cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkVuZ2luZWVyZWQgYW4gT3BlbkFJLWRyaXZlbiBzZWFyY2ggYW5kIFEmQSBzeXN0ZW0gdG8gcXVlcnkgUERGIGRvY3VtZW50cywgaW50ZWdyYXRpbmcgcGRmbWluZXIgZm9yIHRleHQgZXh0cmFjdGlvbiwgT3BlbkFJRW1iZWRkaW5ncyBmb3IgY29udGV4dHVhbCB1bmRlcnN0YW5kaW5nLCBhbmQgbGV2ZXJhZ2luZyBDaHJvbWEgdmVjdG9yIHN0b3JlIHdpdGggVmVjdG9yREJRQSB0aGF0IGRlbGl2ZXJzIHByZWNpc2UgcmVzcG9uc2VzIHRvIGNvbXBsZXggdXNlciBpbnF1aXJpZXNcIixcclxuICAgIHRhZ3M6IFtcIk9wZW5BSVwiLCBcIkdQVFwiLCBcIkxMTVwiLCBcIk9wZW5BSSBFbWJlZGRpbmdzXCIsIFwiVmVjdG9yREJRQVwiLCBcIkNocm9tYSBWZWN0b3IgU3RvcmVcIl0sXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92aXNoYWxwYXRpbDc4NjAvT3BlbkFJLVBvd2VyZWQtRG9jdW1lbnQtU2VhcmNoLWFuZC1RdWVzdGlvbi1BbnN3ZXJpbmctU3lzdGVtXCIsXHJcbiAgICBpbWFnZVVybDogcWFzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiQ3JlZGl0IENhcmQgRnJhdWQgRGV0ZWN0aW9uIHVzaW5nIEJpZyBEYXRhXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJDb25kdWN0ZWQgYSBjb21wcmVoZW5zaXZlIGV4cGxvcmF0b3J5IGFuYWx5c2lzIG9uIG92ZXIgMzAwSyBkYXRhIHBvaW50cywgdW5jb3ZlcmluZyBwaXZvdGFsIHBhdHRlcm5zIHRoYXQgY29udHJpYnV0ZWQgdG8gYSA5NyUgY2xhc3NpZmljYXRpb24gYWNjdXJhY3ksIGRldmVsb3BlZCBEZWNpc2lvbiBUcmVlIG1vZGVsIHdpdGggNS1mb2xkIGNyb3NzLXZhbGlkYXRpb24gYWNoaWV2aW5nIG92ZXIgOTUlIGFjY3VyYWN5LCBhbmQgcGVyZm9ybWVkIGZlYXR1cmUgZW5naW5lZXJpbmcgd2l0aCBhbiA4MCUgYWNjdXJhY3kgaW4gcHJlZGljdGl2ZSBvdXRjb21lcy5cIixcclxuICAgIHRhZ3M6IFtcIlByZWRpY3RpdmUgTW9kZWxcIiwgXCJQeXRob25cIiwgXCJEZWNpc2lvbiBUcmVlXCIsIFwiQ2xhc3NpZmljYXRpb24gTW9kZWxcIiwgXCJCaWcgRGF0YVwiXSxcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Zpc2hhbHBhdGlsNzg2MC9DcmVkaXQtQ2FyZC1GcmF1ZC1EZXRlY3Rpb24tdXNpbmctQmlnLURhdGFcIixcclxuICAgIGltYWdlVXJsOiBjY2ZkLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSGVhcnQgRGlzZWFzZSBDbGFzc2lmaWVyIFVzaW5nIE1hY2hpbmUgTGVhcm5pbmcgTW9kZWxcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkltcGxlbWVudGVkIGFuZCB0dW5lZCB2YXJpb3VzIG1hY2hpbmUgbGVhcm5pbmcgY2xhc3NpZmllcnMsIGluY2x1ZGluZyBMb2dpc3RpYyBSZWdyZXNzaW9uLCBLTk4sIGFuZCBSYW5kb20gRm9yZXN0LCB0byBidWlsZCBhIHByZWRpY3RpdmUgbW9kZWwgZm9yIGhlYXJ0IGRpc2Vhc2UgZGlhZ25vc2lzIHdpdGggODguNSUgYWNjdXJhY3ksIHV0aWxpemluZyBrZXkgaGVhbHRoIG1ldHJpY3MgYW5kIEdyaWRTZWFyY2hDViBmb3IgaHlwZXJwYXJhbWV0ZXIgb3B0aW1pemF0aW9uLlwiLFxyXG4gICAgdGFnczogW1wiUHJlZGljdGl2ZSBNb2RlbFwiLCBcIlB5dGhvblwiLCBcIkxvZ2lzdGljIFJlZ3Jlc3Npb25cIiwgXCJLTk5cIiwgXCJSYW5kb20gRm9yZXN0IENsYXNzaWZpZXJcIl0sXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92aXNoYWxwYXRpbDc4NjAvaGVhcnQtZGlzZWFzZS1jbGFzc2lmaWVyXCIsXHJcbiAgICBpbWFnZVVybDogaGRjLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSFIgQW5hbHl0aWNzIERhc2hib2FyZFwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiRGV2ZWxvcGVkIGFuIGludGVyYWN0aXZlIEhSIEFuYWx5dGljcyBEYXNoYm9hcmQgaW4gVGFibGVhdSwgb2ZmZXJpbmcgcmVhbC10aW1lIGZpbHRlcmluZyBieSBlZHVjYXRpb24sIGdlbmRlciwgYW5kIGZpZWxkLCBhbmQgZW1wbG95ZWQgYSByYW5nZSBvZiB2aXN1YWxpemF0aW9uIHRlY2huaXF1ZXPigJRpbmNsdWRpbmcgSGVhdG1hcHMsIFBpZSwgQmFyLCBhbmQgTG9sbGlwb3AgQ2hhcnRz4oCUdG8gdHJhbnNsYXRlIHB1YmxpYyBIUiBkYXRhIGludG8gdHJhbnNwYXJlbnQgYW5kIGFjY3VyYXRlIGFuYWx5dGljYWwgaW5zaWdodHMuXCIsXHJcbiAgICB0YWdzOiBbXCJUYWJsZWF1XCIsIFwiRGFzaGJvYXJkXCIsIFwiSFIgRGF0YSBBbmFseXNpc1wiLCBcIkRhdGEgVmlzdWFsaXphdGlvblwiXSxcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL3Zpc2hhbHBhdGlsNzg2MC9IUi1BbmFseXRpY3MtRGFzaGJvYXJkLXVzaW5nLVRhYmxlYXVcIixcclxuICAgIGltYWdlVXJsOiBoYWQsXHJcbiAgfSxcclxuICBcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHNEYXRhID0gW1xyXG4gIFwiUHl0aG9uXCIsXHJcbiAgXCJSXCIsXHJcbiAgXCJTUUxcIixcclxuICBcIlRlbnNvckZsb3dcIixcclxuICBcIktlcmFzXCIsXHJcbiAgXCJNYXRwbG90bGliXCIsXHJcbiAgXCJOdW1QeVwiLFxyXG4gIFwiUGFuZGFzXCIsXHJcbiAgXCJTY2lraXQtbGVhcm5cIixcclxuICBcIk1pY3Jvc29mdCBQb3dlciBCSVwiLFxyXG4gIFwiVGFibGVhdVwiLFxyXG4gIFwiUi1TdHVkaW9cIixcclxuICBcIk1pY3Jvc29mdCBFeGNlbFwiLFxyXG4gIFwiR2l0XCIsXHJcbiAgXCJKaXJhXCIsXHJcbiAgXCJBenVyZSBEYXRhIFN0dWRpb1wiLFxyXG4gIFwiSnVweXRlciBOb3RlYm9va1wiLFxyXG4gIFwiQ3JlYXRpdml0eVwiLFxyXG4gIFwiVGltZSBNYW5hZ2VtZW50XCIsXHJcbiAgXCJJbnRlcm5ldCBSZXNlYXJjaCBTa2lsbHNcIixcclxuICBcIkludGVncml0eVwiLFxyXG4gIFwiRGF0YSBDbGVhbmluZ1wiLFxyXG4gIFwiUHJvbXB0IEVuZ2luZWVyaW5nXCIsXHJcbiAgXCJBcHBsaWVkIFJlZ3Jlc3Npb24gQW5hbHlzaXNcIixcclxuXSBhcyBjb25zdDtcclxuXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNnV29ya0FsdCIsIkZhUmVhY3QiLCJMdUdyYWR1YXRpb25DYXAiLCJwcnMiLCJrZXRzIiwiYWRhcyIsInFhcyIsImhhZCIsImNjZmQiLCJoZGMiLCJsaW5rcyIsIm5hbWUiLCJoYXNoIiwiZXhwZXJpZW5jZXNEYXRhIiwidGl0bGUiLCJsb2NhdGlvbiIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImNyZWF0ZUVsZW1lbnQiLCJkYXRlIiwicHJvamVjdHNEYXRhIiwidGFncyIsImxpbmsiLCJpbWFnZVVybCIsInNraWxsc0RhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./lib/data.ts\n"));

/***/ })

});