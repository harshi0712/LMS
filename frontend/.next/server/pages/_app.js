"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=ListItemButton,ListItemIcon!=!./node_modules/@mui/material/index.js":
/*!*****************************************************************************************************!*\
  !*** __barrel_optimize__?names=ListItemButton,ListItemIcon!=!./node_modules/@mui/material/index.js ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListItemButton: () => (/* reexport safe */ _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   ListItemIcon: () => (/* reexport safe */ _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListItemButton/index.js */ \"./node_modules/@mui/material/ListItemButton/index.js\");\n/* harmony import */ var _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItemIcon/index.js */ \"./node_modules/@mui/material/ListItemIcon/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_0__, _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_ListItemButton_index_js__WEBPACK_IMPORTED_MODULE_0__, _ListItemIcon_index_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1MaXN0SXRlbUJ1dHRvbixMaXN0SXRlbUljb24hPSEuL25vZGVfbW9kdWxlcy9AbXVpL21hdGVyaWFsL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3FFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9pbmRleC5qcz81OGFmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0SXRlbUJ1dHRvbiB9IGZyb20gXCIuL0xpc3RJdGVtQnV0dG9uL2luZGV4LmpzXCJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEl0ZW1JY29uIH0gZnJvbSBcIi4vTGlzdEl0ZW1JY29uL2luZGV4LmpzXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=ListItemButton,ListItemIcon!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./src/components/header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Drawer */ \"@mui/material/Drawer\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/List */ \"@mui/material/List\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItem */ \"@mui/material/ListItem\");\n/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemText */ \"@mui/material/ListItemText\");\n/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _barrel_optimize_names_ListItemButton_ListItemIcon_mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! __barrel_optimize__?names=ListItemButton,ListItemIcon!=!@mui/material */ \"__barrel_optimize__?names=ListItemButton,ListItemIcon!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/useAuth */ \"./src/hooks/useAuth.ts\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/MoveToInbox */ \"@mui/icons-material/MoveToInbox\");\n/* harmony import */ var _mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Mail */ \"@mui/icons-material/Mail\");\n/* harmony import */ var _mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_ListItemButton_ListItemIcon_mui_material__WEBPACK_IMPORTED_MODULE_17__]);\n_barrel_optimize_names_ListItemButton_ListItemIcon_mui_material__WEBPACK_IMPORTED_MODULE_17__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Import Link from Next.js\n\nconst ButtonAppBar = ()=>{\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_16__.useRouter)();\n    const adminOptions = [\n        {\n            name: \"Dashboard\",\n            url: \"/dashboard\"\n        },\n        {\n            name: \"User Management\",\n            url: \"/user\"\n        },\n        {\n            name: \"Students\",\n            url: \"/dashboard/StudentDashboard\"\n        },\n        {\n            name: \"Courses\",\n            url: \"/course\"\n        },\n        {\n            name: \"Setting\",\n            url: \"/setting\"\n        }\n    ];\n    const instructorOptions = [\n        {\n            name: \"Dashboard\",\n            url: \"/dashboard\"\n        },\n        {\n            name: \"Students\",\n            url: \"/dashboard/StudentDashboard\"\n        },\n        {\n            name: \"Courses\",\n            url: \"/course\"\n        },\n        {\n            name: \"Setting\",\n            url: \"/setting\"\n        }\n    ];\n    const studentOptions = [\n        {\n            name: \"Dashboard\",\n            url: \"/dashboard\"\n        },\n        {\n            name: \"Courses\",\n            url: \"/course\"\n        }\n    ];\n    const { isAuthenticated, role } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_12__[\"default\"])();\n    const [optionList, setOptionList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // Update state type to Option[]\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (role === \"admin\") {\n            setOptionList(adminOptions);\n        } else if (role === \"instructor\") {\n            setOptionList(instructorOptions);\n        } else if (role === \"student\") {\n            setOptionList(studentOptions);\n        }\n    }, [\n        role,\n        isAuthenticated\n    ]);\n    const toggleDrawer = (open)=>(event)=>{\n            if (event.type === \"keydown\" && event.key === \"Tab\") {\n                return;\n            }\n            setOpen(open);\n        };\n    const list = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n            sx: {\n                width: 250\n            },\n            role: \"presentation\",\n            onClick: toggleDrawer(false),\n            onKeyDown: toggleDrawer(false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_List__WEBPACK_IMPORTED_MODULE_9___default()), {\n                children: optionList.map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10___default()), {\n                        disablePadding: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ListItemButton_ListItemIcon_mui_material__WEBPACK_IMPORTED_MODULE_17__.ListItemButton, {\n                            component: (next_link__WEBPACK_IMPORTED_MODULE_15___default()),\n                            href: option.url,\n                            passHref: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ListItemButton_ListItemIcon_mui_material__WEBPACK_IMPORTED_MODULE_17__.ListItemIcon, {\n                                    children: index % 2 === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_MoveToInbox__WEBPACK_IMPORTED_MODULE_13___default()), {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 36\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Mail__WEBPACK_IMPORTED_MODULE_14___default()), {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 52\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11___default()), {\n                                    primary: option.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined)\n                    }, option.name, false, {\n                        fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n            lineNumber: 71,\n            columnNumber: 5\n        }, undefined);\n    const handleLogout = ()=>{\n        localStorage.clear();\n        window.location.assign(\"/auth/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default()), {\n        sx: {\n            flexGrow: 1\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_2___default()), {\n                position: \"static\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            size: \"large\",\n                            edge: \"start\",\n                            color: \"inherit\",\n                            \"aria-label\": \"menu\",\n                            onClick: toggleDrawer(true),\n                            sx: {\n                                mr: 2\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, undefined),\n                        isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            color: \"inherit\",\n                            onClick: handleLogout,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 112,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            color: \"inherit\",\n                            onClick: ()=>router.push(\"/auth/login\"),\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            isAuthenticated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_8___default()), {\n                anchor: \"left\",\n                open: open,\n                onClose: toggleDrawer(false),\n                children: list()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n                lineNumber: 117,\n                columnNumber: 27\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\components\\\\header\\\\index.tsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonAppBar);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNUO0FBQ047QUFDUTtBQUNGO0FBQ1E7QUFDRjtBQUNOO0FBQ0o7QUFDUTtBQUNRO0FBQ087QUFDbkI7QUFDYztBQUNSO0FBQ25CLENBQUMsMkJBQTJCO0FBQ2pCO0FBUXhDLE1BQU1vQixlQUF5QjtJQUM3QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQSxDQUFVO0lBQzFDLE1BQU1xQixTQUFTSix1REFBU0E7SUFFeEIsTUFBTUssZUFBeUI7UUFDN0I7WUFBRUMsTUFBTTtZQUFhQyxLQUFLO1FBQWE7UUFDdkM7WUFBRUQsTUFBTTtZQUFtQkMsS0FBSztRQUFRO1FBQ3hDO1lBQUVELE1BQU07WUFBWUMsS0FBSztRQUE4QjtRQUN2RDtZQUFFRCxNQUFNO1lBQVdDLEtBQUs7UUFBVTtRQUNsQztZQUFFRCxNQUFNO1lBQVdDLEtBQUs7UUFBVztLQUNwQztJQUVELE1BQU1DLG9CQUE4QjtRQUNsQztZQUFFRixNQUFNO1lBQWFDLEtBQUs7UUFBYTtRQUN2QztZQUFFRCxNQUFNO1lBQVlDLEtBQUs7UUFBOEI7UUFDdkQ7WUFBRUQsTUFBTTtZQUFXQyxLQUFLO1FBQVU7UUFDbEM7WUFBRUQsTUFBTTtZQUFXQyxLQUFLO1FBQVc7S0FDcEM7SUFFRCxNQUFNRSxpQkFBMkI7UUFDL0I7WUFBRUgsTUFBTTtZQUFhQyxLQUFLO1FBQWE7UUFDdkM7WUFBRUQsTUFBTTtZQUFXQyxLQUFLO1FBQVU7S0FFbkM7SUFFRCxNQUFNLEVBQUVHLGVBQWUsRUFBRUMsSUFBSSxFQUFFLEdBQUdmLDJEQUFPQTtJQUN6QyxNQUFNLENBQUNnQixZQUFZQyxjQUFjLEdBQUc5QiwrQ0FBUUEsQ0FBVyxFQUFFLEdBQUcsZ0NBQWdDO0lBRTVGRCxnREFBU0EsQ0FBQztRQUNSLElBQUk2QixTQUFTLFNBQVM7WUFDcEJFLGNBQWNSO1FBQ2hCLE9BQU8sSUFBSU0sU0FBUyxjQUFjO1lBQ2hDRSxjQUFjTDtRQUNoQixPQUFPLElBQUlHLFNBQVMsV0FBVztZQUM3QkUsY0FBY0o7UUFDaEI7SUFDRixHQUFHO1FBQUNFO1FBQUtEO0tBQWdCO0lBRXpCLE1BQU1JLGVBQWUsQ0FBQ1osT0FBa0IsQ0FBQ2E7WUFDdkMsSUFBSUEsTUFBTUMsSUFBSSxLQUFLLGFBQWEsTUFBK0JDLEdBQUcsS0FBSyxPQUFPO2dCQUM1RTtZQUNGO1lBQ0FkLFFBQVFEO1FBQ1Y7SUFFQSxNQUFNZ0IsT0FBTyxrQkFDWCw4REFBQ2pDLDBEQUFHQTtZQUNGa0MsSUFBSTtnQkFBRUMsT0FBTztZQUFJO1lBQ2pCVCxNQUFLO1lBQ0xVLFNBQVNQLGFBQWE7WUFDdEJRLFdBQVdSLGFBQWE7c0JBRXhCLDRFQUFDdkIsMkRBQUlBOzBCQUNGcUIsV0FBV1csR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUN2Qiw4REFBQ2pDLGdFQUFRQTt3QkFBbUJrQyxjQUFjO2tDQUN4Qyw0RUFBQ2hDLDRHQUFjQTs0QkFBQ2lDLFdBQVc1QixtREFBSUE7NEJBQUU2QixNQUFNSixPQUFPakIsR0FBRzs0QkFBRXNCLFFBQVE7OzhDQUN6RCw4REFBQ2xDLDBHQUFZQTs4Q0FDVjhCLFFBQVEsTUFBTSxrQkFBSSw4REFBQzVCLHlFQUFTQTs7OztrRUFBTSw4REFBQ0Msa0VBQVFBOzs7Ozs7Ozs7OzhDQUU5Qyw4REFBQ0wsb0VBQVlBO29DQUFDcUMsU0FBU04sT0FBT2xCLElBQUk7Ozs7Ozs7Ozs7Ozt1QkFMdkJrQixPQUFPbEIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0lBYWxDLE1BQU15QixlQUFlO1FBQ25CQyxhQUFhQyxLQUFLO1FBQ2xCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztJQUN6QjtJQUVBLHFCQUNFLDhEQUFDbkQsMERBQUdBO1FBQUNrQyxJQUFJO1lBQUVrQixVQUFVO1FBQUU7OzBCQUNyQiw4REFBQ3JELDZEQUFNQTtnQkFBQ3NELFVBQVM7MEJBQ2YsNEVBQUNwRCw4REFBT0E7O3NDQUNOLDhEQUFDRSxpRUFBVUE7NEJBQ1RtRCxNQUFLOzRCQUNMQyxNQUFLOzRCQUNMQyxPQUFNOzRCQUNOQyxjQUFXOzRCQUNYckIsU0FBU1AsYUFBYTs0QkFDdEJLLElBQUk7Z0NBQUV3QixJQUFJOzRCQUFFO3NDQUVaLDRFQUFDdEQsaUVBQVFBOzs7Ozs7Ozs7O3dCQUVWcUIsZ0NBQ0MsOERBQUN2Qiw2REFBTUE7NEJBQUNzRCxPQUFNOzRCQUFXcEIsU0FBU1U7c0NBQWM7Ozs7O3NEQUNoRCw4REFBQzVDLDZEQUFNQTs0QkFBQ3NELE9BQU07NEJBQVVwQixTQUFTLElBQU1qQixPQUFPd0MsSUFBSSxDQUFDO3NDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJeEVsQyxpQ0FBbUIsOERBQUNwQiw2REFBTUE7Z0JBQ3pCdUQsUUFBTztnQkFDUDNDLE1BQU1BO2dCQUNONEMsU0FBU2hDLGFBQWE7MEJBRXJCSTs7Ozs7Ozs7Ozs7O0FBSVQ7QUFFQSxpRUFBZWpCLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9pbmRleC50c3g/MTI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEFwcEJhciBmcm9tICdAbXVpL21hdGVyaWFsL0FwcEJhcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2xiYXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTWVudSc7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EcmF3ZXInO1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xyXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG11aS9tYXRlcmlhbC9MaXN0SXRlbVRleHQnO1xyXG5pbXBvcnQgeyBMaXN0SXRlbUJ1dHRvbiwgTGlzdEl0ZW1JY29uIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUF1dGgnO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW92ZVRvSW5ib3gnO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9NYWlsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJzsgLy8gSW1wb3J0IExpbmsgZnJvbSBOZXh0LmpzXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gRGVmaW5lIHRoZSB0eXBlIGZvciBuYXZpZ2F0aW9uIG9wdGlvbnNcclxuaW50ZXJmYWNlIE9wdGlvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25BcHBCYXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgYWRtaW5PcHRpb25zOiBPcHRpb25bXSA9IFtcclxuICAgIHsgbmFtZTogJ0Rhc2hib2FyZCcsIHVybDogJy9kYXNoYm9hcmQnIH0sXHJcbiAgICB7IG5hbWU6ICdVc2VyIE1hbmFnZW1lbnQnLCB1cmw6ICcvdXNlcicgfSxcclxuICAgIHsgbmFtZTogJ1N0dWRlbnRzJywgdXJsOiAnL2Rhc2hib2FyZC9TdHVkZW50RGFzaGJvYXJkJyB9LFxyXG4gICAgeyBuYW1lOiAnQ291cnNlcycsIHVybDogJy9jb3Vyc2UnIH0sXHJcbiAgICB7IG5hbWU6ICdTZXR0aW5nJywgdXJsOiAnL3NldHRpbmcnIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgaW5zdHJ1Y3Rvck9wdGlvbnM6IE9wdGlvbltdID0gW1xyXG4gICAgeyBuYW1lOiAnRGFzaGJvYXJkJywgdXJsOiAnL2Rhc2hib2FyZCcgfSxcclxuICAgIHsgbmFtZTogJ1N0dWRlbnRzJywgdXJsOiAnL2Rhc2hib2FyZC9TdHVkZW50RGFzaGJvYXJkJyB9LFxyXG4gICAgeyBuYW1lOiAnQ291cnNlcycsIHVybDogJy9jb3Vyc2UnIH0sXHJcbiAgICB7IG5hbWU6ICdTZXR0aW5nJywgdXJsOiAnL3NldHRpbmcnIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc3R1ZGVudE9wdGlvbnM6IE9wdGlvbltdID0gW1xyXG4gICAgeyBuYW1lOiAnRGFzaGJvYXJkJywgdXJsOiAnL2Rhc2hib2FyZCcgfSxcclxuICAgIHsgbmFtZTogJ0NvdXJzZXMnLCB1cmw6ICcvY291cnNlJyB9LFxyXG4gXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHJvbGUgfSA9IHVzZUF1dGgoKTtcclxuICBjb25zdCBbb3B0aW9uTGlzdCwgc2V0T3B0aW9uTGlzdF0gPSB1c2VTdGF0ZTxPcHRpb25bXT4oW10pOyAvLyBVcGRhdGUgc3RhdGUgdHlwZSB0byBPcHRpb25bXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvbGUgPT09ICdhZG1pbicpIHtcclxuICAgICAgc2V0T3B0aW9uTGlzdChhZG1pbk9wdGlvbnMpO1xyXG4gICAgfSBlbHNlIGlmIChyb2xlID09PSAnaW5zdHJ1Y3RvcicpIHtcclxuICAgICAgc2V0T3B0aW9uTGlzdChpbnN0cnVjdG9yT3B0aW9ucyk7XHJcbiAgICB9IGVsc2UgaWYgKHJvbGUgPT09ICdzdHVkZW50Jykge1xyXG4gICAgICBzZXRPcHRpb25MaXN0KHN0dWRlbnRPcHRpb25zKTtcclxuICAgIH1cclxuICB9LCBbcm9sZSxpc0F1dGhlbnRpY2F0ZWRdKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlRHJhd2VyID0gKG9wZW46IGJvb2xlYW4pID0+IChldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudCB8IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicgJiYgKGV2ZW50IGFzIFJlYWN0LktleWJvYXJkRXZlbnQpLmtleSA9PT0gJ1RhYicpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0T3BlbihvcGVuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsaXN0ID0gKCkgPT4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzeD17eyB3aWR0aDogMjUwIH19XHJcbiAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIoZmFsc2UpfVxyXG4gICAgICBvbktleURvd249e3RvZ2dsZURyYXdlcihmYWxzZSl9XHJcbiAgICA+XHJcbiAgICAgIDxMaXN0PlxyXG4gICAgICAgIHtvcHRpb25MaXN0Lm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPExpc3RJdGVtIGtleT17b3B0aW9uLm5hbWV9IGRpc2FibGVQYWRkaW5nPlxyXG4gICAgICAgICAgICA8TGlzdEl0ZW1CdXR0b24gY29tcG9uZW50PXtMaW5rfSBocmVmPXtvcHRpb24udXJsfSBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAge2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtvcHRpb24ubmFtZX0gLz5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cclxuICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvTGlzdD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXHJcbiAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKCcvYXV0aC9sb2dpbicpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSB9fT5cclxuICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxyXG4gICAgICAgIDxUb29sYmFyPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1lbnVcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcmF3ZXIodHJ1ZSl9XHJcbiAgICAgICAgICAgIHN4PXt7IG1yOiAyIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51SWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiICBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZ291dDwvQnV0dG9uPiA6IFxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYXV0aC9sb2dpbicpfT5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgJiYgPERyYXdlclxyXG4gICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgb25DbG9zZT17dG9nZ2xlRHJhd2VyKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaXN0KCl9XHJcbiAgICAgIDwvRHJhd2VyPn1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25BcHBCYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJNZW51SWNvbiIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkxpc3RJdGVtVGV4dCIsIkxpc3RJdGVtQnV0dG9uIiwiTGlzdEl0ZW1JY29uIiwidXNlQXV0aCIsIkluYm94SWNvbiIsIk1haWxJY29uIiwiTGluayIsInVzZVJvdXRlciIsIkJ1dHRvbkFwcEJhciIsIm9wZW4iLCJzZXRPcGVuIiwicm91dGVyIiwiYWRtaW5PcHRpb25zIiwibmFtZSIsInVybCIsImluc3RydWN0b3JPcHRpb25zIiwic3R1ZGVudE9wdGlvbnMiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyb2xlIiwib3B0aW9uTGlzdCIsInNldE9wdGlvbkxpc3QiLCJ0b2dnbGVEcmF3ZXIiLCJldmVudCIsInR5cGUiLCJrZXkiLCJsaXN0Iiwic3giLCJ3aWR0aCIsIm9uQ2xpY2siLCJvbktleURvd24iLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImRpc2FibGVQYWRkaW5nIiwiY29tcG9uZW50IiwiaHJlZiIsInBhc3NIcmVmIiwicHJpbWFyeSIsImhhbmRsZUxvZ291dCIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwid2luZG93IiwibG9jYXRpb24iLCJhc3NpZ24iLCJmbGV4R3JvdyIsInBvc2l0aW9uIiwic2l6ZSIsImVkZ2UiLCJjb2xvciIsImFyaWEtbGFiZWwiLCJtciIsInB1c2giLCJhbmNob3IiLCJvbkNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header/index.tsx\n");

