"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unified";
exports.ids = ["vendor-chunks/unified"];
exports.modules = {

/***/ "(rsc)/./node_modules/unified/index.js":
/*!***************************************!*\
  !*** ./node_modules/unified/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar extend = __webpack_require__(/*! extend */ \"(rsc)/./node_modules/extend/index.js\");\nvar bail = __webpack_require__(/*! bail */ \"(rsc)/./node_modules/bail/index.js\");\nvar vfile = __webpack_require__(/*! vfile */ \"(rsc)/./node_modules/vfile/index.js\");\nvar trough = __webpack_require__(/*! trough */ \"(rsc)/./node_modules/trough/index.js\");\nvar plain = __webpack_require__(/*! is-plain-obj */ \"(rsc)/./node_modules/is-plain-obj/index.js\");\n// Expose a frozen processor.\nmodule.exports = unified().freeze();\nvar slice = [].slice;\nvar own = {}.hasOwnProperty;\n// Process pipeline.\nvar pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);\nfunction pipelineParse(p, ctx) {\n    ctx.tree = p.parse(ctx.file);\n}\nfunction pipelineRun(p, ctx, next) {\n    p.run(ctx.tree, ctx.file, done);\n    function done(err, tree, file) {\n        if (err) {\n            next(err);\n        } else {\n            ctx.tree = tree;\n            ctx.file = file;\n            next();\n        }\n    }\n}\nfunction pipelineStringify(p, ctx) {\n    ctx.file.contents = p.stringify(ctx.tree, ctx.file);\n}\n// Function to create the first processor.\nfunction unified() {\n    var attachers = [];\n    var transformers = trough();\n    var namespace = {};\n    var frozen = false;\n    var freezeIndex = -1;\n    // Data management.\n    processor.data = data;\n    // Lock.\n    processor.freeze = freeze;\n    // Plugins.\n    processor.attachers = attachers;\n    processor.use = use;\n    // API.\n    processor.parse = parse;\n    processor.stringify = stringify;\n    processor.run = run;\n    processor.runSync = runSync;\n    processor.process = process;\n    processor.processSync = processSync;\n    // Expose.\n    return processor;\n    // Create a new processor based on the processor in the current scope.\n    function processor() {\n        var destination = unified();\n        var length = attachers.length;\n        var index = -1;\n        while(++index < length){\n            destination.use.apply(null, attachers[index]);\n        }\n        destination.data(extend(true, {}, namespace));\n        return destination;\n    }\n    // Freeze: used to signal a processor that has finished configuration.\n    //\n    // For example, take unified itself: it’s frozen.\n    // Plugins should not be added to it.\n    // Rather, it should be extended, by invoking it, before modifying it.\n    //\n    // In essence, always invoke this when exporting a processor.\n    function freeze() {\n        var values;\n        var plugin;\n        var options;\n        var transformer;\n        if (frozen) {\n            return processor;\n        }\n        while(++freezeIndex < attachers.length){\n            values = attachers[freezeIndex];\n            plugin = values[0];\n            options = values[1];\n            transformer = null;\n            if (options === false) {\n                continue;\n            }\n            if (options === true) {\n                values[1] = undefined;\n            }\n            transformer = plugin.apply(processor, values.slice(1));\n            if (typeof transformer === \"function\") {\n                transformers.use(transformer);\n            }\n        }\n        frozen = true;\n        freezeIndex = Infinity;\n        return processor;\n    }\n    // Data management.\n    // Getter / setter for processor-specific informtion.\n    function data(key, value) {\n        if (typeof key === \"string\") {\n            // Set `key`.\n            if (arguments.length === 2) {\n                assertUnfrozen(\"data\", frozen);\n                namespace[key] = value;\n                return processor;\n            }\n            // Get `key`.\n            return own.call(namespace, key) && namespace[key] || null;\n        }\n        // Set space.\n        if (key) {\n            assertUnfrozen(\"data\", frozen);\n            namespace = key;\n            return processor;\n        }\n        // Get space.\n        return namespace;\n    }\n    // Plugin management.\n    //\n    // Pass it:\n    // *   an attacher and options,\n    // *   a preset,\n    // *   a list of presets, attachers, and arguments (list of attachers and\n    //     options).\n    function use(value) {\n        var settings;\n        assertUnfrozen(\"use\", frozen);\n        if (value === null || value === undefined) {\n        // Empty.\n        } else if (typeof value === \"function\") {\n            addPlugin.apply(null, arguments);\n        } else if (typeof value === \"object\") {\n            if (\"length\" in value) {\n                addList(value);\n            } else {\n                addPreset(value);\n            }\n        } else {\n            throw new Error(\"Expected usable value, not `\" + value + \"`\");\n        }\n        if (settings) {\n            namespace.settings = extend(namespace.settings || {}, settings);\n        }\n        return processor;\n        function addPreset(result) {\n            addList(result.plugins);\n            if (result.settings) {\n                settings = extend(settings || {}, result.settings);\n            }\n        }\n        function add(value) {\n            if (typeof value === \"function\") {\n                addPlugin(value);\n            } else if (typeof value === \"object\") {\n                if (\"length\" in value) {\n                    addPlugin.apply(null, value);\n                } else {\n                    addPreset(value);\n                }\n            } else {\n                throw new Error(\"Expected usable value, not `\" + value + \"`\");\n            }\n        }\n        function addList(plugins) {\n            var length;\n            var index;\n            if (plugins === null || plugins === undefined) {\n            // Empty.\n            } else if (typeof plugins === \"object\" && \"length\" in plugins) {\n                length = plugins.length;\n                index = -1;\n                while(++index < length){\n                    add(plugins[index]);\n                }\n            } else {\n                throw new Error(\"Expected a list of plugins, not `\" + plugins + \"`\");\n            }\n        }\n        function addPlugin(plugin, value) {\n            var entry = find(plugin);\n            if (entry) {\n                if (plain(entry[1]) && plain(value)) {\n                    value = extend(entry[1], value);\n                }\n                entry[1] = value;\n            } else {\n                attachers.push(slice.call(arguments));\n            }\n        }\n    }\n    function find(plugin) {\n        var length = attachers.length;\n        var index = -1;\n        var entry;\n        while(++index < length){\n            entry = attachers[index];\n            if (entry[0] === plugin) {\n                return entry;\n            }\n        }\n    }\n    // Parse a file (in string or vfile representation) into a unist node using\n    // the `Parser` on the processor.\n    function parse(doc) {\n        var file = vfile(doc);\n        var Parser;\n        freeze();\n        Parser = processor.Parser;\n        assertParser(\"parse\", Parser);\n        if (newable(Parser, \"parse\")) {\n            return new Parser(String(file), file).parse();\n        }\n        return Parser(String(file), file) // eslint-disable-line new-cap\n        ;\n    }\n    // Run transforms on a unist node representation of a file (in string or\n    // vfile representation), async.\n    function run(node, file, cb) {\n        assertNode(node);\n        freeze();\n        if (!cb && typeof file === \"function\") {\n            cb = file;\n            file = null;\n        }\n        if (!cb) {\n            return new Promise(executor);\n        }\n        executor(null, cb);\n        function executor(resolve, reject) {\n            transformers.run(node, vfile(file), done);\n            function done(err, tree, file) {\n                tree = tree || node;\n                if (err) {\n                    reject(err);\n                } else if (resolve) {\n                    resolve(tree);\n                } else {\n                    cb(null, tree, file);\n                }\n            }\n        }\n    }\n    // Run transforms on a unist node representation of a file (in string or\n    // vfile representation), sync.\n    function runSync(node, file) {\n        var complete = false;\n        var result;\n        run(node, file, done);\n        assertDone(\"runSync\", \"run\", complete);\n        return result;\n        function done(err, tree) {\n            complete = true;\n            bail(err);\n            result = tree;\n        }\n    }\n    // Stringify a unist node representation of a file (in string or vfile\n    // representation) into a string using the `Compiler` on the processor.\n    function stringify(node, doc) {\n        var file = vfile(doc);\n        var Compiler;\n        freeze();\n        Compiler = processor.Compiler;\n        assertCompiler(\"stringify\", Compiler);\n        assertNode(node);\n        if (newable(Compiler, \"compile\")) {\n            return new Compiler(node, file).compile();\n        }\n        return Compiler(node, file) // eslint-disable-line new-cap\n        ;\n    }\n    // Parse a file (in string or vfile representation) into a unist node using\n    // the `Parser` on the processor, then run transforms on that node, and\n    // compile the resulting node using the `Compiler` on the processor, and\n    // store that result on the vfile.\n    function process(doc, cb) {\n        freeze();\n        assertParser(\"process\", processor.Parser);\n        assertCompiler(\"process\", processor.Compiler);\n        if (!cb) {\n            return new Promise(executor);\n        }\n        executor(null, cb);\n        function executor(resolve, reject) {\n            var file = vfile(doc);\n            pipeline.run(processor, {\n                file: file\n            }, done);\n            function done(err) {\n                if (err) {\n                    reject(err);\n                } else if (resolve) {\n                    resolve(file);\n                } else {\n                    cb(null, file);\n                }\n            }\n        }\n    }\n    // Process the given document (in string or vfile representation), sync.\n    function processSync(doc) {\n        var complete = false;\n        var file;\n        freeze();\n        assertParser(\"processSync\", processor.Parser);\n        assertCompiler(\"processSync\", processor.Compiler);\n        file = vfile(doc);\n        process(file, done);\n        assertDone(\"processSync\", \"process\", complete);\n        return file;\n        function done(err) {\n            complete = true;\n            bail(err);\n        }\n    }\n}\n// Check if `value` is a constructor.\nfunction newable(value, name) {\n    return typeof value === \"function\" && value.prototype && // A function with keys in its prototype is probably a constructor.\n    // Classes’ prototype methods are not enumerable, so we check if some value\n    // exists in the prototype.\n    (keys(value.prototype) || name in value.prototype);\n}\n// Check if `value` is an object with keys.\nfunction keys(value) {\n    var key;\n    for(key in value){\n        return true;\n    }\n    return false;\n}\n// Assert a parser is available.\nfunction assertParser(name, Parser) {\n    if (typeof Parser !== \"function\") {\n        throw new Error(\"Cannot `\" + name + \"` without `Parser`\");\n    }\n}\n// Assert a compiler is available.\nfunction assertCompiler(name, Compiler) {\n    if (typeof Compiler !== \"function\") {\n        throw new Error(\"Cannot `\" + name + \"` without `Compiler`\");\n    }\n}\n// Assert the processor is not frozen.\nfunction assertUnfrozen(name, frozen) {\n    if (frozen) {\n        throw new Error(\"Cannot invoke `\" + name + \"` on a frozen processor.\\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.\");\n    }\n}\n// Assert `node` is a unist node.\nfunction assertNode(node) {\n    if (!node || typeof node.type !== \"string\") {\n        throw new Error(\"Expected node, got `\" + node + \"`\");\n    }\n}\n// Assert that `complete` is `true`.\nfunction assertDone(name, asyncName, complete) {\n    if (!complete) {\n        throw new Error(\"`\" + name + \"` finished async. Use `\" + asyncName + \"` instead\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxJQUNmLG1FQUFtRTtJQUNuRSwyRUFBMkU7SUFDM0UsMkJBQTJCO0lBQzFCQyxDQUFBQSxLQUFLbEMsTUFBTWlDLFNBQVMsS0FBS0QsUUFBUWhDLE1BQU1pQyxTQUFTO0FBRXJEO0FBRUEsMkNBQTJDO0FBQzNDLFNBQVNDLEtBQUtsQyxLQUFLO0lBQ2pCLElBQUlEO0lBQ0osSUFBS0EsT0FBT0MsTUFBTztRQUNqQixPQUFPO0lBQ1Q7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxnQ0FBZ0M7QUFDaEMsU0FBU2lCLGFBQWFlLElBQUksRUFBRWhCLE1BQU07SUFDaEMsSUFBSSxPQUFPQSxXQUFXLFlBQVk7UUFDaEMsTUFBTSxJQUFJUixNQUFNLGFBQWF3QixPQUFPO0lBQ3RDO0FBQ0Y7QUFFQSxrQ0FBa0M7QUFDbEMsU0FBU0YsZUFBZUUsSUFBSSxFQUFFSCxRQUFRO0lBQ3BDLElBQUksT0FBT0EsYUFBYSxZQUFZO1FBQ2xDLE1BQU0sSUFBSXJCLE1BQU0sYUFBYXdCLE9BQU87SUFDdEM7QUFDRjtBQUVBLHNDQUFzQztBQUN0QyxTQUFTOUIsZUFBZThCLElBQUksRUFBRWxELE1BQU07SUFDbEMsSUFBSUEsUUFBUTtRQUNWLE1BQU0sSUFBSTBCLE1BQ1Isb0JBQ0V3QixPQUNBO0lBRU47QUFDRjtBQUVBLGlDQUFpQztBQUNqQyxTQUFTVixXQUFXRixJQUFJO0lBQ3RCLElBQUksQ0FBQ0EsUUFBUSxPQUFPQSxLQUFLZSxJQUFJLEtBQUssVUFBVTtRQUMxQyxNQUFNLElBQUkzQixNQUFNLHlCQUF5QlksT0FBTztJQUNsRDtBQUNGO0FBRUEsb0NBQW9DO0FBQ3BDLFNBQVNRLFdBQVdJLElBQUksRUFBRUksU0FBUyxFQUFFVCxRQUFRO0lBQzNDLElBQUksQ0FBQ0EsVUFBVTtRQUNiLE1BQU0sSUFBSW5CLE1BQ1IsTUFBTXdCLE9BQU8sNEJBQTRCSSxZQUFZO0lBRXpEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nLXN0YXJ0ZXItdHlwZXNjcmlwdC8uL25vZGVfbW9kdWxlcy91bmlmaWVkL2luZGV4LmpzPzZhZTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKVxudmFyIGJhaWwgPSByZXF1aXJlKCdiYWlsJylcbnZhciB2ZmlsZSA9IHJlcXVpcmUoJ3ZmaWxlJylcbnZhciB0cm91Z2ggPSByZXF1aXJlKCd0cm91Z2gnKVxudmFyIHBsYWluID0gcmVxdWlyZSgnaXMtcGxhaW4tb2JqJylcblxuLy8gRXhwb3NlIGEgZnJvemVuIHByb2Nlc3Nvci5cbm1vZHVsZS5leHBvcnRzID0gdW5pZmllZCgpLmZyZWV6ZSgpXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxuLy8gUHJvY2VzcyBwaXBlbGluZS5cbnZhciBwaXBlbGluZSA9IHRyb3VnaCgpXG4gIC51c2UocGlwZWxpbmVQYXJzZSlcbiAgLnVzZShwaXBlbGluZVJ1bilcbiAgLnVzZShwaXBlbGluZVN0cmluZ2lmeSlcblxuZnVuY3Rpb24gcGlwZWxpbmVQYXJzZShwLCBjdHgpIHtcbiAgY3R4LnRyZWUgPSBwLnBhcnNlKGN0eC5maWxlKVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZVJ1bihwLCBjdHgsIG5leHQpIHtcbiAgcC5ydW4oY3R4LnRyZWUsIGN0eC5maWxlLCBkb25lKVxuXG4gIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlLCBmaWxlKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgbmV4dChlcnIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC50cmVlID0gdHJlZVxuICAgICAgY3R4LmZpbGUgPSBmaWxlXG4gICAgICBuZXh0KClcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGlwZWxpbmVTdHJpbmdpZnkocCwgY3R4KSB7XG4gIGN0eC5maWxlLmNvbnRlbnRzID0gcC5zdHJpbmdpZnkoY3R4LnRyZWUsIGN0eC5maWxlKVxufVxuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIGZpcnN0IHByb2Nlc3Nvci5cbmZ1bmN0aW9uIHVuaWZpZWQoKSB7XG4gIHZhciBhdHRhY2hlcnMgPSBbXVxuICB2YXIgdHJhbnNmb3JtZXJzID0gdHJvdWdoKClcbiAgdmFyIG5hbWVzcGFjZSA9IHt9XG4gIHZhciBmcm96ZW4gPSBmYWxzZVxuICB2YXIgZnJlZXplSW5kZXggPSAtMVxuXG4gIC8vIERhdGEgbWFuYWdlbWVudC5cbiAgcHJvY2Vzc29yLmRhdGEgPSBkYXRhXG5cbiAgLy8gTG9jay5cbiAgcHJvY2Vzc29yLmZyZWV6ZSA9IGZyZWV6ZVxuXG4gIC8vIFBsdWdpbnMuXG4gIHByb2Nlc3Nvci5hdHRhY2hlcnMgPSBhdHRhY2hlcnNcbiAgcHJvY2Vzc29yLnVzZSA9IHVzZVxuXG4gIC8vIEFQSS5cbiAgcHJvY2Vzc29yLnBhcnNlID0gcGFyc2VcbiAgcHJvY2Vzc29yLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuICBwcm9jZXNzb3IucnVuID0gcnVuXG4gIHByb2Nlc3Nvci5ydW5TeW5jID0gcnVuU3luY1xuICBwcm9jZXNzb3IucHJvY2VzcyA9IHByb2Nlc3NcbiAgcHJvY2Vzc29yLnByb2Nlc3NTeW5jID0gcHJvY2Vzc1N5bmNcblxuICAvLyBFeHBvc2UuXG4gIHJldHVybiBwcm9jZXNzb3JcblxuICAvLyBDcmVhdGUgYSBuZXcgcHJvY2Vzc29yIGJhc2VkIG9uIHRoZSBwcm9jZXNzb3IgaW4gdGhlIGN1cnJlbnQgc2NvcGUuXG4gIGZ1bmN0aW9uIHByb2Nlc3NvcigpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB1bmlmaWVkKClcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZGVzdGluYXRpb24udXNlLmFwcGx5KG51bGwsIGF0dGFjaGVyc1tpbmRleF0pXG4gICAgfVxuXG4gICAgZGVzdGluYXRpb24uZGF0YShleHRlbmQodHJ1ZSwge30sIG5hbWVzcGFjZSkpXG5cbiAgICByZXR1cm4gZGVzdGluYXRpb25cbiAgfVxuXG4gIC8vIEZyZWV6ZTogdXNlZCB0byBzaWduYWwgYSBwcm9jZXNzb3IgdGhhdCBoYXMgZmluaXNoZWQgY29uZmlndXJhdGlvbi5cbiAgLy9cbiAgLy8gRm9yIGV4YW1wbGUsIHRha2UgdW5pZmllZCBpdHNlbGY6IGl04oCZcyBmcm96ZW4uXG4gIC8vIFBsdWdpbnMgc2hvdWxkIG5vdCBiZSBhZGRlZCB0byBpdC5cbiAgLy8gUmF0aGVyLCBpdCBzaG91bGQgYmUgZXh0ZW5kZWQsIGJ5IGludm9raW5nIGl0LCBiZWZvcmUgbW9kaWZ5aW5nIGl0LlxuICAvL1xuICAvLyBJbiBlc3NlbmNlLCBhbHdheXMgaW52b2tlIHRoaXMgd2hlbiBleHBvcnRpbmcgYSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICB2YXIgdmFsdWVzXG4gICAgdmFyIHBsdWdpblxuICAgIHZhciBvcHRpb25zXG4gICAgdmFyIHRyYW5zZm9ybWVyXG5cbiAgICBpZiAoZnJvemVuKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgfVxuXG4gICAgd2hpbGUgKCsrZnJlZXplSW5kZXggPCBhdHRhY2hlcnMubGVuZ3RoKSB7XG4gICAgICB2YWx1ZXMgPSBhdHRhY2hlcnNbZnJlZXplSW5kZXhdXG4gICAgICBwbHVnaW4gPSB2YWx1ZXNbMF1cbiAgICAgIG9wdGlvbnMgPSB2YWx1ZXNbMV1cbiAgICAgIHRyYW5zZm9ybWVyID0gbnVsbFxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgdmFsdWVzWzFdID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIHRyYW5zZm9ybWVyID0gcGx1Z2luLmFwcGx5KHByb2Nlc3NvciwgdmFsdWVzLnNsaWNlKDEpKVxuXG4gICAgICBpZiAodHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyYW5zZm9ybWVycy51c2UodHJhbnNmb3JtZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnJvemVuID0gdHJ1ZVxuICAgIGZyZWV6ZUluZGV4ID0gSW5maW5pdHlcblxuICAgIHJldHVybiBwcm9jZXNzb3JcbiAgfVxuXG4gIC8vIERhdGEgbWFuYWdlbWVudC5cbiAgLy8gR2V0dGVyIC8gc2V0dGVyIGZvciBwcm9jZXNzb3Itc3BlY2lmaWMgaW5mb3JtdGlvbi5cbiAgZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBTZXQgYGtleWAuXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcblxuICAgICAgICBuYW1lc3BhY2Vba2V5XSA9IHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgICAgfVxuXG4gICAgICAvLyBHZXQgYGtleWAuXG4gICAgICByZXR1cm4gKG93bi5jYWxsKG5hbWVzcGFjZSwga2V5KSAmJiBuYW1lc3BhY2Vba2V5XSkgfHwgbnVsbFxuICAgIH1cblxuICAgIC8vIFNldCBzcGFjZS5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcbiAgICAgIG5hbWVzcGFjZSA9IGtleVxuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIC8vIEdldCBzcGFjZS5cbiAgICByZXR1cm4gbmFtZXNwYWNlXG4gIH1cblxuICAvLyBQbHVnaW4gbWFuYWdlbWVudC5cbiAgLy9cbiAgLy8gUGFzcyBpdDpcbiAgLy8gKiAgIGFuIGF0dGFjaGVyIGFuZCBvcHRpb25zLFxuICAvLyAqICAgYSBwcmVzZXQsXG4gIC8vICogICBhIGxpc3Qgb2YgcHJlc2V0cywgYXR0YWNoZXJzLCBhbmQgYXJndW1lbnRzIChsaXN0IG9mIGF0dGFjaGVycyBhbmRcbiAgLy8gICAgIG9wdGlvbnMpLlxuICBmdW5jdGlvbiB1c2UodmFsdWUpIHtcbiAgICB2YXIgc2V0dGluZ3NcblxuICAgIGFzc2VydFVuZnJvemVuKCd1c2UnLCBmcm96ZW4pXG5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRW1wdHkuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFkZFBsdWdpbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgYWRkTGlzdCh2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgbmFtZXNwYWNlLnNldHRpbmdzID0gZXh0ZW5kKG5hbWVzcGFjZS5zZXR0aW5ncyB8fCB7fSwgc2V0dGluZ3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuXG4gICAgZnVuY3Rpb24gYWRkUHJlc2V0KHJlc3VsdCkge1xuICAgICAgYWRkTGlzdChyZXN1bHQucGx1Z2lucylcblxuICAgICAgaWYgKHJlc3VsdC5zZXR0aW5ncykge1xuICAgICAgICBzZXR0aW5ncyA9IGV4dGVuZChzZXR0aW5ncyB8fCB7fSwgcmVzdWx0LnNldHRpbmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhZGRQbHVnaW4odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3QocGx1Z2lucykge1xuICAgICAgdmFyIGxlbmd0aFxuICAgICAgdmFyIGluZGV4XG5cbiAgICAgIGlmIChwbHVnaW5zID09PSBudWxsIHx8IHBsdWdpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBFbXB0eS5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHBsdWdpbnMgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHBsdWdpbnMpIHtcbiAgICAgICAgbGVuZ3RoID0gcGx1Z2lucy5sZW5ndGhcbiAgICAgICAgaW5kZXggPSAtMVxuXG4gICAgICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgYWRkKHBsdWdpbnNbaW5kZXhdKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGEgbGlzdCBvZiBwbHVnaW5zLCBub3QgYCcgKyBwbHVnaW5zICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBsdWdpbihwbHVnaW4sIHZhbHVlKSB7XG4gICAgICB2YXIgZW50cnkgPSBmaW5kKHBsdWdpbilcblxuICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmIChwbGFpbihlbnRyeVsxXSkgJiYgcGxhaW4odmFsdWUpKSB7XG4gICAgICAgICAgdmFsdWUgPSBleHRlbmQoZW50cnlbMV0sIHZhbHVlKVxuICAgICAgICB9XG5cbiAgICAgICAgZW50cnlbMV0gPSB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXR0YWNoZXJzLnB1c2goc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmQocGx1Z2luKSB7XG4gICAgdmFyIGxlbmd0aCA9IGF0dGFjaGVycy5sZW5ndGhcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBlbnRyeVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGVudHJ5ID0gYXR0YWNoZXJzW2luZGV4XVxuXG4gICAgICBpZiAoZW50cnlbMF0gPT09IHBsdWdpbikge1xuICAgICAgICByZXR1cm4gZW50cnlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQYXJzZSBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZSByZXByZXNlbnRhdGlvbikgaW50byBhIHVuaXN0IG5vZGUgdXNpbmdcbiAgLy8gdGhlIGBQYXJzZXJgIG9uIHRoZSBwcm9jZXNzb3IuXG4gIGZ1bmN0aW9uIHBhcnNlKGRvYykge1xuICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuICAgIHZhciBQYXJzZXJcblxuICAgIGZyZWV6ZSgpXG4gICAgUGFyc2VyID0gcHJvY2Vzc29yLlBhcnNlclxuICAgIGFzc2VydFBhcnNlcigncGFyc2UnLCBQYXJzZXIpXG5cbiAgICBpZiAobmV3YWJsZShQYXJzZXIsICdwYXJzZScpKSB7XG4gICAgICByZXR1cm4gbmV3IFBhcnNlcihTdHJpbmcoZmlsZSksIGZpbGUpLnBhcnNlKClcbiAgICB9XG5cbiAgICByZXR1cm4gUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuZXctY2FwXG4gIH1cblxuICAvLyBSdW4gdHJhbnNmb3JtcyBvbiBhIHVuaXN0IG5vZGUgcmVwcmVzZW50YXRpb24gb2YgYSBmaWxlIChpbiBzdHJpbmcgb3JcbiAgLy8gdmZpbGUgcmVwcmVzZW50YXRpb24pLCBhc3luYy5cbiAgZnVuY3Rpb24gcnVuKG5vZGUsIGZpbGUsIGNiKSB7XG4gICAgYXNzZXJ0Tm9kZShub2RlKVxuICAgIGZyZWV6ZSgpXG5cbiAgICBpZiAoIWNiICYmIHR5cGVvZiBmaWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjYiA9IGZpbGVcbiAgICAgIGZpbGUgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKCFjYikge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKVxuICAgIH1cblxuICAgIGV4ZWN1dG9yKG51bGwsIGNiKVxuXG4gICAgZnVuY3Rpb24gZXhlY3V0b3IocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB0cmFuc2Zvcm1lcnMucnVuKG5vZGUsIHZmaWxlKGZpbGUpLCBkb25lKVxuXG4gICAgICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSwgZmlsZSkge1xuICAgICAgICB0cmVlID0gdHJlZSB8fCBub2RlXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKHRyZWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobnVsbCwgdHJlZSwgZmlsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFJ1biB0cmFuc2Zvcm1zIG9uIGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvclxuICAvLyB2ZmlsZSByZXByZXNlbnRhdGlvbiksIHN5bmMuXG4gIGZ1bmN0aW9uIHJ1blN5bmMobm9kZSwgZmlsZSkge1xuICAgIHZhciBjb21wbGV0ZSA9IGZhbHNlXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgcnVuKG5vZGUsIGZpbGUsIGRvbmUpXG5cbiAgICBhc3NlcnREb25lKCdydW5TeW5jJywgJ3J1bicsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuXG4gICAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUpIHtcbiAgICAgIGNvbXBsZXRlID0gdHJ1ZVxuICAgICAgYmFpbChlcnIpXG4gICAgICByZXN1bHQgPSB0cmVlXG4gICAgfVxuICB9XG5cbiAgLy8gU3RyaW5naWZ5IGEgdW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGUgKGluIHN0cmluZyBvciB2ZmlsZVxuICAvLyByZXByZXNlbnRhdGlvbikgaW50byBhIHN0cmluZyB1c2luZyB0aGUgYENvbXBpbGVyYCBvbiB0aGUgcHJvY2Vzc29yLlxuICBmdW5jdGlvbiBzdHJpbmdpZnkobm9kZSwgZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIENvbXBpbGVyXG5cbiAgICBmcmVlemUoKVxuICAgIENvbXBpbGVyID0gcHJvY2Vzc29yLkNvbXBpbGVyXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3N0cmluZ2lmeScsIENvbXBpbGVyKVxuICAgIGFzc2VydE5vZGUobm9kZSlcblxuICAgIGlmIChuZXdhYmxlKENvbXBpbGVyLCAnY29tcGlsZScpKSB7XG4gICAgICByZXR1cm4gbmV3IENvbXBpbGVyKG5vZGUsIGZpbGUpLmNvbXBpbGUoKVxuICAgIH1cblxuICAgIHJldHVybiBDb21waWxlcihub2RlLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8vIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIHZmaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgdW5pc3Qgbm9kZSB1c2luZ1xuICAvLyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3NvciwgdGhlbiBydW4gdHJhbnNmb3JtcyBvbiB0aGF0IG5vZGUsIGFuZFxuICAvLyBjb21waWxlIHRoZSByZXN1bHRpbmcgbm9kZSB1c2luZyB0aGUgYENvbXBpbGVyYCBvbiB0aGUgcHJvY2Vzc29yLCBhbmRcbiAgLy8gc3RvcmUgdGhhdCByZXN1bHQgb24gdGhlIHZmaWxlLlxuICBmdW5jdGlvbiBwcm9jZXNzKGRvYywgY2IpIHtcbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2VzcycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3MnLCBwcm9jZXNzb3IuQ29tcGlsZXIpXG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgICBwaXBlbGluZS5ydW4ocHJvY2Vzc29yLCB7ZmlsZTogZmlsZX0sIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobnVsbCwgZmlsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb2Nlc3MgdGhlIGdpdmVuIGRvY3VtZW50IChpbiBzdHJpbmcgb3IgdmZpbGUgcmVwcmVzZW50YXRpb24pLCBzeW5jLlxuICBmdW5jdGlvbiBwcm9jZXNzU3luYyhkb2MpIHtcbiAgICB2YXIgY29tcGxldGUgPSBmYWxzZVxuICAgIHZhciBmaWxlXG5cbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2Vzc1N5bmMnLCBwcm9jZXNzb3IuUGFyc2VyKVxuICAgIGFzc2VydENvbXBpbGVyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5Db21waWxlcilcbiAgICBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgcHJvY2VzcyhmaWxlLCBkb25lKVxuXG4gICAgYXNzZXJ0RG9uZSgncHJvY2Vzc1N5bmMnLCAncHJvY2VzcycsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIGZpbGVcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICBjb21wbGV0ZSA9IHRydWVcbiAgICAgIGJhaWwoZXJyKVxuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGlzIGEgY29uc3RydWN0b3IuXG5mdW5jdGlvbiBuZXdhYmxlKHZhbHVlLCBuYW1lKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmXG4gICAgdmFsdWUucHJvdG90eXBlICYmXG4gICAgLy8gQSBmdW5jdGlvbiB3aXRoIGtleXMgaW4gaXRzIHByb3RvdHlwZSBpcyBwcm9iYWJseSBhIGNvbnN0cnVjdG9yLlxuICAgIC8vIENsYXNzZXPigJkgcHJvdG90eXBlIG1ldGhvZHMgYXJlIG5vdCBlbnVtZXJhYmxlLCBzbyB3ZSBjaGVjayBpZiBzb21lIHZhbHVlXG4gICAgLy8gZXhpc3RzIGluIHRoZSBwcm90b3R5cGUuXG4gICAgKGtleXModmFsdWUucHJvdG90eXBlKSB8fCBuYW1lIGluIHZhbHVlLnByb3RvdHlwZSlcbiAgKVxufVxuXG4vLyBDaGVjayBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCB3aXRoIGtleXMuXG5mdW5jdGlvbiBrZXlzKHZhbHVlKSB7XG4gIHZhciBrZXlcbiAgZm9yIChrZXkgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbi8vIEFzc2VydCBhIHBhcnNlciBpcyBhdmFpbGFibGUuXG5mdW5jdGlvbiBhc3NlcnRQYXJzZXIobmFtZSwgUGFyc2VyKSB7XG4gIGlmICh0eXBlb2YgUGFyc2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgUGFyc2VyYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGEgY29tcGlsZXIgaXMgYXZhaWxhYmxlLlxuZnVuY3Rpb24gYXNzZXJ0Q29tcGlsZXIobmFtZSwgQ29tcGlsZXIpIHtcbiAgaWYgKHR5cGVvZiBDb21waWxlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGAnICsgbmFtZSArICdgIHdpdGhvdXQgYENvbXBpbGVyYCcpXG4gIH1cbn1cblxuLy8gQXNzZXJ0IHRoZSBwcm9jZXNzb3IgaXMgbm90IGZyb3plbi5cbmZ1bmN0aW9uIGFzc2VydFVuZnJvemVuKG5hbWUsIGZyb3plbikge1xuICBpZiAoZnJvemVuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0Nhbm5vdCBpbnZva2UgYCcgK1xuICAgICAgICBuYW1lICtcbiAgICAgICAgJ2Agb24gYSBmcm96ZW4gcHJvY2Vzc29yLlxcbkNyZWF0ZSBhIG5ldyBwcm9jZXNzb3IgZmlyc3QsIGJ5IGludm9raW5nIGl0OiB1c2UgYHByb2Nlc3NvcigpYCBpbnN0ZWFkIG9mIGBwcm9jZXNzb3JgLidcbiAgICApXG4gIH1cbn1cblxuLy8gQXNzZXJ0IGBub2RlYCBpcyBhIHVuaXN0IG5vZGUuXG5mdW5jdGlvbiBhc3NlcnROb2RlKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8IHR5cGVvZiBub2RlLnR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBnb3QgYCcgKyBub2RlICsgJ2AnKVxuICB9XG59XG5cbi8vIEFzc2VydCB0aGF0IGBjb21wbGV0ZWAgaXMgYHRydWVgLlxuZnVuY3Rpb24gYXNzZXJ0RG9uZShuYW1lLCBhc3luY05hbWUsIGNvbXBsZXRlKSB7XG4gIGlmICghY29tcGxldGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnYCcgKyBuYW1lICsgJ2AgZmluaXNoZWQgYXN5bmMuIFVzZSBgJyArIGFzeW5jTmFtZSArICdgIGluc3RlYWQnXG4gICAgKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZXh0ZW5kIiwicmVxdWlyZSIsImJhaWwiLCJ2ZmlsZSIsInRyb3VnaCIsInBsYWluIiwibW9kdWxlIiwiZXhwb3J0cyIsInVuaWZpZWQiLCJmcmVlemUiLCJzbGljZSIsIm93biIsImhhc093blByb3BlcnR5IiwicGlwZWxpbmUiLCJ1c2UiLCJwaXBlbGluZVBhcnNlIiwicGlwZWxpbmVSdW4iLCJwaXBlbGluZVN0cmluZ2lmeSIsInAiLCJjdHgiLCJ0cmVlIiwicGFyc2UiLCJmaWxlIiwibmV4dCIsInJ1biIsImRvbmUiLCJlcnIiLCJjb250ZW50cyIsInN0cmluZ2lmeSIsImF0dGFjaGVycyIsInRyYW5zZm9ybWVycyIsIm5hbWVzcGFjZSIsImZyb3plbiIsImZyZWV6ZUluZGV4IiwicHJvY2Vzc29yIiwiZGF0YSIsInJ1blN5bmMiLCJwcm9jZXNzIiwicHJvY2Vzc1N5bmMiLCJkZXN0aW5hdGlvbiIsImxlbmd0aCIsImluZGV4IiwiYXBwbHkiLCJ2YWx1ZXMiLCJwbHVnaW4iLCJvcHRpb25zIiwidHJhbnNmb3JtZXIiLCJ1bmRlZmluZWQiLCJJbmZpbml0eSIsImtleSIsInZhbHVlIiwiYXJndW1lbnRzIiwiYXNzZXJ0VW5mcm96ZW4iLCJjYWxsIiwic2V0dGluZ3MiLCJhZGRQbHVnaW4iLCJhZGRMaXN0IiwiYWRkUHJlc2V0IiwiRXJyb3IiLCJyZXN1bHQiLCJwbHVnaW5zIiwiYWRkIiwiZW50cnkiLCJmaW5kIiwicHVzaCIsImRvYyIsIlBhcnNlciIsImFzc2VydFBhcnNlciIsIm5ld2FibGUiLCJTdHJpbmciLCJub2RlIiwiY2IiLCJhc3NlcnROb2RlIiwiUHJvbWlzZSIsImV4ZWN1dG9yIiwicmVzb2x2ZSIsInJlamVjdCIsImNvbXBsZXRlIiwiYXNzZXJ0RG9uZSIsIkNvbXBpbGVyIiwiYXNzZXJ0Q29tcGlsZXIiLCJjb21waWxlIiwibmFtZSIsInByb3RvdHlwZSIsImtleXMiLCJ0eXBlIiwiYXN5bmNOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unified/index.js\n");

/***/ })

};
;