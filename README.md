# backend_revision

this is contain my learning code which is during my revising the backend concept

#lect 1

Formal Definition
Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.

❌ What if We Don't Use res.end()?
If you only use res.write() without res.end(), the browser will keep loading because it’s waiting for more data.

if we want t osend multiple parts of data so use res.write()

http is the built-in module in Node.js for creating servers.

res.write() sends data but doesn’t end the response.

res.end() closes the response so the browser knows it’s done.

If you don’t use res.end(), the client will keep waiting for more data.

================================================================================