/***/ }),

/***/ "./src/hooks/useAuth.ts":
/*!******************************!*\
  !*** ./src/hooks/useAuth.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAuth = ()=>{\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // This block will only run on the client side\n        const token = localStorage.getItem(\"token\");\n        const role = localStorage.getItem(\"role\"); // Assuming you store role in localStorage\n        setToken(token);\n        setIsAuthenticated(Boolean(token));\n        setRole(role);\n    }, []);\n    return {\n        isAuthenticated,\n        role,\n        token\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFFNUMsTUFBTUUsVUFBVTtJQUNkLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR0gsK0NBQVFBLENBQVU7SUFDaEUsTUFBTSxDQUFDSSxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFnQjtJQUNoRCxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQWdCO0lBRWxERCxnREFBU0EsQ0FBQztRQUNSLDhDQUE4QztRQUM5QyxNQUFNTyxRQUFRRSxhQUFhQyxPQUFPLENBQUM7UUFDbkMsTUFBTUwsT0FBT0ksYUFBYUMsT0FBTyxDQUFDLFNBQVMsMENBQTBDO1FBRXJGRixTQUFTRDtRQUNUSCxtQkFBbUJPLFFBQVFKO1FBQzNCRCxRQUFRRDtJQUNWLEdBQUcsRUFBRTtJQUVMLE9BQU87UUFBRUY7UUFBaUJFO1FBQU1FO0lBQU07QUFDeEM7QUFFQSxpRUFBZUwsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL2hvb2tzL3VzZUF1dGgudHM/M2MxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRJc0F1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFtyb2xlLCBzZXRSb2xlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBUaGlzIGJsb2NrIHdpbGwgb25seSBydW4gb24gdGhlIGNsaWVudCBzaWRlXHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgY29uc3Qgcm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2xlJyk7IC8vIEFzc3VtaW5nIHlvdSBzdG9yZSByb2xlIGluIGxvY2FsU3RvcmFnZVxyXG5cclxuICAgIHNldFRva2VuKHRva2VuKTtcclxuICAgIHNldElzQXV0aGVudGljYXRlZChCb29sZWFuKHRva2VuKSk7XHJcbiAgICBzZXRSb2xlKHJvbGUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHsgaXNBdXRoZW50aWNhdGVkLCByb2xlLCB0b2tlbiB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlQXV0aDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXV0aCIsImlzQXV0aGVudGljYXRlZCIsInNldElzQXV0aGVudGljYXRlZCIsInJvbGUiLCJzZXRSb2xlIiwidG9rZW4iLCJzZXRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJCb29sZWFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useAuth.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ \"./src/components/header/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_header__WEBPACK_IMPORTED_MODULE_3__]);\n_components_header__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// import \"./styles/globals.css\";\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [isAuthenticated, setIsAuthenticated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        setIsAuthenticated(Boolean(token));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Redirect based on authentication status\n        const publicRoutes = [\n            \"/auth/signup\",\n            \"/auth/login\"\n        ]; // Add public routes here\n        const protectedRoutes = [\n            \"/dashboard\",\n            \"/assessment\",\n            \"/chatbot\",\n            \"/user\",\n            \"/course\"\n        ]; // Protected route prefixes\n        const { pathname } = router;\n        // Check if the path starts with any of the protected route prefixes\n        const isProtectedRoute = protectedRoutes.some((route)=>pathname.startsWith(route));\n        if (isProtectedRoute && !isAuthenticated) {\n            // If trying to access a protected route without being authenticated\n            router.push(\"/auth/login\"); // Redirect to login\n        } else if (publicRoutes.includes(pathname) && isAuthenticated) {\n            // If trying to access a public route while authenticated\n            router.push(\"/dashboard\"); // Redirect to dashboard\n        }\n    }, [\n        isAuthenticated,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\harshita.shriwas\\\\Desktop\\\\Learning_Management_System\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7O0FBQ2tCO0FBRVg7QUFDRTtBQUUzQixTQUFTSyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBQWlCO0lBQ3ZFLE1BQU1TLFNBQVNQLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDUixNQUFNUyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7UUFDbkNKLG1CQUFtQkssUUFBUUg7SUFDN0IsR0FBRyxFQUFFO0lBRUxULGdEQUFTQSxDQUFDO1FBQ1IsMENBQTBDO1FBQzFDLE1BQU1hLGVBQWU7WUFBQztZQUFnQjtTQUFjLEVBQUUseUJBQXlCO1FBQy9FLE1BQU1DLGtCQUFrQjtZQUFDO1lBQWM7WUFBZTtZQUFZO1lBQVM7U0FBVSxFQUFFLDJCQUEyQjtRQUNsSCxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHUDtRQUVyQixvRUFBb0U7UUFDcEUsTUFBTVEsbUJBQW1CRixnQkFBZ0JHLElBQUksQ0FBQ0MsQ0FBQUEsUUFBU0gsU0FBU0ksVUFBVSxDQUFDRDtRQUUzRSxJQUFJRixvQkFBb0IsQ0FBQ1YsaUJBQWlCO1lBQ3hDLG9FQUFvRTtZQUNwRUUsT0FBT1ksSUFBSSxDQUFDLGdCQUFnQixvQkFBb0I7UUFDbEQsT0FBTyxJQUFJUCxhQUFhUSxRQUFRLENBQUNOLGFBQWFULGlCQUFpQjtZQUM3RCx5REFBeUQ7WUFDekRFLE9BQU9ZLElBQUksQ0FBQyxlQUFlLHdCQUF3QjtRQUNyRDtJQUNGLEdBQUc7UUFBQ2Q7UUFBaUJFO0tBQU87SUFFNUIscUJBQ0UsOERBQUNjOzswQkFDQyw4REFBQ3BCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFwiLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICBjb25zdCBbaXNBdXRoZW50aWNhdGVkLCBzZXRJc0F1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbiB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgc2V0SXNBdXRoZW50aWNhdGVkKEJvb2xlYW4odG9rZW4pKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZWRpcmVjdCBiYXNlZCBvbiBhdXRoZW50aWNhdGlvbiBzdGF0dXNcclxuICAgIGNvbnN0IHB1YmxpY1JvdXRlcyA9IFsnL2F1dGgvc2lnbnVwJywgJy9hdXRoL2xvZ2luJ107IC8vIEFkZCBwdWJsaWMgcm91dGVzIGhlcmVcclxuICAgIGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9IFsnL2Rhc2hib2FyZCcsICcvYXNzZXNzbWVudCcsICcvY2hhdGJvdCcsICcvdXNlcicsICcvY291cnNlJ107IC8vIFByb3RlY3RlZCByb3V0ZSBwcmVmaXhlc1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcm91dGVyO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIHRoZSBwYXRoIHN0YXJ0cyB3aXRoIGFueSBvZiB0aGUgcHJvdGVjdGVkIHJvdXRlIHByZWZpeGVzXHJcbiAgICBjb25zdCBpc1Byb3RlY3RlZFJvdXRlID0gcHJvdGVjdGVkUm91dGVzLnNvbWUocm91dGUgPT4gcGF0aG5hbWUuc3RhcnRzV2l0aChyb3V0ZSkpO1xyXG5cclxuICAgIGlmIChpc1Byb3RlY3RlZFJvdXRlICYmICFpc0F1dGhlbnRpY2F0ZWQpIHtcclxuICAgICAgLy8gSWYgdHJ5aW5nIHRvIGFjY2VzcyBhIHByb3RlY3RlZCByb3V0ZSB3aXRob3V0IGJlaW5nIGF1dGhlbnRpY2F0ZWRcclxuICAgICAgcm91dGVyLnB1c2goJy9hdXRoL2xvZ2luJyk7IC8vIFJlZGlyZWN0IHRvIGxvZ2luXHJcbiAgICB9IGVsc2UgaWYgKHB1YmxpY1JvdXRlcy5pbmNsdWRlcyhwYXRobmFtZSkgJiYgaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgIC8vIElmIHRyeWluZyB0byBhY2Nlc3MgYSBwdWJsaWMgcm91dGUgd2hpbGUgYXV0aGVudGljYXRlZFxyXG4gICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpOyAvLyBSZWRpcmVjdCB0byBkYXNoYm9hcmRcclxuICAgIH1cclxuICB9LCBbaXNBdXRoZW50aWNhdGVkLCByb3V0ZXJdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkhlYWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzQXV0aGVudGljYXRlZCIsInNldElzQXV0aGVudGljYXRlZCIsInJvdXRlciIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkJvb2xlYW4iLCJwdWJsaWNSb3V0ZXMiLCJwcm90ZWN0ZWRSb3V0ZXMiLCJwYXRobmFtZSIsImlzUHJvdGVjdGVkUm91dGUiLCJzb21lIiwicm91dGUiLCJzdGFydHNXaXRoIiwicHVzaCIsImluY2x1ZGVzIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "@mui/icons-material/Mail":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Mail" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Mail");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/icons-material/MoveToInbox":
/*!**************************************************!*\
  !*** external "@mui/icons-material/MoveToInbox" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/MoveToInbox");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Drawer":
/*!***************************************!*\
  !*** external "@mui/material/Drawer" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/List":
/*!*************************************!*\
  !*** external "@mui/material/List" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ "@mui/material/ListItem":
/*!*****************************************!*\
  !*** external "@mui/material/ListItem" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ "@mui/material/ListItemText":
/*!*********************************************!*\
  !*** external "@mui/material/ListItemText" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "clsx?9dfb":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("clsx");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();