//test about sending data to main
const activateTest = document.getElementById("test-python");

activateTest.addEventListener("click", () => {
  const getData = document.getElementById("file-in").value;

  getPythonData(getData);
});

const getPythonData = async (getData) => {
  const response = await window.py.fireText(getData);

  const paragraph = document.getElementById("python-text");
  paragraph.innerText = response;
};

//test fiel
const activateFile = document.getElementById("test-file");

activateFile.addEventListener("click", () => {
  getFileName();
});

const getFileName = async () => {
  const response = await window.py.fireFile();

  let fileName = response.filePaths[0].split("/").pop();

  document.getElementById("file-in").value = fileName;

  // console.log(response.filePaths);
};
