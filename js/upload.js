const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const preview = document.getElementById("preview");
const uploadBtn = document.getElementById("upload-btn");
const uploadStatus = document.getElementById("upload-status");

let selectedFile = null;

dropZone.addEventListener("click", () => fileInput.click());
dropZone.addEventListener("dragover", e => e.preventDefault());
dropZone.addEventListener("drop", e => {
  e.preventDefault();
  handleFile(e.dataTransfer.files[0]);
});

fileInput.addEventListener("change", e => {
  handleFile(e.target.files[0]);
});

function handleFile(file) {
  selectedFile = file;
  preview.src = URL.createObjectURL(file);
  preview.style.display = "block";
  uploadBtn.disabled = false;
}

uploadBtn.addEventListener("click", async () => {
  uploadStatus.textContent = "Uploading...";

  // Real upload goes here:
  // const result = await apiUploadImage(selectedFile);

  setTimeout(() => {
    uploadStatus.textContent = "Upload complete (demo).";
  }, 1000);
});
