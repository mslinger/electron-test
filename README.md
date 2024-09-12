# Readme

run <code>npm install</code>

The python file term.py contains the code where you can have the command line argument of <code>-msg="Your Message Here"</code>. Or you can experiment with whatever command line stuff you want.

To make term.py an executable move term.py out of the project to a separate folder. If you want you can create a virtual environment. Then install pyinstaller, <code>pip install pyinstaller</code> and run the command <code>pyinstaller -F term.py</code> In the dist folder you should find an executable titled, term. You can move that back into the project to replace the current term. It's also possible in main.js in the function "testText" you might need to change the term to whatever is apporipriate for your OS.

Use the command <code>npm run start</code> to run the app
Use the command <code>npm run make</code> to build.

If you build the app you should find the electron-test executable in the out folder in the folder electron-test-[linux or windows or mac] folder.
