# Editing the Wiki - For Advanced Users

While the web editor is sufficient for Markdown editing, users wanting to experiment with advanced HTML formatting will want to run MkDocs locally for a live preview as they work on their changes.

As a prerequisite, you will need Python 3 and Pip (comes with Python) installed. For more information, see [Python's installation guide for your platform](https://www.python.org/downloads/release/python-3122/).


### Install MkDocs

MkDocs is the software we use for the wiki. You can install it with the following command.

```
pip install mkdocs
```

### Install needed Extensions

We use additional extensions, go ahead and install those as well.

```
pip install pymdown-extensions
```

### Clone the Wiki

You can now download a copy of the Wiki onto your machine. Use the following command, or download it via GitHub Desktop.

```
git clone https://github.com/Norse-IoT/Wiki.git
```
### Open the Repository Folder.

Open the folder you just downloaded. If you're still in the command line, use this command.

```
cd Wiki
```

### Start Live Preview

You can use the following command to begin previewing your changes.

```
mkdocs serve
```

Note: if you're on Windows and the command isn't working, you can use the following command instead.
```
python -m mkdocs
```

Once its online, you can go to [http://localhost:8000]([http://localhost:8000]) for a live preview as you make changes in the Wiki folder.

### Push Changes

After making changes, use the following commands to upload to GitHub.

```
git add .
git commit -m "Summary of changes"
git push
```